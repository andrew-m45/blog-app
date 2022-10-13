import './Home.css'
import { useState, useEffect } from 'react' 
import PostList from '../components/PostList'
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect (() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/posts')
        setPosts(res.data.posts)
        // console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
 
  return (
    <div className='home'>
      <PostList posts={posts}/>
    </div>
  )
}
