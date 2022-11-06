import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed/Feed";
import Navigator from "./components/Navigator/Navigator";
import OfferDetail from "./components/OfferDetail/OfferDetail";
import Peer from "./components/Peer/Peer";
import Settings from "./components/Search/Search";
import styles from "./App.scss";

export const FeedContext = createContext(null);
export const SearchContext = createContext(null);

function App() {
  const [refreshFeed, setRefreshFeed] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <FeedContext.Provider value={{ refreshFeed, setRefreshFeed }}>
          <SearchContext.Provider value={{ searchResults, setSearchResults }}>
            <Navigator />
            <Routes>
              <Route path="/" element={<Feed refresh={refreshFeed} search={searchResults} />}/>
              <Route path="/bookmarks" element={<Feed refresh={refreshFeed} search={searchResults} />} />
              <Route path="/history" element={<Feed refresh={refreshFeed} search={searchResults}/>} />
              <Route path="/offer" element={<OfferDetail />} />
              <Route path="/peer/:peer_id" element={<Peer />} />
              <Route path="/listings/:peer_id" element={<Feed />} /> {/* TODO pass in peer_id */}
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </SearchContext.Provider>
        </FeedContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
