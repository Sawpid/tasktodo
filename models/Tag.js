import mongoose from 'mongoose';

const { Schema, model, ObjectId  } = mongoose;

const tagSchema = new Schema({
    value: {type: Number, required:true, unique: true},
    label: {type: String, required:true, unique: true},
    color: {type: String, required:true, default:"light"},
})

export default model("Tag", tagSchema)