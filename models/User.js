import mongoose from 'mongoose';

const { Schema, model, ObjectId  } = mongoose;

const userSchema = new Schema({
    email: {type: String, required:true, unique: true},
    username: {type: String, required:true, unique: true},
    password: {type: String, required:true},
    name: {
        last:   { type: String, required:true,  trim:true},
        first:  { type: String, required:true,  trim:true},
        middle: { type: String, required:false, trim:false}
    },
    profile: {
        company:    {type: String, trim:true},
        education:  {type: String, trim:true},
        website:    {type: String, trim:true},
        // group:      [{ type : ObjectId, ref: 'Group' }],
        skills:     [{ type : ObjectId, ref: 'Skill' }],
    },
    boards: {
        member: [{ type : ObjectId, ref: 'Board' }],
        star:   [{ type : ObjectId, ref: 'Board' }],
    },
    createDate:  {type: Date, default: Date.now, required:true},
    updateDate:  {type: Date, default: Date.now, required:true},
    accessToken: {type: String},
})

export default model("User", userSchema)