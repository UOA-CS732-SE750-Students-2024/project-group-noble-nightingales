import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../../Requests/Auth/LoginRequest";
import styles from "./LoginCSS/Login.module.css";
import { AuthContext } from "../../ApplicationContext";
import { LinearProgress } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const progressTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#685cf0', // Your custom color
    },
  },
});

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [,,, setUserToken, isAuthenticated, setIsAuthenticated,, setUserId] = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted with:", { username, password, rememberMe });
  };

  const login = async() => {
    setIsLoading(true);
    const data = await LoginRequest(username, password);
    setIsLoading(false);
    if(data){
      console.log("Login successful");
      setOpen(true);
      navigate("/explore");
      setUserToken(data.token);
      setUserId(data.userId);
      setIsAuthenticated(true);
    } else {
      console.error("Login failed");
      setIsAuthenticated(false);
      setIsLoginFailed(true);
    }
  }

  const closeLogin = () => {
    navigate(-1);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
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
            <div className={styles.troubleLoggingLink} style={isAuthenticated ? {color: "#d3f85a"} : {color: "#f8725a"}}>
              {isAuthenticated ? "You have signed in" : "Not Signed In"} 
            </div>
          </div>
          
          {isLoading ? <ThemeProvider theme={progressTheme}><LinearProgress /></ThemeProvider> :<button onClick={() => {
            login();
          }} className={styles.loginButton} type="submit" style={isLoginFailed ? {background: "#f8725a"} : {}}>
            {isAuthenticated ? "Already Signed In" : (isLoginFailed ? "Invalid User - Retry" : "Login")}
          </button>}
          <div className={styles.signUp}>
            Don&apos;t have an account?{" "}
            <a href="/explore/signup" className={styles.signUpLink}>
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
