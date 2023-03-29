import mongoose from "mongoose";
import * as dotenv from 'dotenv';

import Image from '../mongodb/models/image.js';

dotenv.config();

const createImage = async (req, res) => {
  try {
    console.log(req.body)
    const { image } = req.body;

    const newImage = await Image.create({ image });

    res.status(200).json({ message: 'Image uploaded successfully' })
  } catch (error) {
    res.json({ message: error.message });
  }
}

export default createImage;