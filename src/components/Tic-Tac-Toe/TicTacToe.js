import React, { useEffect, useState } from 'react'
import './tictactoe.css';
function TictacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  console.log('clicked');
  useEffect(()=>{ console.log('clicked useeffct');})
  const handleClick=(index)=>{
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    checkWinner(newBoard);
  }

  const checkWinner = (board)=>{
    const lines =[[0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  for(let i = 0; i<lines.length; i++){
    const [a, b, c] = lines[i];
    if(board[a] && board[a] ===board[b] && board[a] ==board[c]){
      setWinner(board[a]);
      return;
    }
    if (board.every((cell) => cell !== null)) {
      setWinner('Draw');
    }
  }
  }
  const renderCell = (index)=>{
    return(
      <div className='cell' onClick={()=>{console.log(index);handleClick(index)}} >
        {board[index]} 
      </div>
    )
  }

  const resetGame = ()=>{
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  }
  return (
    <div>
       { console.log('clicked return') }
      <p>
      Tic-tac-Toe
      </p>
      <div className='board'>
        {board.map((cell, index)=>renderCell(index))}
      </div>
      {winner ==="Draw" ? "draw" : `${winner} win` }

      <button onClick={resetGame} >Reset Game</button>
    </div>
  )
}

export default TictacToe;