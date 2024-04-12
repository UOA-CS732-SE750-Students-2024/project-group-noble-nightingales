
import './AIRowCSS/AIRow.css'
import { NavLink } from 'react-router-dom';
import catWithFish from '../../../assets/catWithFish.png'
import AIBall from '../../../assets/AIBall.png'
import human1 from '../../../assets/human1.png'
import human2 from '../../../assets/human2.png'
import human3 from '../../../assets/human3.png'
import RedBubble from '../../../assets/RedBubble.png'
import RedChart from '../../../assets/RedChart.png'
import RedIndicator from '../../../assets/RedIndicator _bg.png'
import BlueBubble from '../../../assets/BlueBubble.png'
import BlueChart from '../../../assets/BlueNear protocol.png'
import BlueIndicator from '../../../assets/BlueIndicator _bg.png'
import OrangeBubble from '../../../assets/OrangeBubble.png'
import OrangeChart from '../../../assets/OrangeProgress.png'
import OrangeIndicator from '../../../assets/OrangeIndicator _bg.png'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
export default function AIRow() {
  return (
    <div className="AIRowContainer">
      <div >
        <ul className="leftAI">
          <li>
            <div className="firstRow">
              <ul className="embeddedAI">
                <li><img src= {AIBall} alt="AIBall" /></li>
                <li className="text">@Embedded AI</li>
              </ul>
              <div>
              <ul className="human">
                <li><img src={human1} alt="" /></li>
                <li><img src={human2}alt="" /></li>
                <li><img src={human3} alt="" /></li>
              </ul>
            </div>
            </div>
            
          </li>
          <li className="firstLineText">Exploration of Embedded AI</li>
          <li className="secondLineText">96812 Users From All Over the World Have Tried It</li>
          <li>
            <ul className="imageList">
              <li>
              <div className="image-container">
                <img src={RedBubble} alt="Bubble" className="bubble-image" />
                <img src={RedChart} alt="Chart" className="chart-image" />
                <img src={RedIndicator} alt="Indicator" className="indicator-image" />
              </div>
              </li>
              <li>
                <div className="image-container">
                 <img src={BlueBubble} alt="Bubble" className="bubble-image" />
                 <img src={BlueChart} alt="Chart" className="blue-chart-image" />
                <img src={BlueIndicator} alt="Indicator" className="indicator-image" />
                </div>
              </li>
              <li>
                <div className="image-container">
                <img src={OrangeBubble} alt="Bubble" className="bubble-image" />
                <img src={OrangeChart} alt="Chart" className="orange-chart-image" />
                <img src={OrangeIndicator} alt="Indicator" className="indicator-image" />
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul className="ContentRecommandation">
            <li>
              <NavLink to="/youtube" className="ContentRecommendationinside">
                <span className=" ContentText">Content Recommendation</span>
                <span className="arrow">
                  <ArrowForwardRoundedIcon />
                </span>
              </NavLink>
            </li>

            </ul>
          
          </li>
        </ul>
      </div>
      <div className="rightPicture">
          <img src={catWithFish} alt="" />
      </div>
    </div>

  )
}
