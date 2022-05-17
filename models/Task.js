import mongoose from 'mongoose';

const { Schema, model, ObjectId  } = mongoose;

const taskSchema = new Schema({
    name:        {type: String, required:true, trim:true},
    text:        {type: String, trim:true},
    status:      {type: String, required:true, default:"Задачи"},
    progress:    {type: Number, required:true, min:0, max:100, default:0},
    author:      {  type : ObjectId, ref: 'User' },
    tags:        [{ type : ObjectId, ref: 'Tag' }],
    members:     [{ type : ObjectId, ref: 'User' }],
    createDate:  {type: Date, default: Date.now, required:true},
    updateDate:  {type: Date, default: Date.now, required:true},
})

export default model("Task", userSchema)