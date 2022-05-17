import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const ObjectId = mongoose.Types.ObjectId

const boardSchema = new Schema(                        { 
    title:       {type: String, trim:true, required:true},
    description: {type: String, trim:true},
    type:        {type: Number, required:true, default:0},
    tasks:       [{ type : ObjectId, ref: 'Task' }]
},)

export default model("Board", boardSchema)