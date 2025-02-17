import React from 'react';

declare interface CardProps {
  image?: string;
  title?: string;
  children: React.ReactNode;
}

declare const Card: React.FC<CardProps>;

export default Card;