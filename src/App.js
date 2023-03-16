import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Navigation from './components/Navigation';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import FooterMdn from './components/FooterMdn';
import FooterImage from './components/FooterImage';

function App() {
  return (
    <div className="App">
      <Navigation className='bootNavbar'></Navigation>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id/" element={<MovieDetail/>}/>
      </Routes>
      <FooterImage/>
      
    </div>
  );
}

export default App;
