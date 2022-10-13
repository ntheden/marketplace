import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bookmarks from "./components/Bookmarks/Bookmarks";
import Feed from "./components/Feed/Feed";
import Navigator from "./components/Navigator/Navigator";
import Offer from "./components/Offer/Offer";
import Peer from "./components/Peer/Peer";
import Settings from "./components/Search/Search";
import styles from "./App.css";
//import "./styles.css";

export const FeedContext = createContext(null);

function App() {
  const [refreshFeed, setRefreshFeed] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <FeedContext.Provider value={{ refreshFeed, setRefreshFeed }}>
          <Navigator />
          <header className="App-header" />
          <Routes>
            <Route path="/" element={<Feed refresh={refreshFeed} />}/>
            <Route path="/bookmarks" element={<Feed refresh={refreshFeed} />} />
            <Route path="/history" element={<Feed refresh={refreshFeed} />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/peer/:peer_id" element={<Peer />} />
            <Route path="/listings/:peer_id" element={<Feed />} /> {/* TODO pass in peer_id */}
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <footer className="App-header" />
        </FeedContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
