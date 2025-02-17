import React from 'react';

interface CardProps {
  image?: string;
  title: string;
  text: string;
  buttonText: string;
  showImagePlaceholder?: boolean;
}

const Card: React.FC<CardProps> = ({ image, title, text, buttonText, showImagePlaceholder }) => {
  return (
    <div className="card" style={{ width: '18rem', marginBottom: '1rem' }}>
      {/* Блок с изображением или заглушкой */}
      {showImagePlaceholder && (
        <div
          style={{
            height: '180px',
            backgroundColor: '#6c757d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.25rem',
          }}
        >
          Image cap
        </div>
      )}

      {/* Изображение, если передано */}
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt=""
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      )}

      {/* Тело карточки */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;