import React from 'react';

function VideosPage() {
  const videos = [
    {
      id: 1,
      title: '💜 MindSpace-你的专属情绪治愈空间',
      description: 'AI情绪急救与陪伴，为你提供24/7的温暖支持',
      duration: '01:30',
      platform: '小红书',
      views: '300',
      likes: '30',
      url: 'https://www.xiaohongshu.com/discovery/item/697c768c0000000022008f19?source=webshare&xhsshare=pc_web&xsec_token=ABW7k1hIplxj1OJjQBbTsX8t2Wj2BetvA5mZdinGxCwlg=&xsec_source=pc_share',
      thumbnail: '🎬',
      category: 'AI编程'
    }
  ];

  return (
    <div className="container">
      <div style={{ paddingTop: '40px' }}>
        {/* 视频卡片网格 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        background: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        textDecoration: 'none',
        border: '1px solid #e5e7eb',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.borderColor = '#667eea';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}
    >
      {/* 视频缩略图区域 */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        fontSize: '4em',
        color: '#667eea'
      }}>
        {video.thumbnail}
        
        {/* 左上角：时长 */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          padding: '4px 10px',
          borderRadius: '6px',
          fontSize: '0.85em',
          color: '#ffffff',
          fontWeight: '600'
        }}>
          {video.duration}
        </div>

        {/* 右上角：平台 */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(255, 61, 61, 0.9)',
          padding: '4px 10px',
          borderRadius: '6px',
          fontSize: '0.75em',
          color: '#ffffff',
          fontWeight: '600',
          textTransform: 'uppercase'
        }}>
          {video.platform}
        </div>
      </div>

      {/* 视频信息 */}
      <div style={{ padding: '20px' }}>
        <h3 style={{
          fontSize: '1.15em',
          fontWeight: 'bold',
          color: '#1a1a1a',
          margin: '0 0 8px 0',
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {video.title}
        </h3>

        <p style={{
          fontSize: '0.9em',
          color: '#666',
          margin: '0 0 16px 0',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {video.description}
        </p>

        {/* 底部统计 */}
        <div style={{
          display: 'flex',
          gap: '16px',
          fontSize: '0.85em',
          color: '#999'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 4 8 11-8 11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span>{video.views}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06a5.5 5.5 0 0 0 7.78 0l1.06-1.06a5.5 5.5 0 0 0 7.78-7.78l-1.06-1.06z"/>
            </svg>
            <span>{video.likes}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default VideosPage;
