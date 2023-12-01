import { useEffect, useState } from "react";
import './chessbishop.css';

export default function Chess1() {
  const n = 8;
  const m = 8;
  const [chessBoard, setChessBoard] = useState([]);
  const [move, setMove] = useState({ x: -1, y: -1 });

  const handleMoves = (xcord, ycord) => {
    let i = xcord,
      j = ycord,
      x,
      y;
    const updatedBoard = [...chessBoard];

    (x = i); (y = j);
    while (!(x < 0 || x >= 8 || y < 0 || y >= 8)) {
      updatedBoard[x][y] = 1;
      x++;
      y++;
    }
    (x = i); (y = j);
    while (!(x < 0 || x >= 8 || y < 0 || y >= 8)) {
      updatedBoard[x][y] = 1;
      x++;
      y--;
    }
    (x = i); (y = j);
    while (!(x < 0 || x >= 8 || y < 0 || y >= 8)) {
      updatedBoard[x][y] = 1;
      x--;
      y++;
    }
    (x = i) ;   (y = j);
    while (!(x < 0 || x >= 8 || y < 0 || y >= 8)) {
      updatedBoard[x][y] = 1;
      x--;
      y--;
    }

    setChessBoard(updatedBoard);
  };

  useEffect(() => {
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = Array.from({ length: m });
      result.push(row);
    }
    setChessBoard(result);
  }, []);

  return (
    <>
      {chessBoard.length > 0 &&
        chessBoard.map((row, rIndex) => {
          return (
            <div className="row" key={rIndex}>
              {row.map((_, cIndex) => {
                const isBishopMove =
                  rIndex + cIndex === move.x + move.y ||
                  rIndex - cIndex === move.x - move.y;

                return (
                  <div
                    className={`box ${
                      (rIndex + cIndex) % 2 === 0 ? "black" : "white"
                    } ${isBishopMove ? "bishop-move" : ""}`}
                    key={cIndex}
                    onMouseOver={() => {
                      setMove({ x: rIndex, y: cIndex });
                      handleMoves(rIndex, cIndex);
                    }}
                  >
                    {move.x === rIndex && move.y === cIndex && "Bishop"}
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
}
