import React, { useEffect, useState } from "react";
import Piece from "./Piece.jsx";

import "./Board.css";

const Board = () => {
  const [turn, setTurn] = useState("X");

  const [board, setBoard] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);

  const changePiece = (idx, value) => {
    if (board[idx] === " ") {
      setBoard(board.toSpliced(idx, 1, value));
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  useEffect(() => {
    console.log("This component was first rendered.");
  }, []);

  useEffect(() => {
    console.log("This will run every time the board changes.");
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
      console.log(`${board[0]} wins!`);
    }
  }, [board]);

  return (
    <div className="ttt-board">
      {board.map((piece, idx) => (
        <Piece key={idx} piece={piece} onClick={() => changePiece(idx, turn)} />
      ))}
    </div>
  );
};

export default Board;
