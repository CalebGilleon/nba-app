import './App.css';
import Navbar from './components/Navbar'
import HomeView from './components/HomeView';
import StandingsView from './components/StandingsView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//install react-router-dom

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/standings" element={<StandingsView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
