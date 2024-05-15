import React from "react";
import "./Piece.css";

const Piece = ({ piece, onClick }) => {
  return (
    <span onClick={onClick} className="piece">
      {piece}
    </span>
  );
};

export default Piece;
