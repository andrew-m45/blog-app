import './RecommendedPosts.css'
import { useState } from "react"
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'


export default function RecommendedPosts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "ONE on Prime Video 2 results: Xiong Jing Nan beats Angela Lee in rubber match thriller",
      category: "ONE FC",
      postImg: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/10/Xiong-Jing-Nan-One-on-Prime-Video-2.png?resize=1000,600",
      postImgAlt: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/10/Xiong-Jing-Nan-One-on-Prime-Video-2.png?w=1000&h=600&crop=1",
      tags: ["One Championship", "MMA", "Angela Lee", "Xiog Jing Nan", "Nolan King"],
      body: "For the third time, Xiong Jing Nan and Angela Lee squared off inside the cage – and for the for the third time fight fans were treated to some high-level, high-paced action. Atop the ONE on Prime Video 2 event Friday at Singapore Indoor Stadium in Singapore, champion Xiong (17-3) and challenger Lee (12-2) competed in a trilogy rubber-match for the women’s strawweight title. When the dust settled, Xiong was declared winner by unanimous decision. There was a lot of dust that was kicked up over the span of five, five-minute rounds, but initially it looked like the bout might be stopped early on in the contest.",
      author: "Nolan King",
      postDate: "October 1, 2022"

    },
    {
      id: 2,
      title: "Brandon Gibson looks forward to taking that next step together with Tony Ferguson after UFC 279",
      category: "UFC",
      postImg: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/09/nate-diaz-tony-ferguson-ufc-279-1-1.jpg?resize=1000,600",
      postImgAlt: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/09/nate-diaz-tony-ferguson-ufc-279-38.jpg?resize=1024,683",
      tags: ["UFC", "MMA", "Tony Ferguson", "Farah Hannoun"],
      body: "For the third time, Xiong Jing Nan and Angela Lee squared off inside the cage – and for the for the third time fight fans were treated to some high-level, high-paced action. Atop the ONE on Prime Video 2 event Friday at Singapore Indoor Stadium in Singapore, champion Xiong (17-3) and challenger Lee (12-2) competed in a trilogy rubber-match for the women’s strawweight title. When the dust settled, Xiong was declared winner by unanimous decision. There was a lot of dust that was kicked up over the span of five, five-minute rounds, but initially it looked like the bout might be stopped early on in the contest.",
      author: "Farah Hannoun and Mike Bohn",
      postDate: "October 1, 2022"

    },
    {
      id: 3,
      title: "UFC Fight Night 211 play-by-play and live results (4 p.m. ET)",
      category: "UFC",
      postImg: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/09/UFC-Fight-Night-211-Dern-vs.-Xiaonan-faceoff.jpg?resize=1000,600",
      postImgAlt: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/09/UFC-Fight-Night-211-Dern-vs.-Xiaonan-faceoff.jpg?w=1000&h=600&crop=1",
      tags: ["UFC", "MMA", "Mckenzie Dern", "Nolan King"],
      body: "UFC Fight Night 211 takes place Saturday, and you can join us for live play-by-play and official results beginning at 4 p.m. ET (1 p.m. PT). UFC Fight Night 211 takes place at the UFC Apex in Las Vegas. The card streams on ESPN+. In the women’s strawweight main event, Mackenzie Dern (12-2 MMA, 7-2 UFC) takes on Yan Xiaonan (15-3 MMA, 6-2 UFC). In the co-feature, Randy Brown (15-4 MMA, 9-4 UFC) meets Francisco Trinaldo (28-8 MMA, 18-7 UFC) at welterweight. Follow along with our round-by-round updates and official results beginning at approximately 4 p.m. ET for the prelims on ESPN+ and 7 p.m. ET for the main card on ESPN+.",
      author: "Nolan King",
      postDate: "October 1, 2022"

    },
    {
      id: 4,
      title: "ONE on Prime Video 2 results: Xiong Jing Nan beats Angela Lee in rubber match thriller",
      category: "ONE FC",
      postImg: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/10/Xiong-Jing-Nan-One-on-Prime-Video-2.png?resize=1000,600",
      postImgAlt: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/10/Xiong-Jing-Nan-One-on-Prime-Video-2.png?w=1000&h=600&crop=1",
      tags: ["One Championship", "MMA", "Angela Lee", "Xiog Jing Nan", "Nolan King"],
      body: "For the third time, Xiong Jing Nan and Angela Lee squared off inside the cage – and for the for the third time fight fans were treated to some high-level, high-paced action. Atop the ONE on Prime Video 2 event Friday at Singapore Indoor Stadium in Singapore, champion Xiong (17-3) and challenger Lee (12-2) competed in a trilogy rubber-match for the women’s strawweight title. When the dust settled, Xiong was declared winner by unanimous decision. There was a lot of dust that was kicked up over the span of five, five-minute rounds, but initially it looked like the bout might be stopped early on in the contest.",
      author: "Nolan King",
      postDate: "October 1, 2022"

    },    
  ])
  return (
    <div className="recommended-posts">
      <h2>Other posts you may like</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.postImg} alt={post.postImg} />
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
