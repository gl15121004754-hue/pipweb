import React from 'react';

function ArticlesPage() {
  // LLM诞生记 - 7篇文章
  const llmArticles = [
    { title: '完整的Transformer Block：数据流的全程见证', url: 'https://blog.csdn.net/better517/article/details/155192152' },
    { title: 'Transformer的骨架：残差连接与归一化', url: 'https://blog.csdn.net/better517/article/details/155192045' },
    { title: 'Transformer的大脑皮层：前馈神经网络', url: 'https://blog.csdn.net/better517/article/details/155099543' },
    { title: 'Transformer的GPS：位置编码', url: 'https://blog.csdn.net/better517/article/details/155065872' },
    { title: 'Transformer的心脏：自注意力机制的革命', url: 'https://blog.csdn.net/better517/article/details/154833418' },
    { title: 'LLM后训练的对齐调优：从基础模型到对话助手的全过程', url: 'https://blog.csdn.net/better517/article/details/154783595' },
    { title: 'LLM预训练的数据准备：从原始文本到向量的全过程', url: 'https://blog.csdn.net/better517/article/details/154735260' }
  ];

  // AI产品炼成记 - 4篇文章
  const aiProductArticles = [
    { title: 'Evaluation：为AI装上"仪表盘"和"导航仪"', url: 'https://blog.csdn.net/better517/article/details/155709581' },
    { title: 'Agent：让AI长出"手脚"的智能体革命', url: 'https://blog.csdn.net/better517/article/details/155447272' },
    { title: 'RAG：从"开卷考试"到"知识赋能"的实践指南', url: 'https://blog.csdn.net/better517/article/details/155307012' },
    { title: '提示词工程：从"对话"到"指令"的实践指南', url: 'https://blog.csdn.net/better517/article/details/155268802' }
  ];

  return (
    <div className="container">
      <div style={{ paddingTop: '20px' }} className="articles-list">
        <section style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '1.5em', marginBottom: '25px', paddingBottom: '10px', borderBottom: '2px solid #eaeaea' }}>LLM诞生记</h3>
          {llmArticles.map((article, index) => (
            <a 
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '18px 20px',
                marginBottom: '15px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #eaeaea',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#1E1E1E',
                transition: 'all 0.3s ease',
                fontSize: '1.05em'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f0f0f0';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f9f9f9';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {article.title}
            </a>
          ))}
        </section>

        <section>
          <h3 style={{ fontSize: '1.5em', marginBottom: '25px', paddingBottom: '10px', borderBottom: '2px solid #eaeaea' }}>AI产品炼成记</h3>
          {aiProductArticles.map((article, index) => (
            <a 
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '18px 20px',
                marginBottom: '15px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #eaeaea',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#1E1E1E',
                transition: 'all 0.3s ease',
                fontSize: '1.05em'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f0f0f0';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f9f9f9';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {article.title}
            </a>
          ))}
        </section>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '80px', marginBottom: '40px', color: '#888', fontStyle: 'italic' }}>
        敬请期待后续的更多文章
      </div>
    </div>
  );
}

export default ArticlesPage;
