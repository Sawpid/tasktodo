import mongoose from 'mongoose';

const { Schema, model, ObjectId  } = mongoose;

const skillSchema = new Schema({
    value: {type: String, required:true, unique: true},
    label: {type: String, required:true, unique: true},
    color: {type: String, required:true, default:"light"},
})

export default model("Skill", skillSchema)