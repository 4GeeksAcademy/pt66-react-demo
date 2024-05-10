import React, { useState } from "react";

import { PlayingCard } from "./PlayingCard.jsx";

const someRank = Math.floor(Math.random() * 25);

const Home = () => {
  const [rank, setRank] = useState(someRank);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <PlayingCard rank={rank} suit="?" />
          <button
            className="btn btn-primary"
            onClick={() => setRank(Math.floor(Math.random() * 25))}
          >
            Randomize Rank
          </button>
          <PlayingCard rank=":)" suit="😊" />
          <PlayingCard rank="A" suit="♦" color="red" />
          <PlayingCard rank="3" suit="♦" color="red" />
          <PlayingCard rank="7" suit="♣" color="black" />
          <PlayingCard rank="2" suit="♥" color="red" />
          <PlayingCard rank="K" suit="♠" color="black" />
        </div>
      </div>
    </div>
  );
};

export default Home;
