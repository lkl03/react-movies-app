import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import Spinner from '../components/Spinner'
import getMovieImg from '../utils/getMovieImg'
import { get } from '../utils/httpClient'
import styles from './MovieDetails.module.css'

const MovieDetails = () => {
    const { movieId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)
    useEffect(()=>{
        setIsLoading(true)
        get("/movie/" + movieId).then(data =>{
            setMovie(data)
            setIsLoading(false)
        })
    }, [movieId])
    if(isLoading){
        return <Spinner></Spinner>
    }
    const imageUrl= getMovieImg(movie.poster_path, 500)
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
                <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Description:</strong>  {movie.overview}</p>
                <p><strong>Release date:</strong>  {movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieDetails
