import React from 'react';

function Creations() {
  return (
    <main id="creations" className="creations-section">
      <h2>Creations</h2>
      <p className="section-intro">一些不完美但真诚的创造物，诞生于深夜或周末。</p>
      
      <div className="creations-grid">
        <div className="card">
          <h3>AI 产品</h3>
          <p>用AI搓出来的小玩具，解决一些自己的小问题。</p>
          <span className="status">施工中... Under Construction</span>
        </div>

        <div className="card">
          <h3>文章</h3>
          <p>关于产品思考、技术学习和生活感悟的文字沉淀。</p>
          <span className="status">施工中... Under Construction</span>
        </div>

        <div className="card">
          <h3>视频</h3>
          <p>用影像记录和分享知识，探索视觉表达的可能性。</p>
          <span className="status">施工中... Under Construction</span>
        </div>
      </div>
    </main>
  );
}

export default Creations;
