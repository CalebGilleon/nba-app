import "./App.css";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import StandingsView from "./components/StandingsView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchView from "./components/SearchView";
import NBATeams from "./components/NBATeams";

//install react-router-dom
//52a55b468amsh30c045b4169b68fp12e3e8jsn2c2316bdcf7f

function App() {

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar searchText={searchText} setSearchText={setSearchText} /> */}
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/standings" element={<StandingsView />} />
          <Route path="/teams" element={<NBATeams />} />
          <Route path="/*" element={<HomeView />} />
          <Route
            path="/search"
            // element={
              // <SearchView keyword={searchText} searchResults={searchResults} />
            // }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
