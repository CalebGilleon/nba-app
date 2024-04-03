import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import StandingsView from './components/StandingsView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchView from './components/SearchView';

//install react-router-dom

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <BrowserRouter>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/standings" element={<StandingsView />} />
          <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
