
import { toast, Toaster } from 'react-hot-toast';
import { useState } from 'react';
import type { Movie } from '../../types/movie';


import css from "./App.module.css";



import { fetchMovies } from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal/MovieModal';



function App() {
  
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);



  async function handleSubmit(query: string) {
      

    try {
      
      setIsLoading(true);
      setIsError(false);
      setMovies([]); 
      const { results } = await fetchMovies(query);
      if (results.length === 0) {
        toast.error("No movies found for your request.");
        setIsError(true);
        return;
      
      }
      setMovies(results);


      
    }
    catch (e) {
      console.log("Error:", e);
      toast.error("Something went wrong. Try again.");
      setIsError(true);
      

    } finally {
      setIsLoading(false);
      // setIsError(false);
    }
    

  }

  function handleSelect(movie: Movie) {
    setSelectedMovie(movie);
    console.log(movie);
    

  }

  function closeModal() {
    setSelectedMovie(null);
  }


  



  return (
    <div className={css.app}>
      <Toaster position="top-center" />
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}

      {isError && <ErrorMessage />}
      {!isError && movies.length > 0 && (
        <MovieGrid onSelect={handleSelect} movies={movies} />
      )}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
