import './PostDetail.css'
import { useState } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

import RecommendedPosts from '../components/RecommendedPosts'

export default function PostDetail() {
 const post = {
    id: 3,
    title: "UFC Fight Night 211 play-by-play and live results (4 p.m. ET)",
    category: "UFC",
    postImg: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/09/UFC-Fight-Night-211-Dern-vs.-Xiaonan-faceoff.jpg?resize=1000,600",
    postImgAlt: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/09/UFC-Fight-Night-211-Dern-vs.-Xiaonan-faceoff.jpg?w=1000&h=600&crop=1",
    tags: ["UFC", "MMA", "Mckenzie Dern", "Nolan King"],
    body: "UFC Fight Night 211 takes place Saturday, and you can join us for live play-by-play and official results beginning at 4 p.m. ET (1 p.m. PT). UFC Fight Night 211 takes place at the UFC Apex in Las Vegas. The card streams on ESPN+. In the women’s strawweight main event, Mackenzie Dern (12-2 MMA, 7-2 UFC) takes on Yan Xiaonan (15-3 MMA, 6-2 UFC). In the co-feature, Randy Brown (15-4 MMA, 9-4 UFC) meets Francisco Trinaldo (28-8 MMA, 18-7 UFC) at welterweight. Follow along with our round-by-round updates and official results beginning at approximately 4 p.m. ET for the prelims on ESPN+ and 7 p.m. ET for the main card on ESPN+.",
    author: "Nolan King",
    postDate: "October 1, 2022"

  }

  return (
    <div className='post-detail'>
      <div className='post-section'>
        <img src={post.postImgAlt} alt={post.postImgAlt} />
        <div className="post-header">
          <div className="post-author">
            <h4>{post.author}</h4>
            <p>{post.postDate}</p>
          </div>
          <div className="post-user-actions">
            <Link to={`/edit/${post.id}`}><MdEdit className='post-cta'/></Link>
            <MdDelete className='post-cta'/>
          </div>
        </div>
        <h2>{post.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique quo, asperiores, est vitae impedit, accusantium dolore vero provident sed nobis alias. 
          Vitae, totam ipsam fugit cupiditate deserunt porro quam fuga eveniet quo, reiciendis, natus ea sint nostrum maxime est asperiores nam itaque iusto. 
          At ex similique laboriosam. Ipsum, voluptas ab.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique quo, asperiores, est vitae impedit, accusantium dolore vero provident sed nobis alias. 
          Vitae, totam ipsam fugit cupiditate deserunt porro quam fuga eveniet quo, reiciendis, natus ea sint nostrum maxime est asperiores nam itaque iusto. 
          At ex similique laboriosam. Ipsum, voluptas ab.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique quo, asperiores, est vitae impedit, accusantium dolore vero provident sed nobis alias. 
          Vitae, totam ipsam fugit cupiditate deserunt porro quam fuga eveniet quo, reiciendis, natus ea sint nostrum maxime est asperiores nam itaque iusto. 
          At ex similique laboriosam. Ipsum, voluptas ab.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique quo, asperiores, est vitae impedit, accusantium dolore vero provident sed nobis alias. 
          Vitae, totam ipsam fugit cupiditate deserunt porro quam fuga eveniet quo, reiciendis, natus ea sint nostrum maxime est asperiores nam itaque iusto. 
          At ex similique laboriosam. Ipsum, voluptas ab.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique quo, asperiores, est vitae impedit, accusantium dolore vero provident sed nobis alias. 
          Vitae, totam ipsam fugit cupiditate deserunt porro quam fuga eveniet quo, reiciendis, natus ea sint nostrum maxime est asperiores nam itaque iusto. 
          At ex similique laboriosam. Ipsum, voluptas ab.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Similique quo, asperiores, est vitae impedit, accusantium dolore vero provident sed nobis alias. 
          Vitae, totam ipsam fugit cupiditate deserunt porro quam fuga eveniet quo, reiciendis, natus ea sint nostrum maxime est asperiores nam itaque iusto. 
          At ex similique laboriosam. Ipsum, voluptas ab.
          <br/>
          <br/>
        </p>
      </div>
      <div className='sidebar-section'>
        <RecommendedPosts />
      </div>
    </div>
  )
}
