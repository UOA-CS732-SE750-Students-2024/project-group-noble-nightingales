import "./YouTubePlayerCSS/YouTubePlayer.css";
import YouTubePlayerRow from "../../Components/YouTube/YouTubePlayerRow/YouTubePlayerRow";
import { useSearchParams } from 'react-router-dom';
export default function YouTubePlayer() {
  const [searchParams] = useSearchParams();
  const videoUrl = searchParams.get('videoUrl');
  console.log(videoUrl)
  return (
    <div>
      {/* <BallDynamic /> */}
      <div className="YouTubePlayer-container">
        <div>
          <YouTubePlayerRow videoUrl={videoUrl} />
        </div>
      </div>
    </div>
  );
}
