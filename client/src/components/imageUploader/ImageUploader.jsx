import { useState } from 'react';
import axios from 'axios';

import mountain from '../../images/image.svg'
import './imageUploader.css';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const imageHandler = e => {
    setSelectedFile(e.target.files[0])
    console.log(selectedFile, 'IMAGE')
  }

  const imageUploadHandler = () => {
    const image = new FormData();
    image.append('image', selectedFile, selectedFile.name)
    axios.post('http://localhost:8080/api/v1/images', image)
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='imageUploader_container'>
      <p className='imageUploader_text_top'>Upload your image</p>
      <p className='imageUploader_text_mid'>File should be Jpeg, Png,...</p>
      <div className='imageUploader_dropbox_container'>
        <div className='imageUploader_image_container'>
          <img className='imageUploader_image' src={mountain} />
        </div>
        <p className='imageUploader_image_text'>Drag & Drop your image here</p>
      </div>
      <p className='imageUploader_text_bottom'>Or</p>
      <label for="file-upload" class="imageUploader_custom-file-upload">
        Choose a file
      </label>
      <input id="file-upload" type="file" onChange={imageHandler}/>
      <button onClick={imageUploadHandler}>Upload</button>
    </div>
  )
}

export default ImageUploader;