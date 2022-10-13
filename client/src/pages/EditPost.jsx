import './EditPost.css'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import moment from 'moment'

export default function EditPost() {
  // extract post id from url
  const { id } = useParams()
  
  const [title, setTitle] = useState()
  const [category, setCategory] = useState('')
  const [img, setImg] = useState(null)
  const [body, setBody] = useState('') 

  const history = useHistory()
  
  // fetch post detail
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${id}`)
        setTitle(res.data.posts.title)
        setCategory(res.data.posts.category)
        setBody(res.data.posts.body)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [id])

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

  // submit the updated post
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const imgPath = await imgUpload()

    try {
      await axios.put(`/posts/${id}`, {
        title,
        category,
        img: imgPath,
        body,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    })
    // redirect to home
    history.push('/')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='edit-post'>
      <h3>Edit Post</h3>
      <div className="edit-post-section">
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
        <div className="edit-post-section-editor">
          <ReactQuill 
            className='editor' 
            theme='snow' 
            value={body} 
            onChange={setBody} 
          />
        </div>
      </div>
      <button className='submit-btn' onClick={handleSubmit}>Update Post</button>
    </div>
  )
}
