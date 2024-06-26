import './App.css';
import React from 'react';
import Rows from './components/Rows';
import requests from './requests';
import Banner from './components/Banner'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Rows 
        title='Trending'  
        fetchUrl={requests.fetchTrending}
        isLargeRow/>
      <Rows title='TopRated' fetchUrl={requests.fetchTopRated} />
      <Rows title='ActionMovies' fetchUrl={requests.fetchActionMovies} />
      <Rows title='ComedyMovies' fetchUrl={requests.fetchComedyMovies} />
      <Rows title='HorrorMovies' fetchUrl={requests.fetchHorrorMovies} />
      <Rows title='RomanceMovies' fetchUrl={requests.fetchRomanceMovies} />
      <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
 