import { useState, useEffect } from 'react';
import Square from './components/Square.tsx';

export default function App() {
  const [boats, setBoats] = useState<number[][]>([]);
  const [hitSquares, setHitSquares] = useState<number[]>([]);

  useEffect(() => {
    setBoard();
  }, []);

  function setBoard() {
    const newBoat = [Math.floor(Math.random() * 9)];
    setBoats([newBoat]);
  }

  function fire(index: number) {
    if (!hitSquares.includes(index)) {
      setHitSquares(prevHitSquares => [...prevHitSquares, index]);
    }      
  }

  function reset() {
    setHitSquares([]);
    setBoard();
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
              index={i}
              boats={boats}
              hitSquares={hitSquares}
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