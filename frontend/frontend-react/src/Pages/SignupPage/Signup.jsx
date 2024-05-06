import commonStyles from "./SignupCSS/CommonFormStyles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupRequest, CheckIfUserExistRequest } from "../../Requests/Auth/SignupRequest";

function Signup() {

  const [displayText, setDisplayText] = useState("");

  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    birthDate: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Signup Details:", formFields);
    const response = await CheckIfUserExistRequest(formFields.username, formFields.email);
    if (response === 400) {
      // some fields are empty
      setDisplayText("Please enter all fields")
    } else if (response === 409) {
      // username already exists
      setDisplayText("Username or email already exists - Retry")
    } else {
      navigate("/explore/nextstep", { state: { email: formFields.email, username: formFields.username, password: formFields.password, birthDate: formFields.birthDate } });
      setDisplayText("");
    }
    
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };



  const closeLogin = () => {
    navigate("/explore");
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={commonStyles.overlay} onClick={closeLogin}>
      <div className={commonStyles.container}onClick={stopPropagation}>
        <h1 className={commonStyles.title}>Create Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className={commonStyles.inputContainer}>
            <label className={commonStyles.inputLabel} htmlFor="username">
              Username
            </label>
            <input
              className={commonStyles.input}
              id="username"
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formFields.username}
              onChange={handleInputChange}
            />
          </div>

          <div className={commonStyles.inputContainer}>
            <label className={commonStyles.inputLabel} htmlFor="email">
              Email Address
            </label>
            <input
              className={commonStyles.input}
              id="email"
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formFields.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={commonStyles.inputContainer}>
            <label className={commonStyles.inputLabel} htmlFor="birthDate">
              Date of Birth
            </label>
            <input
              className={commonStyles.input}
              id="birthDate"
              type="date"
              name="birthDate"
              value={formFields.birthDate}
              onChange={handleInputChange}
            />
          </div>

          <div className={commonStyles.inputContainer}>
            <label className={commonStyles.inputLabel} htmlFor="password">
              Password
            </label>
            <input
              className={commonStyles.input}
              id="password"
              type="password"
              placeholder="Create your password"
              name="password"
              value={formFields.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className={commonStyles.actionButton} style={displayText ? {background: "#f8725a"} : {}}>
            {displayText ? displayText :  "Next Step" }
          </button>
        </form>
        <div className={commonStyles.linkContainer}>
          Have an account?
          <a href="/explore/login" className={commonStyles.linkHighlight}>
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
