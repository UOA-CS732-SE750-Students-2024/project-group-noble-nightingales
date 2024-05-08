import React from "react";
import "./CommentCSS/Comment.css";


const colors = ['#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};



function getInitialLetter(string) {
  if (!string || typeof string !== 'string') {
      return ''; // Return an empty string if input is not valid
  }
  return string[0].toUpperCase(); // Get the first character and convert it to uppercase
}

const Comment = ({comments}) => {
  
  let backgroundColor = []
  for (let i = 0; i < comments.length; i++) {
    backgroundColor.push(getRandomColor());
  }
  return (
    <div className="comments-container">
      {comments.slice(0).map((comment, index) => (
        <div key={comment.id} className="comments">
          <div
            style={{
                backgroundColor: backgroundColor[index],
                width: '5vh', // Set the width of the circlesdf
                height: '5vh', // Set the height of the circle
                borderRadius: '50%', // Make it circular
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff', // Set text color to white
                fontSize: '2.5vh', // Adjust font size as needed
                fontWeight: 'bold',
            }}
        >
            {getInitialLetter(comment.username)}
        </div>
          <div>
            <div className="comments-author">{comment.username}</div>
            <div className="comments-text">{comment.comments}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
