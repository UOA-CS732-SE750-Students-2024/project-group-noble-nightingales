import "./playerCSS/YoutubePlayer.css";
import { useState } from "react";
import Model from "./popup";

const YoutubePlayer = () => {
const [titleArray, setTitleArray] = useState(["Special B-day podcast1", "Special B-day podcast2", "Special B-day podcast3", "Special B-day podcast4", "Special B-day podcast5"])
const [urlsOfRecom, setUrlsOfRecom] = useState([]);
const [author, setAuthor] = useState(["Susan Stewart1", "Susan Stewart2", "Susan Stewart3", "Susan Stewart4", "Susan Stewart5"])
const [time, setTime] = useState(["44:12", "44:12", "44:12", "44:12", "44:12"])
const [view, setView] = useState(["66,560", "66,560", "66,560", "66,560", "66,560"])
const [url, setUrl] = useState("https://www.youtube.com/embed/9hb_0TZ_MVI?rel=0");
const [Description, setDescription] = useState("description of the video, description of the video, description of the video, description of the video description of the video, description of the video, description of the video, description of the video, description of the video");
const [comment, setComment] = useState("5 key components for aspiring designers that shape stylish design. Practice in Figma and create our first layout. That's all we're going to do in this lesson, buddy!");
return (
    <div className="youtube-page1">
      <div className="top-header1">
      </div>
      <img className="layers-icon1" alt="" src="/src/assets/-layers@2x.png" />
      <div className="main-video">
        <img className="bg-icon" alt="" src="/src/assets/bg.svg" />
        <iframe
          className="video-area"
          id="0"
          src={url}
          frameBorder="0"
          allowFullScreen
        />
        <div className="detail">
          <img className="avatar-icon" alt="" src="/src/assets/helen.jpg" />
          <button className="details">
            <div className="name">
              <button className="streamer">Helen_Streamer</button>
              <img className="icon3" alt="" src="/src/assets/icon2.svg" />
            </div>
            <button className="subscription">243,000 subscribers</button>
          </button>
        </div>
        <img className="divider-icon" alt="" src="/src/assets/divider.svg" />
        <div className="upnext-video">
          <div className="video">
            <div className="description">
              <div className="details1" />
            </div>
          </div>
          <div className="video">
            <div className="description">
              <div className="details1" />
            </div>
          </div>
        </div>

        <div className="dark-theme">
          <img className="add-user-icon" alt="" src="/src/assets/add-user.jpg" />
          <b className="label2">Subscribe</b>
        </div>
        <div className="main-video-child" />
        <div className="description-of-the">
          {Description}
        </div>
      </div>
      <div className="title5">Related Videos</div>
      <div className="title6">Comments</div>
      <img className="avatar-icon1" alt="" src="/src/assets/avatar2@2x.png" />
      <div className="layout1">
        <div className="name1">Mary Cooper</div>
        <div className="description2">
          {comment}
        </div>
      </div>
      
      <Model className="see-more"/>
      <img className="vector-icon17" alt="" src="/src/assets/vector2.svg" />

      <div>{titleArray.map((item, index)=>(

        <div className="rectangle-parent" key={index}>
          <div className = "text">
            <button className="group-item" />
            <button className="screen-video" />
            <div className="description3">
              <div className="layout2">
                <button className="title7">{item}</button>
                <button className="author">{author[index]}</button>
              </div>
              <div className="details3">
                <button className="time">{time[index]}</button>
                <button className="dot" />
                <button className="time">{view[index]} views</button>
              </div>
            </div>
          </div>
        </div>

      ))}</div>


    </div>
  );
};

export default YoutubePlayer;
