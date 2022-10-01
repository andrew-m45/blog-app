import './EditPost.css'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function EditPost() {
  const [postBody, setPostBody] = useState('') 

  return (
    <div className='edit-post'>
      <h3>Edit Post</h3>
      <div className="edit-post-section">
        <label>Post Title</label>
        <input type="text" placeholder='Enter post title'/>
        <label>Post Category</label>
        <input type="text" placeholder='Enter post category'/>
        <label htmlFor="file">Post Image</label>
        <input  type="file" id="file"/>
        <div className="edit-post-section-editor">
          <ReactQuill className='editor' theme='snow' value={postBody} onChange={setPostBody} />
        </div>
      </div>
      <button className='submit-btn'>Submit Post</button>
    </div>
  )
}
