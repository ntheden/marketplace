import { useState } from "react";
import { List, ListGroup } from "react-bootstrap";
import './App.css';

function App() {
  const myAr = Array.from({length:20}, (x,i)=>i);
  const shuffle = (o) => {
    for (var j, x, i = o.length;
         i;
         j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }
  const chunks = (ar) => {
    let ar1 = [];
    let count = ar.length / 4;
    for (let i=0; i<count; i++) {
      ar1.push(<ListGroup.Item key={i}>{ar.splice(0, 4)}</ListGroup.Item>);
    }
    console.log(ar1);
    return ar1;
  };
  return (
    <div className="App">
      <header className="App-header">
        <ListGroup>
          {chunks(shuffle(myAr))}
        </ListGroup>
      </header>
    </div>
  );
}

export default App;
