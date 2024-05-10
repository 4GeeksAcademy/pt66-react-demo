import React from "react";
import "./PlayingCard.css";

const PlayingCard = ({ rank, suit, color }) => {
  return (
    <div className={`card my-2 mx-auto playing-card ${color}`}>
      <span className="top-suit">{suit}</span>
      <span className="rank">{rank}</span>
      <span className="bottom-suit">{suit}</span>
    </div>
  );
};

export { PlayingCard };
