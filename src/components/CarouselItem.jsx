import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

import '../assets/styles/components/CarouselItem.scss'
import play from '../assets/static/play-icon.png'
import plus from '../assets/static/plus-icon.png'
import remove from '../assets/static/remove-icon.png'

import { setFavorite, deleteFavorite } from '../actions'


const CarouselItem = (props) => {
  const {id, cover, title, year, contentRating, duration, isList} = props;

  const handleSetFavorite = () =>{
    props.setFavorite({
        id,cover, title, year, contentRating, duration
    })
  }
  const handleDeleteFavorite = (itemId)=>{
    props.deleteFavorite(itemId)
  }

  return (
    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}  />
    <div className="carousel-item__details">
      <div>
        { isList ?          
          <img className="carousel-item__details--img" 
                src={remove} 
                alt="Plus Icon"
                onClick={()=> handleDeleteFavorite(id)}
            />
            :
            <img className="carousel-item__details--img" 
            src={plus} 
            alt="Plus Icon"
            onClick={()=> handleSetFavorite(id)}
            /> 
          }
        <Link to={`/player/${id}`}>
          <img className="carousel-item__details--img" 
          src={play} 
          alt="Play Icon"
          /> 
        </Link>
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
 const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
 }
export default connect(null, mapDispatchToProps)(CarouselItem);
