

import './App.css';
import requests from './requests';
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {


  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row fetchURL={requests.fetchNetflixOriginals} title="Netflix Originals" isLargeRow/>
      <Row fetchURL={requests.fetchTrending} title="Trending Now"/>
      <Row fetchURL={requests.fetchTopRated} title="Top Rated"/>
      <Row fetchURL={requests.fetchActionMovies} title="Action Movies"/>
      <Row fetchURL={requests.fetchComedyMovies} title="Comedy Movies"/>
      <Row fetchURL={requests.fetchHorrorMovies} title="Horror Movies"/>
      <Row fetchURL={requests.fetchRomanceMovies} title="Romance Movies"/>
      <Row fetchURL={requests.fetchDocumentries} title="Documentries"/>
    </div>
  );
}

export default App;
