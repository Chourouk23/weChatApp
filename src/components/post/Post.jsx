import React, { useState } from "react";
import "./Post.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from "../comments/Comments";
const Post = ({ post }) => {
  const liked = false;
  const [commentOpen,setCommentOpen]=useState(false);
  return (
    <div className="post">
      <div>
        <div className="post-header">
          <div className="user-infos">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <span className="user-name">{post.name}</span>
              <span className="post-time">1 minute ago</span>
            </div>
          </div>
          <div className="more-icon">
            <MoreHorizOutlinedIcon color="black" />
          </div>
        </div>
        <div className="post-content">
          <p className="post-desc">{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="interactions">
          <div className="interaction-item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <p>10 Likes</p>
          </div>
          <div className="interaction-item" onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            <p>3 Comments</p>
          </div>
          <div className="interaction-item">
            <ShareOutlinedIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
      <div className="comments-section">
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;
