import React from 'react'
import styles from './Movie.module.scss'

const Movie = ({ title, image, rating, author }) => (
  <div className={styles.movie}>
    <img className={styles.coverImg} src={image.src} alt={image.alt} />
    <h2>{title}</h2>
    <p className={styles.rating}>Rating: {rating}</p>
    <p className={styles.author}>
      <img src={author.img.src} alt={author.img.alt} /> {author.name}
    </p>
  </div>
)

export default Movie
