import React from 'react';

const SectionTitle = ({ title }) => {
      const animationStyles = `
    .animation-container {
      display: flex;
      justify-content: center;
      align-items: center;
     
      background-color: #f8f8f8;
      overflow: hidden;
    }
  
    .animated-text {
      font-size: 72px;
      font-weight: bold;
      color: #4fa94d;
      position: relative;
      animation: slide-in 2s ease-in-out ,
                 pulse 2s ease-in-out  alternate,
                 sparkle 2s linear ;
    }
  
    @keyframes slide-in {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      50% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.2);
      }
    }
  
    @keyframes sparkle {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `;

      return (
            <div>
                  <style>{animationStyles}</style>
                  <div className="animation-container">
                        <h1 className="animated-text">{title}</h1>
                  </div>
            </div>
      );
};

export default SectionTitle;
