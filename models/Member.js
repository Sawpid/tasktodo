import mongoose from 'mongoose';

const { Schema, model, ObjectId  } = mongoose;

const memberSchema = new Schema({
    value:  {type: Number, required:true, unique: true},
    label:  {type: String, required:true},
    name:   {type: String, required:true},
    avatar: {type: String},
})

export default model("Member", memberSchema)