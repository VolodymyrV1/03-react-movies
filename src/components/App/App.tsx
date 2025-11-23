
import { toast, Toaster } from 'react-hot-toast';


import css from "./App.module.css";






// import VoteOptions from "../Loader/Loader";
// import VoteStats from "../MovieModal/MovieModal";
// import Notification from "../MovieGrid/MovieGrid";
// import MovieGrid from "../MovieGrid/MovieGrid";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";



function App() {

  async function handleSubmit(query: string) {



    
    // console.log(fetchMovies(query).length);
    
    // fetchMovies
    




    try {
      const { results } = await fetchMovies(query);
      if (results.length === 0) {
        toast.error("No movies found for your request.");
        return;
      }


      
    }
    catch (e) {
      console.log("Error:", e);
      

    }
    

  }

  // const handleSubmit {

  // }

  



  return (
    <div className={css.app}>
      <Toaster position="top-center" />
      <SearchBar onSubmit={handleSubmit} />
    </div>

    // <MovieGrid />
  );
}

export default App;
