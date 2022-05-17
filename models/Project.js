import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const ObjectId = mongoose.Types.ObjectId

const projectSchema = new Schema({
    name:           {type: String, required:true, trim:true},
    title:          {type: String, required:true, trim:true},
    description:    {type: String, trim:true},
    // status:         {  type : ObjectId, ref: 'Status' },
    accessLevel:    {  type : ObjectId, ref: 'AccessLevel' },
    author:         {  type : ObjectId, ref: 'User' },
    stars:          [{ type : ObjectId, ref: 'User' }],
    members:        [{ type : ObjectId, ref: 'User' }],
    boards:         [{ type : ObjectId, ref: 'Board' }],
    createDate:     {type: Date, default: Date.now, required:true},
    updateDate:     {type: Date, default: Date.now, required:true},
})

export default model("Project", projectSchema)