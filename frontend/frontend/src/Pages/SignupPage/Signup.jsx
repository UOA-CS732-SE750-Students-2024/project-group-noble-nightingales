import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import commonStyles from "./SignupCSS/CommonFormStyles.module.css";
function Signup() {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    birthDate: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // 在这里处理表单提交逻辑
    console.log("Signup Details:", formFields);
    // 数据发送后，跳转到下一个页面
    navigate("/explore/nextstep", { state: { email: formFields.email } });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };
  // 关闭登录模态框函数
  const closeLogin = () => {
    navigate(-1); // 导航回上一个页面
  };
  return (
    <div className={commonStyles.overlay} onClick={closeLogin}>
      <div className={commonStyles.container}>
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

          <button type="submit" className={commonStyles.actionButton}>
            Next Step
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
