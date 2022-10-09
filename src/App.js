import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed/Feed";
import Navigator from "./components/Navigator/Navigator";
import styles from "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" component={Feed} />
          <Route path="/search" component={Feed} />
        </Routes>
      <Navigator />
      <header className="App-header" />
      <Feed className="feed"/>
      <footer className="App-header" />
      </BrowserRouter>
    </div>
  );
}

export default App;
