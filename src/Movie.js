import React from 'react'

const Movie = ({ title, image, rating }) => (
  <div>
    <h1>{title}</h1>
    <img src={image.src} alt={image.alt} />
    <p>Rating: {rating}</p>
  </div>
)

export default Movie
