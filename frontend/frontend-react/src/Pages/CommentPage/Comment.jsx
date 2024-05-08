import React from "react";
import "./CommentCSS/Comment.css";


const colors = ['#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};


const comments = [
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
  // more comments
];

const Comment = () => {
  return (
    <div className="comments-container">
      {comments.slice(1).map((comment) => (
        <div key={comment.id} className="comments">
          <div
            style={{
                backgroundColor: getRandomColor(),
                width: '5vh', // Set the width of the circle
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
            J
        </div>
          <div>
            <div className="comments-author">{comment.author}</div>
            <div className="comments-text">{comment.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
