import React from 'react';

function AIProductsPage() {
  const products = [
    {
      id: 1,
      number: '# 001',
      name: 'MindSpace',
      description: 'AI情绪急救与陪伴助手 - 基于大语言模型的智能情绪陪伴，随时倾听你的心声',
      shortDesc: 'AI 情绪急救陪伴助手',
      url: 'https://www.mindspace.xin/',
      releaseDate: 'Released on 2026.01.01'
    }
  ];

  return (
    <div className="container">
      <div style={{
        marginTop: '40px',
        maxWidth: '900px',
        margin: '40px auto 0'
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 底部提示 */}
      <div style={{ textAlign: 'center', marginTop: '80px', marginBottom: '40px', color: '#888', fontStyle: 'italic' }}>
        更多产品正在开发中，敬请期待
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        background: '#ffffff',
        borderRadius: '16px',
        padding: '32px 40px',
        textDecoration: 'none',
        border: '1px solid #e5e7eb',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
        e.currentTarget.style.borderColor = '#667eea';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}
    >
      {/* 背景装饰 */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none'
      }}
      onMouseEnter={(e) => {
        e.target.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.target.style.opacity = '0';
      }}
      />

      {/* 卡片内容 */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {/* 左侧：产品编号 */}
          <div style={{
            fontSize: '3em',
            fontWeight: 'bold',
            color: '#667eea',
            fontFamily: 'monospace',
            lineHeight: '1',
            minWidth: '100px',
            letterSpacing: '-0.02em'
          }}>
            {product.number}
          </div>

          {/* 中间：产品信息 */}
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '1.8em',
              fontWeight: 'bold',
              color: '#1a1a1a',
              margin: '0 0 12px 0',
              letterSpacing: '-0.01em'
            }}>
              {product.name}
            </h3>
            <p style={{
              fontSize: '1em',
              color: '#666',
              margin: 0,
              lineHeight: '1.6',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {product.shortDesc}
            </p>
          </div>

          {/* 右侧：按钮 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#667eea',
            fontWeight: '600',
            fontSize: '1em',
            whiteSpace: 'nowrap'
          }}>
            <span>开始急救</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{
              transition: 'transform 0.3s ease'
            }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        {/* 底部：发布日期 */}
        <div style={{
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #f0f0f0',
          fontSize: '0.85em',
          color: '#999',
          fontStyle: 'italic'
        }}>
          {product.releaseDate}
        </div>
      </div>
    </a>
  );
}

export default AIProductsPage;
