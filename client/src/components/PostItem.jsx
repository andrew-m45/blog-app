import './PostItem.css'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'

export default function PostItem({post}) {
  return (
    <div className='post-item'>
      <img src={post.img} alt={post.img} className="post-item-cover"/>
      <div className='label'><p className='chip'>{post.category}</p></div>
      <h3>{post.title}</h3>
      <p className='post-item-desc'>{post.body.substring(0, 90)}....</p>
      <footer>
        <Link to={`/post/${post.id}`} className='post-item-link'>
          <span className='cta-container'>
            Read More 
            <FaArrowRight className='icon-post'/>
          </span>
        </Link>
      </footer>
    </div>
  )
}
