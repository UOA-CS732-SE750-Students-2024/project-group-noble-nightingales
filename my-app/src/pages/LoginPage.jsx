import React, { useState } from "react";
import styles from "../styles/LoginPage.module.css"; // 根据实际路径调整

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitted with:', { username, password, rememberMe });
    };
  
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.title}>Login to UniMedia</div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="username">Username</label>
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
            <label className={styles.inputLabel} htmlFor="password">Password</label>
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
            <div style={{ color: '#D3F85A', fontWeight: 600 }}>Trouble Logging in?</div>
          </div>
          <button className={styles.loginButton} type="submit">Login</button>
          <div className={styles.signUp}>
            Don't have an account? <span className={styles.signUpLink}>Sign Up</span>
          </div>
        </form>
      </div>
    );
  }
  
  export default LoginPage;