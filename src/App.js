import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navigator from "./components/Navigator/Navigator";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" component={Home} />
          <Route path="/search" component={Home} />
        </Routes>
      <Navigator />
      <header className="App-header">
        <Home />
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
