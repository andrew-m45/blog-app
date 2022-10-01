import './CreatePost.css'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function CreatePost() {
  const [postBody, setPostBody] = useState('') 
  return (
    <div className='create-post'>
      <h3>Create Post</h3>
      <div className="create-post-section">
        <label>Post Title</label>
        <input type="text" placeholder='Enter post title'/>
        <label>Post Category</label>
        <input type="text" placeholder='Enter post category'/>
        <label htmlFor="file">Post Image</label>
        <input  type="file" id="file"/>
        <div className="create-post-section-editor">
          <ReactQuill className='editor' theme='snow' value={postBody} onChange={setPostBody} />
        </div>
      </div>
      <button className='submit-btn'>Submit Post</button>
    </div>
  )
}
