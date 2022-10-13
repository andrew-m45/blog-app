import './RecommendedPosts.css'
import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import axios from 'axios'


export default function RecommendedPosts({category}) {
  const [posts, setPosts] = useState([])

  // get all related posts based on category
  useEffect (() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/category/${category}`)
        setPosts(res.data.posts)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [category])
   
  return (
    <div className="recommended-posts">
      <h2>Other posts you may like</h2>
      {posts && posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../uploads/${post.img}`} alt={`../uploads/${post.img}`} />
          <div className='label'><p className='chip'>{post.category}</p></div>
          <h3>{post.title}</h3>
          <Link to={`/post/${post.id}`} className='post-item-link'>
          <span className='cta-container'>
            Read More 
            <FaArrowRight className='icon-post'/>
          </span>
        </Link>
        </div>
      ))}
    </div>
  )
}
