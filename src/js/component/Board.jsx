import React, { useEffect, useState } from "react";
import Piece from "./Piece.jsx";

import "./Board.css";

const lines = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Diagonals
  [0, 4, 8],
  [6, 4, 2],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const Board = () => {
  // State storing who's won how many games:
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [ties, setTies] = useState(0);

  // State storing the game state:
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const changePiece = (idx, value) => {
    if (board[idx] === "") {
      setBoard(board.toSpliced(idx, 1, value));
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const checkWin = () => {
    let hasWon = false;
    for (const line of lines) {
      let x = line.every((idx) => board[idx] === "X");
      let o = line.every((idx) => board[idx] === "O");
      hasWon = x || o;

      if (hasWon) {
        if (x) {
          setXWins(xWins + 1);
        } else {
          setOWins(oWins + 1);
        }
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setTurn("X");
        return;
      }
    }

    if (board.every((elem) => elem !== "")) {
      setTies(ties + 1);
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setTurn("X");
    }
  };

  useEffect(() => {
    console.log("This component was first rendered.");
  }, []);

  useEffect(() => {
    console.log("This will run every time the board changes.");
    checkWin();
  }, [board]);

  return (
    <>
      <div className="d-flex flex-row justify-content-around w-100">
        <h3>X: {xWins}</h3>
        <h3>O: {oWins}</h3>
        <h3>Ties: {ties}</h3>
      </div>
      <div className="ttt-board">
        {board.map((piece, idx) => (
          <Piece
            key={idx}
            piece={piece}
            onClick={() => changePiece(idx, turn)}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
