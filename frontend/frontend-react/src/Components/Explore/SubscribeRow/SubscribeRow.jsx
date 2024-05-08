import "./SubscribeRowCSS/SubscribeRow.css";
import human1 from "../../../assets/subHuman1.png";
import human2 from "../../../assets/subHuman2.png";
import human3 from "../../../assets/subHuman3.png";
import human4 from "../../../assets/subHuman4.png";
import Combination from "../../../assets/subCombination.png";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { SubscribeRequest } from "../../../Requests/Auth/SubscribeRequest";
import { useState } from "react";

export default function SubscribeRow() {
  const [email, setEmail] = useState("")
  return (
    <div className="SubscribeRowContainer">
      <div className="leftSub">
        <ul className="leftList">
          <li>
            <ul className="humenPicture">
              <li>
                <img src={human1} alt="" />
              </li>
              <li>
                <img src={human2} alt="" />
              </li>
              <li>
                <img src={human3} alt="" />
              </li>
              <li>
                <img src={human4} alt="" />
              </li>
            </ul>
          </li>
          <li className="newsletterText"> News letter</li>
          <li className="Subext">Subscribe Our Newsletter</li>
          <li>
            <div className="emailInputContainer">
              <input
                type="text"
                placeholder="Enter Your Mail"
                className="emailInput"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <button className="submitButton" onClick={() => {
                SubscribeRequest(email)
              }}>
                <ArrowForwardRoundedIcon />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="rightSub">
        <img src={Combination} alt="" />
      </div>
    </div>
  );
}
