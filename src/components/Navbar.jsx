import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" exact activeClassName="active">首页</NavLink>
        <NavLink to="/about" activeClassName="active">关于我</NavLink>
        <NavLink to="/ai-products" activeClassName="active">AI产品</NavLink>
        <NavLink to="/articles" activeClassName="active">文章</NavLink>
        <NavLink to="/videos" activeClassName="active">视频</NavLink>
      </div>
      <div 
        className="email-icon" 
        onMouseEnter={() => setShowEmail(true)}
        onMouseLeave={() => setShowEmail(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        {showEmail && <span className="email-tooltip">15121004754@163.com</span>}
      </div>
    </nav>
  );
}

export default Navbar;
