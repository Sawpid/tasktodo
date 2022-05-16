import 'dotenv/config' 
import { Router } from "express";
import User from '../models/User';
import bcrypt from 'bcryptjs';
import { check, oneOf, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

export const authRouter = Router()

authRouter.post(
    "/signup", 
    oneOf([
        check("email", "Некорректный email").isEmail(),
        check("username", "Имя пользователя только английские буквы и цифры").matches(/^[a-z0-9_-]{3,16}$/),
        check("password", "Минимальная длина пароля 6 символов").isLength({min:6}),
    ]),
    async (request, reasponse) => {

    try {
        const validation = validationResult(request)
        if (!validation.isEmpty()) {
            return reasponse.status(400).json({errors: validation.array()})
        }
        
        const {last_name, first_name, username, email, password} = request.body
        const doubleName = await User.findOne({username:username})
        if (doubleName){
            return reasponse.status(400).json({message:"Имя пользователя уже используется!"})
        }
        const doubleEmail = await User.findOne({email:email})
        if (doubleEmail){
            return reasponse.status(400).json({message:"Такой email уже занят!"})
        }
        const hPassword = await bcrypt.hash(password, 10)
        const newUser = new User({email, username, password:hPassword, name:{last:last_name, first:first_name}})
        await newUser.save((err, doc) => console.log(err, doc))

        return reasponse.status(201).json({ message: 'Пользователь создан' })
        
    } catch (error) {
        reasponse.status(500).json({message: error.message})
    }
})

authRouter.post(
    "/signin", 
    [
        check("username", "Имя пользователя только английские буквы и цифры").matches(/^[a-z0-9_-]{3,16}$/),
        check("password", "Минимальная длина пароля 6 символов").isLength({min:6}),
    ],
    async (request, reasponse) => {
    try {
        const validation = validationResult(request)
        if (!validation.isEmpty()) {
            return reasponse.status(400).json({errors: validation.array()})
        }
        const {username, password} = request.body

        const user = await User.findOne({username:username})

        if (!user){
            return reasponse.status(401).json({message:"Такой пользователь не найден!"})
        }else{
            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch){
                const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'} )
                return reasponse.status(200).json({message:`Добро пожаловать, ${user.username}!`, id: user.id, name:user.username, token: token})
            }else{
                return reasponse.status(401).json({message:"Неверный пароль!"})
            }
        }

        
    } catch (error) {
        reasponse.status(500).json({message: "Ошибка сервера!"})
    }
})