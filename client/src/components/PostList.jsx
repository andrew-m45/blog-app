import './PostList.css'
import PostItem from './PostItem'

export default function PostList({posts}) {
  return (
    <div className='post-list'>
      {posts.map((post) => (
        <PostItem post={post} key={post.id}/>
      ))}
    </div>
  )
}
