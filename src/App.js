import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bookmarks from "./components/Bookmarks/Bookmarks";
import Feed from "./components/Feed/Feed";
import Navigator from "./components/Navigator/Navigator";
import Offer from "./components/Offer/Offer";
import Peer from "./components/Peer/Peer";
import Settings from "./components/Search/Search";
import styles from "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
        <header className="App-header" />
        <Routes>
          <Route path="/" element={<Feed />}/>
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/peer" element={<Peer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <footer className="App-header" />
      </BrowserRouter>
    </div>
  );
}

export default App;
