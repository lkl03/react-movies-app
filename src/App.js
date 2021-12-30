import MoviesGrid from "./components/MoviesGrid";
import styles from './App.module.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Link to=""><h1 className={styles.title}>Movies</h1></Link> 
          <Routes>
            <Route exact path="/movies/:movieId" element={<MovieDetails />}></Route>
            <Route exact path="/" element={<LandingPage />}></Route>
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
