import React from "react";
import JokeList from "./JokeList";

function App() {
  return (
    <div className="App">
      <JokeList numJokesToGet={15}/>
    </div>
  );
}

export default App;
