import React, { useState, useRef, useEffect } from "react";
import styles from "./NextstepCSS/Nextstep.module.css";
import DeviceMobile from "../../assets/DeviceMobile.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { VerifyCodeRequest, SignupRequest } from "../../Requests/Auth/SignupRequest";

function Nextstep() {
  const navigate = useNavigate();
  const [code, setCode] = useState(new Array(6).fill(""));
  const location = useLocation();
  const email = location.state?.email; // 确保 email 有传递过来，或者另外处理
  const [displayText, setDisplayText] = useState("");
  const username = location.state?.username;
  const password = location.state?.password;
  const birthDate = location.state?.birthDate;
  const inputRefs = useRef(
    new Array(6).fill(null).map(() => React.createRef())
  );

  useEffect(() => {
    inputRefs.current[0].current.focus(); // 当页面加载时，自动聚焦到第一个输入框
  }, []);

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Verification Code:", code.join(""));
    const response = await VerifyCodeRequest(email, code.join("")); // 调用验证函数
    if(response === 401){
      setDisplayText("Invalid code. Please try again.");
    } else {
      console.log("Verification successful");
      setDisplayText("");
      const signupResponse = await SignupRequest(username, email, birthDate, password);
      if(signupResponse === 409){
        setDisplayText("Username or email already exists - Retry");
      } else {
        navigate("/explore/login");
      }
    }
  };

  const handleInputChange = (index) => (e) => {
    const newCode = [...code];
    // 检测是否是退格键被按下，并且当前框没有任何字符
    if (e.target.value === "" && newCode[index] === "") {
      if (index > 0) {
        newCode[index - 1] = "";
        setCode(newCode);
        setTimeout(() => inputRefs.current[index - 1].current.focus(), 0);
      }
    } else {
      newCode[index] = e.target.value.slice(-1); // 获取最后一个输入的字符
      setCode(newCode);

      // 如果当前输入框已填充，并且不是最后一个输入框，焦点移到下一个输入框
      if (index < newCode.length - 1 && newCode[index]) {
        setTimeout(() => inputRefs.current[index + 1].current.focus(), 10);
      }
    }
  };
  // 关闭登录模态框函数
  const closeNextstep = () => {
    navigate(-1); // 导航回上一个页面
  };
  const stopPropagation = (event) => {
    event.stopPropagation(); // 阻止事件冒泡
  };

  return (
    <div className={styles.overlay} onClick={closeNextstep}>
      <div className={styles.container} onClick={stopPropagation}>
        <img src={DeviceMobile} alt="Mobile Icon" className={styles.icon} />
        <h1 className={styles.title}>Two Step Verification</h1>
        <p className={styles.subtitle}>
          Enter the verification code we sent to
        </p>
        <div className={styles.email}>{email}</div>
        <p className={styles.codeInstruction}>
          Type your 6 digit security code
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.codeInputContainer}>
            {code.map((num, index) => (
              <input
                key={index}
                ref={inputRefs.current[index]}
                className={styles.codeInput}
                type="text"
                maxLength="1"
                value={num}
                onChange={handleInputChange(index)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !num) {
                    // 触发 handleInputChange 函数来处理退格逻辑
                    handleInputChange(index)(e);
                  }
                }}
                autoComplete="off"
              />
            ))}
          </div>
          <button type="submit" className={styles.submitButton} style={displayText ? {background: "#f8725a"} : {}}>
            {displayText ? displayText : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nextstep;
