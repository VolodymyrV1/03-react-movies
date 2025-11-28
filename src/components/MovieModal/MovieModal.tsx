import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import css from './MovieModal.module.css';
import type { Movie } from '../../types/movie';



interface MovieModalProps {
  movie: Movie;
  onClose: () => void;

}

function MovieModal({ movie, onClose }: MovieModalProps) {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose()
      }
    }


    document.addEventListener("keydown", handleKeyDown);


    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }



  }, [onClose])

 

  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button className={css.closeButton} aria-label="Close modal" onClick={onClose}>
          &times;
        </button>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className={css.image}
        />
        <div className={css.content}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}/10
          </p>
        </div>
      </div>
    </div>, document.getElementById("modal-root") as HTMLDivElement
  );
}


export default MovieModal;
