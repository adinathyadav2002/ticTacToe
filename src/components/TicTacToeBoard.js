import Square from "./Square"
import './boardStyle.css';

import React, { useState } from 'react'

export default function TicTacToeBoard({ xIsNext, squares, onPlay }) {
  const [arr, setArr] = useState(Array(9).fill(null))
  // const [flag, setFlag] = useState(1)

  function handleclick(i) {
    const nextSquares = squares.slice();
    const nextArray = arr.slice();
    if (nextSquares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = 'X';
      nextArray[i] = "green"
    } else {
      nextSquares[i] = 'O';
      nextArray[i] = "red"
    }
    setArr(nextArray)
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  
  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} colorValue ={arr[0]}  onclick={() => {
          handleclick(0)
        }} />
        <Square value={squares[1]} colorValue ={arr[1]}  onclick={() => {
          handleclick(1)
        }} />
        <Square value={squares[2]} colorValue ={arr[2]} onclick={() => {
          handleclick(2)
        }} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} colorValue ={arr[3]}  onclick={() => {
          handleclick(3)
        }} />
        <Square value={squares[4]} colorValue ={arr[4]}  onclick={() => {
          handleclick(4)
        }} />
        <Square value={squares[5]} colorValue ={arr[5]} onclick={() => {
          handleclick(5)
        }} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} colorValue ={arr[6]}  onclick={() => {
          handleclick(6)
        }} />
        <Square value={squares[7]} colorValue ={arr[7]} onclick={() => {
          handleclick(7)
        }} />
        <Square value={squares[8]} colorValue ={arr[8]} onclick={() => {
          handleclick(8)
        }} />
      </div>
    </div>

  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


