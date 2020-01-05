import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import PropTypes from 'prop-types'

import play from '../assets/static/play-icon.png'
import plus from '../assets/static/plus-icon.png'

const CarouselItem = ({cover, title, year, contentRating, duration}) => {
  return (
    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}  />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={plus} alt="Plus Icon"/> 
        <img className="carousel-item__details--img" src={play} alt="Play Icon"/> 
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`
          ${year} ${contentRating} ${duration}
        `}   
      </p>
    </div>
  </div>
  )
}
 CarouselItem.propTypes = {
    cover: PropTypes.string.isRequired, // obligatorio
    title: PropTypes.string.isRequired, // obligatorio
    year: PropTypes.number, // opcional,
    duration: PropTypes.number, // opcional
    contentRating: PropTypes.string, // opcional
  };
 
export default  CarouselItem;
