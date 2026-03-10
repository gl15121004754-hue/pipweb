import React from 'react';

function AboutPage() {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', paddingTop: '80px' }}>
        <p style={{ color: '#666', marginBottom: '60px', lineHeight: '1.6' }}>
          Java开发转AI产品经理，热爱探索和创造。
        </p>

        {/* 社交链接 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px'
        }}>
          {/* 小红书 */}
          <a
            href="https://www.xiaohongshu.com/user/profile/65b8ff20000000000903c1e4"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              padding: '30px 40px',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              textDecoration: 'none',
              color: '#1a1a1a',
              transition: 'all 0.3s ease',
              minWidth: '160px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              e.target.style.borderColor = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
              e.target.style.borderColor = '#e5e7eb';
            }}
          >
            <div style={{ fontSize: '3em' }}>
              <img 
                src="/小红书logo.png" 
                alt="小红书"
                style={{ 
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div style={{ fontSize: '1.1em', fontWeight: '600' }}>小红书</div>
            <div style={{ fontSize: '0.85em', opacity: 0.9 }}>关注我</div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/gl15121004754-hue"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              padding: '30px 40px',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              textDecoration: 'none',
              color: '#1a1a1a',
              transition: 'all 0.3s ease',
              minWidth: '160px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              e.target.style.borderColor = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
              e.target.style.borderColor = '#e5e7eb';
            }}
          >
            <div style={{ fontSize: '3em' }}>
              <img
                src="/githublogo.png"
                alt="GitHub"
                style={{
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div style={{ fontSize: '1.1em', fontWeight: '600' }}>GitHub</div>
            <div style={{ fontSize: '0.85em', opacity: 0.9 }}>查看代码</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
