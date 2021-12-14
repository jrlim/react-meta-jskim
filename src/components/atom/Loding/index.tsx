import React from 'react';
import './index.scss';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading__loader">
        <div className="loading__loader__bar" />
        <div className="loading__loader__bar" />
        <div className="loading__loader__bar" />
        <div className="loading__loader__bar" />
        <div className="loading__loader__bar" />
        <div className="loading__loader__ball" />
      </div>
      <div className="loading__text">
        <div className="loading__text__item">L</div>
        <div className="loading__text__item">O</div>
        <div className="loading__text__item">A</div>
        <div className="loading__text__item">D</div>
        <div className="loading__text__item">I</div>
        <div className="loading__text__item">N</div>
        <div className="loading__text__item">G</div>
      </div>
    </div>
  );
};

export default Loading;
