import { useState } from 'react';
import winVideo from './v.mp4'; // Import your video file

function Tictecteo() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [status, setStatus] = useState('ongoing');
  const [showWinVideo, setShowWinVideo] = useState(false);

  const checkWinner = (board) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] === '' && status === 'ongoing') {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const winner = checkWinner(newBoard);
      if (winner) {
        setStatus(`${winner} wins!`);
        setShowWinVideo(true); // Show win video
      } else if (!newBoard.includes('')) {
        setStatus('It\'s a draw!');
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setStatus('ongoing');
    setShowWinVideo(false); // Hide win video on reset
  };

  return (
    <div className="relative">
      {showWinVideo && (
        <video autoPlay loop muted className="fixed top-0 left-0 w-screen h-screen z-0 object-cover">
          <source src={winVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-center">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 gap-4">
          {board.map((cell, index) => (
            <button
              key={index}
              className="w-24 h-24 bg-white border border-gray-300 hover:bg-gray-200 text-3xl font-bold focus:outline-none rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleCellClick(index)}
              disabled={cell !== '' || status !== 'ongoing'}
            >
              {cell}
            </button>
          ))}
        </div>
        <div className="text-xl mt-4">Status: {status}</div>
      </div>
      <div className="bg-blue-200 text-blue-800 p-4 mt-4 rounded-md absolute top-0 left-0 right-0">
        {status !== 'ongoing' && status}
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default Tictecteo;
