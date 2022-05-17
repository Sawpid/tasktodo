import mongoose from 'mongoose';

const { Schema, model, ObjectId  } = mongoose;

const accessLevelSchema = new Schema({
    value:       {type: Number, required:true, unique: true},
    label:       {type: String, required:true, unique: true},
    description: {type: String, required:true},
})

export default model("AccessLevel", accessLevelSchema)