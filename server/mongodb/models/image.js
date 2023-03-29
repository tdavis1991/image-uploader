import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  photo: { type: String, required: true }
});

const imageModel = mongoose.model('Image', ImageSchema);

export default imageModel;