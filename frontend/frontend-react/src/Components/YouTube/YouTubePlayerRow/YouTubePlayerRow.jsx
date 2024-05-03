import "./YouTubePlayerRowCSS/YouTubePlayerRow.css";
import Star from "../../../assets/Star.png";
import YouTubeCover from "../../../assets/YouTubeCover.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChatIcon from "@mui/icons-material/Chat";
import Helen from "../../../assets/helen.jpg";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Comment from "../../../Pages/CommentPage/Comment";
import "../../../Pages/CommentPage/CommentCSS/Comment.css";

const comments = [
  // 示例评论
  {
    id: 1,
    author: "Mary Cooper",
    text: "5 key components for aspiring designers that shape stylish design. Practice in Figma and create our first layout. That's all we're going to do in this lesson, buddy!",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 2,
    author: "John Doe",
    text: "React makes it painless to create interactive UIs.",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 3,
    author: "Jane Smith",
    text: "Always start with a good design in Figma before coding.",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 4,
    author: "Mike Johnson",
    text: "Responsive web design is essential in today's world.",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 5,
    author: "Emily Roberts",
    text: "I think understanding hooks deeply can really elevate your React skills.",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 6,
    author: "Alex Thompson",
    text: "TypeScript offers you a super set of JavaScript with type safety.",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 7,
    author: "Mary Cooper",
    text: "5 key components for aspiring designers that shape stylish design. Practice in Figma and create our first layout. That's all we're going to do in this lesson, buddy!",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 8,
    author: "John Doe",
    text: "React makes it painless to create interactive UIs.",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 9,
    author: "Jane Smith",
    text: "Always start with a good design in Figma before coding.",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 10,
    author: "Mike Johnson",
    text: "Responsive web design is essential in today's world.",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 11,
    author: "Emily Roberts",
    text: "I think understanding hooks deeply can really elevate your React skills.",
    avatar: "https://via.placeholder.com/40x40",
  },
  {
    id: 12,
    author: "Alex Thompson",
    text: "TypeScript offers you a super set of JavaScript with type safety.",
    avatar: "https://via.placeholder.com/40x40",
  },
  // 更多评论
];

export default function YouTubePlayerRow() {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };
  const dummyVideos = [
    {
      imageURL: YouTubeCover,
      name: "Starcraft1",
      author: "Peter Wang",
    },
    {
      imageURL: YouTubeCover,
      name: "Starcraft2",
      author: "Peter Wang",
    },
    {
      imageURL: YouTubeCover,
      name: "Starcraft3",
      author: "Peter Wang",
    },
    {
      imageURL: YouTubeCover,
      name: "Starcraft4",
      author: "Peter Wang",
    },
  ];

  // Function to render the video list
  const renderVideoList = (videos) => {
    return (
      <ul className="videoList">
        {videos.map((video) => (
          <li className="videoListElement" key={video.name}>
            <div className="videoInfo-container">
              <NavLink to="/youtube/player">
                <img
                  className="videoImage"
                  src={video.imageURL}
                  alt={video.name}
                />
              </NavLink>
              <div className="videoInfo">
                <span style={{ fontSize: "1.9vh", marginLeft: "-1.2vw" }}>
                  {video.name}
                </span>
                <span
                  style={{
                    fontSize: "1.6vh",
                    color: "gray",
                    marginLeft: "-1.2vw",
                  }}
                >
                  Made By {video.author}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="YouTubePlayerRow-container">
      <div className="left">
        <iframe
          src="https://www.youtube.com/embed/9hb_0TZ_MVI?rel=0"
          allowFullScreen
        />
        <div className="videoInfo-container">
          <h3>Video name</h3>
          <h5 style={{ marginTop: "-1.5vh" }}>
            <RemoveRedEyeIcon className="videoInfoIcon" />
            11,234
            <ChatIcon className="videoInfoIcon" style={{ marginLeft: "2vw" }} />
            11,234
          </h5>
          <div className="authorInfo-container">
            <img
              src={Helen}
              style={{
                width: "auto",
                height: "6vh",
                marginLeft: "1vw",
              }}
            />
            <div className="authorInfo">
              <h4>
                Helen
                <img
                  src={Star}
                  alt="Popular video star"
                  style={{
                    verticalAlign: "-0.6vh",
                    width: "1.5vw",
                    marginLeft: "0.5vw",
                  }}
                />
              </h4>
              <h5 style={{ marginLeft: "-1vw" }}>230,000 subscribers</h5>
            </div>
            <div className="videoDescription">
              <span>description...</span>
            </div>
          </div>
        </div>
        <div className="comment-container">
          <div className="commentTitle">
            <h3 style={{ marginTop: "1vh" }}>Comments</h3>
            <div key={comments[0].id} className="comments">
              <img
                className="comments-avatar"
                src={comments[0].avatar}
                alt="Avatar"
              />
              <div>
                <div className="comments-author">{comments[0].author}</div>
                <div className="comments-text">{comments[0].text}</div>
              </div>
            </div>
            <button
              onClick={toggleComments}
              style={{
                marginLeft: "50.5vw",
                marginTop: "-2vh",
                textDecoration: "none",
                background: "none",
                border: "none",
                color: "gray",
                cursor: "pointer",
              }}
            >
              See More
            </button>
          </div>
          {showComments && <Comment />}
        </div>
      </div>
      <div className="right">
        <h2 style={{ marginLeft: "2.5vw" }}>
          Related Videos
          <img
            src={Star}
            alt="Popular video star"
            style={{
              verticalAlign: "-1.0vh",
              width: "2vw",
              marginLeft: "1vw",
            }}
          />
        </h2>
        {renderVideoList(dummyVideos)}
      </div>
    </div>
  );
}
