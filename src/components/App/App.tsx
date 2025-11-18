
import { Toaster, toast } from "react-hot-toast";

import { useCallback } from "react";


import css from "./App.module.css";




import CafeInfo from "../SearchBar/SearchBar";





import VoteOptions from "../Loader/Loader";
import VoteStats from "../MovieModal/MovieModal";
import Notification from "../MovieGrid/MovieGrid";
import MovieGrid from "../MovieGrid/MovieGrid";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";



function App() {

  // const handleSubmit = useCallback({

  // }

  



  return (

    <SearchBar onSubmit={handleSubmit}/>

    // <MovieGrid />

 
  

  )
}

export default App;
