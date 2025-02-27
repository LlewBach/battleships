import { useState } from 'react';
import Square from './components/Square.tsx';

export default function App() {
  const [hitSquares, setHitSquares] = useState<number[]>([]);

  function fire(index: number) {
    if (!hitSquares.includes(index)) {
      setHitSquares(prevHitSquares => [...prevHitSquares, index]);
    }
  }

  function reset() {
    setHitSquares([]);
  }

  return (
    <>
      <h1 className="text-center">Battleships</h1>

      <div className="dashboard">
        <div className="board">
          {Array.from({ length: 9 }, (_, i) => (
            <Square
              key={i}
              handleClick={() => fire(i)}
              isHit={hitSquares.includes(i)}
            />
          ))}
        </div>
      </div>
      
      <div className='text-center'>
        <button onClick={reset} data-testid="reset-button">Reset</button>
      </div>
    </>
  )
}