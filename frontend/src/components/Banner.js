import React from 'react';

const Banner = ({ imageUrl, link }) => (
  <a href={link} className="banner">
    <img src={imageUrl} alt="Banner" />
  </a>
);

export default Banner;
