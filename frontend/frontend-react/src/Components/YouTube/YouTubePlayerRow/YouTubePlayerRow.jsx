import "./YouTubePlayerRowCSS/YouTubePlayerRow.css";
import Star from "../../../assets/Star.png";
import YouTubeCover from "../../../assets/YouTubeCover.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChatIcon from "@mui/icons-material/Chat";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Comment from "../../../Pages/CommentPage/Comment";
import "../../../Pages/CommentPage/CommentCSS/Comment.css";
import { getCommentsByVideoId, saveComment } from "../../../Requests/Comment/CommentRequest";
import { AuthContext } from "../../../ApplicationContext";

const colors = ['#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const backgroundColor = getRandomColor();
const secondBackgroundColor = getRandomColor();

function getInitialLetter(string) {
  if (!string || typeof string !== 'string') {
      return ''; // Return an empty string if input is not valid
  }
  return string[0].toUpperCase(); // Get the first character and convert it to uppercase
}


export default function YouTubePlayerRow({videoUrl, authorName, videoId, videoDescription}) {

  const [showComments, setShowComments] = useState(false);
  const [,,,,,,userId,, currentVideo, setCurrentVideo] = useContext(AuthContext)
  const [comments, setComments] = useState([{}]);
  const [commentText, setCommentText] = useState('')
  const [recommendedVideos, setRecommendedVideos] = useState([])

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // This will stop the default action of entering a new line
        console.log('Enter key was pressed');
        postComment(); // Call whatever function you need to execute
    }
  }

  function handleChange(event) {
    setCommentText(event.target.value);
}

  async function postComment() {
    const newData = await saveComment(currentVideo.videoId, userId, commentText)
    setComments([...comments, newData])
  }

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

  useEffect(() => {

    async function fetchComments() {
      const response = await getCommentsByVideoId(currentVideo ? currentVideo.videoId : "1")
      console.log("retrieved comments are: " + response)
      setComments(response)
    }
    fetchComments();
  }, [currentVideo])

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
          src={currentVideo ? currentVideo.videoUrl : videoUrl}
          allowFullScreen
        />
        <div className="videoInfo-container">
          <h3>{currentVideo ? currentVideo.title : "Video Title"}</h3>
          <h5 style={{ marginTop: "-1.5vh" }}>
            <RemoveRedEyeIcon className="videoInfoIcon" />
            11,234
            <ChatIcon className="videoInfoIcon" style={{ marginLeft: "2vw" }} />
            11,234
          </h5>
          <div className="authorInfo-container">
          <div
            style={{
                backgroundColor: backgroundColor,
                width: '5vh', // Set the width of the circle
                height: '5vh', // Set the height of the circle
                borderRadius: '50%', // Make it circular
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff', // Set text color to white
                fontSize: '2.5vh', // Adjust font size as needed
                marginLeft: '1vw',
                fontWeight: 'bold',
            }}
        >
            {getInitialLetter(currentVideo.title)}
        </div>
            <div className="authorInfo">
              <h4>
                {currentVideo.channel ? currentVideo.channel.channelName : "Channel Name"}
                <img
                  src={Star}
                  alt="Popular video star"
                  style={{
                    verticalAlign: "-1vh",
                    width: "1.5vw",
                    marginLeft: "0.5vw",
                  }}
                />
              </h4>

            </div>
            <div className="videoDescription">
              {currentVideo ? currentVideo.description : "Video descriptions"}
            </div>
          </div>
        </div>
        <div className="comment-container">
          <div className="commentTitle">
            <h3 style={{ marginTop: "1vh" }}>Comments</h3>
            <div key={comments[0] ? comments[0].id : null} className="comments">
            <div
            style={{
                backgroundColor: secondBackgroundColor,
                width: '5vh', // Set the width of the circle
                height: '5vh', // Set the height of the circle
                borderRadius: '50%', // Make it circular
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff', // Set text color to white
                fontSize: '2.5vh', // Adjust font size as needed
                marginRight: "0.6vw",
                marginLeft: '0.3vw',
                fontWeight: 'bold',
            }}
        >
            {getInitialLetter(comments[0] ? comments[0].username : "Y")}
        </div>
              <div>
                <div className="comments-author" style={{marginLeft: "0.6vw",
                  paddingBottom: "0.2vh"
                }}>{comments[0] ? comments[0].username : "No Comment Yet"}</div>
                <div className="comments-text" style={{width: "50vw"}}>{comments[0] ? comments[0].comments : "Be the first one to comment"}</div>
              </div>
            </div>
            <button
              onClick={toggleComments}
              className="see-more-button-youtube-play"
              style={{
                marginLeft: "56.5vw",
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
            <div>Write your comments</div>
            
            <textarea type="text" className="custom-input-youtube-play" rows="4" placeholder="Write a comment..."  onKeyDown={handleKeyPress} onChange={handleChange} value={commentText}/>
          </div>
          {showComments && <Comment comments={comments}/>}
        </div>
      </div>
      {!showComments && <div className="right">
        <h2 style={{ marginLeft: "2.5vw" }}>
          Recommended Videos
          <img
            src={Star}
            alt="Popular video star"
            style={{
              verticalAlign: "-1.0vh",
              width: "2vw",
              marginLeft: "1vw",
              paddingBottom: "0.5vh",
            }}
          />
        </h2>
        {renderVideoList(dummyVideos)}
      </div>}
      
    </div>
  );
}
