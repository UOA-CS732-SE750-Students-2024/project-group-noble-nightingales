import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginCSS/Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted with:", { username, password, rememberMe });
  };

  const closeLogin = () => {
    navigate(-1); // 导航回上一个页面
  };

  const stopPropagation = (event) => {
    event.stopPropagation(); // 阻止事件冒泡
  };

  return (
    <div className={styles.overlay} onClick={closeLogin}>
      <div className={styles.container} onClick={stopPropagation}>
        <form onSubmit={handleSubmit}>
          <div className={styles.title}>Login to UniMedia</div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="username">
              Username
            </label>
            <input
              className={styles.input}
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="password">
              Password
            </label>
            <input
              className={styles.input}
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.rememberMeLine}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <a href="/forgot-password" className={styles.troubleLoggingLink}>
              Trouble Logging in?
            </a>
          </div>
          <button className={styles.loginButton} type="submit">
            Login
          </button>
          <div className={styles.signUp}>
            Don't have an account?{" "}
            <a href="/explore/signup" className={styles.signUpLink}>
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
