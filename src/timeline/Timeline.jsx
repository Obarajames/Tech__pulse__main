import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "4w",
    },
    {
      user: "mariussss",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "3w",
    },
    {
      user: "James",
      postImage:
      "https://images.unsplash.com/photo-1689236913171-2f53681b8e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      likes: 150,
      timestamp: "7d",
    },
    {
      user: "may",
      postImage:
        "https://images.unsplash.com/photo-1689164001188-fdd108d22bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      likes: 1806,
      timestamp: "6d",
    },
    {
      user: "molly",
      postImage:
        "https://images.unsplash.com/photo-1689151909407-89f198ed6a83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      likes: 340,
      timestamp: "1y",
    },
    {
      user: "manny",
      postImage:
        "https://plus.unsplash.com/premium_photo-1669557209110-34d9a507d1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      likes: 440,
      timestamp: "5d",
    },
    {
      user: "Nikki",
      postImage:
        "https://images.unsplash.com/photo-1688404066736-76ef6d7ef5d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      likes: 7740,
      timestamp: "8d",
    },
    {
      user: "Mia",
      postImage:
        "https://images.unsplash.com/photo-1688820209569-a6650f383fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      likes: 7740,
      timestamp: "8d",
    },
    {
      user: "Lori",
      postImage:
        "https://images.unsplash.com/photo-1688499154085-307fdbf38d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      likes: 7740,
      timestamp: "2d",
    },
    {
      user: "kobee",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
