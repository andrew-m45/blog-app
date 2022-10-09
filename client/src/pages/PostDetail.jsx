import './PostDetail.css'
import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { MdEdit, MdDelete } from 'react-icons/md'
import axios from 'axios'
import moment from 'moment'

import {AuthContext} from '../context/authContext'

import RecommendedPosts from '../components/RecommendedPosts'

export default function PostDetail() {
  // extract post id from url
  const { id } = useParams()
  const [post, setPost] = useState({})

  // extract current user info from context
  const { currentUser } = useContext(AuthContext)
  // redirect
  const history = useHistory()

  // fetch post from DB
  useEffect (() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${id}`)
        setPost(res.data.posts)
        console.log(post.username)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [id])

  // delete post
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/posts/${id}`)
      // redirect to home
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div className='post-detail'>
      <div className='post-section'>
        <img src={post.img} alt={post.img} />
        <div className="post-header">
          <div className="post-author">
            <h4>{post.username}</h4>
            <p>{moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="post-user-actions">
              <Link to={`/edit/${post.id}`}><MdEdit className='post-cta'/></Link>
              <MdDelete onClick={() => handleDelete(post.id)} className='post-cta'/>
            </div>
          )}
        </div>
        <h2>{post.title}</h2>
        {post.body}
      </div>
      <div className='sidebar-section'>
        <RecommendedPosts />
      </div>
    </div>
  )
}
