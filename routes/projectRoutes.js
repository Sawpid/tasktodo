import 'dotenv/config' 
import { Router } from "express";
import mongoose from 'mongoose';
import { authMiddle } from '../middleware/authMiddleware';
import Project from '../models/Project';
import User from '../models/User';

const db = mongoose;
const ObjectId = db.Types.ObjectId
export const projectRouter = Router()

projectRouter.post('/create', authMiddle, async (request, reasponse) => {
  try {
    
    const {name, title, access, template } = request.body
    const current_user = new ObjectId(request.user.userId)
  
    const existing = await Project.findOne({$and: [{"name": name}, {"author": current_user}]})
  
    if (existing) {
      return reasponse.status(409).json({ message: "Имя проекта уже используется" })
    }

    const project = new Project({
      name:name, 
      title:title, 
      accessLevel: new ObjectId(access), 
      author: current_user,
    })
    project.members.push(current_user)

    await project.save()

    return reasponse.status(201).json( project )

  } catch (e) {
    reasponse.status(500).json({ message: e.message })
  }
})

projectRouter.get('/:user', authMiddle, async (request, reasponse) => {
  try {
    const current_user = new ObjectId(request.user.userId)
  
    const projectList = await Project.findOne({"author": crequest.params.user})
    // const detailProject = await Project.find({"name":request.params.project})

    return reasponse.json(projectList)
  } catch (e) {
    reasponse.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})
