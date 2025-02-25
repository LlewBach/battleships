import { useState } from 'react';
import Square from './components/Square.tsx';

export default function App() {
  const [hitSquares, setHitSquares] = useState<number[]>([]);

  function fire(index: number) {
    if (!hitSquares.includes(index)) {
      setHitSquares(prevHitSquares => [...prevHitSquares, index]);
    }
  }

  return (
    <>
      <h1 className="text-center">Battleships</h1>

      <div className="dashboard">
        <div className="board">
          {Array.from({ length: 9 }, (_, i) => (
            <Square
              key={i}
              id={i}
              handleClick={() => fire(i)}
              hitSquares={hitSquares}
            />
          ))}
        </div>
      </div>
    </>
  )
}