import React from 'react';

function Header() {
  return (
    <header className="hero">
      <h1>Hey, I'm Grace</h1>
      <p className="subtitle">
        Java开发转AI产品经理<br />
        一个持续进阶中的普通创造者
      </p>
      <p className="slogan">
        “这几年是要算一算才知道自己几岁的年纪，<br />
        还有很多想做的事，希望一直都有想做的事，<br />
        做一个平凡又不普通的人！”
      </p>
      <a href="/about" className="more-link">More about me ↓</a>
    </header>
  );
}

export default Header;
