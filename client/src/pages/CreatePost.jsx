import './CreatePost.css'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import moment from 'moment'

export default function CreatePost() {
  // store form input values
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [img, setImg] = useState(null)
  const [body, setBody] = useState('') 

  // image upload function
  const imgUpload = async () => {
    try {
      // create form data object
      const formData = new FormData();
      // append img to formData
      formData.append("file", img)
      // send request to file upload endpoint & return img path
      const res = await axios.post('/upload', formData)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  // send form details to DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const imgPath = await imgUpload()

    try {
      await axios.post('/posts', {
        title,
        category,
        img: imgPath,
        body,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='create-post'>
      <h3>Create Post</h3>
      <div className="create-post-section">
        <label>Post Title</label>
        <input 
          type="text" 
          placeholder='Enter post title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Post Category</label>
        <input 
          type="text" 
          placeholder='Enter post category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="file">Post Image</label>
        <input  
          type="file" 
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <div className="create-post-section-editor">
          <ReactQuill 
            className='editor' 
            theme='snow' 
            value={body} 
            onChange={setBody} 
          />
        </div>
      </div>
      <button className='submit-btn' onClick={handleSubmit}>Submit Post</button>
    </div>
  )
}
