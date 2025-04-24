import React, { useState, useEffect } from 'react';
import './Login.css';
import googleLogo from '../assets/images/google-logo.png'; // Thay đổi nếu bạn dùng ảnh online

const Login = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.getElementById("email")?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Form would be submitted with: ${email}`);
    } else {
      const input = document.getElementById("email");
      if (input) input.style.borderColor = "#d93025";
    }
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="signin-card two-column">
       
          {/* Cột trái */}
          <div className="left-pane">
      
            <h1>Đăng nhập</h1>
            <p>Tiếp tục tới Gmail</p>
          </div>

          {/* Cột phải */}
          <div className="right-pane">
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="input-container">
                  <label htmlFor="email">Email hoặc số điện thoại</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="forgot-email">
                  <a href="#">Bạn quên địa chỉ email?</a>
                </div>
              </div>

              <div className="guest-mode">
                <p>Đây không phải máy tính của bạn? Hãy sử dụng Chế độ khách để đăng nhập một cách riêng tư.</p>
                <a href="#">Tìm hiểu thêm về cách sử dụng Chế độ khách</a>
              </div>

              <div className="button-container">
                <a href="#" className="create-account">Tạo tài khoản</a>
                <button type="submit" className="next-button">Tiếp theo</button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer">
          <div className="language-selector">
            <span>Tiếng Việt</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="footer-links">
            <a href="#">Trợ giúp</a>
            <a href="#">Quyền riêng tư</a>
            <a href="#">Điều khoản</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
