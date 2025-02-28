import { useState, useEffect } from 'react';
import Square from './components/Square.tsx';

export default function App() {
  const [boats, setBoats] = useState<number[][]>([]);
  const [hitSquares, setHitSquares] = useState<number[]>([]);

  const gridWidth = 3;

  useEffect(() => {
    setBoard();
  }, []);

  function setBoard() {
    const boatLength = 2;
    const newBoat: number[] = [];
    const possibilities = [];
    
    while (newBoat.length < boatLength) {
      const firstSquare = Math.floor(Math.random() * (gridWidth ** 2));
      // Is square above an option?
      if (firstSquare - gridWidth >= 0) possibilities.push(firstSquare - gridWidth);
      // Is square below an option?
      if (firstSquare + gridWidth < gridWidth ** 2) possibilities.push(firstSquare + gridWidth);
      // Is square to the left an option?
      if (Math.floor((firstSquare - 1) / gridWidth) === Math.floor(firstSquare / gridWidth)) possibilities.push(firstSquare - 1);
      // Is square to the right an option?
      if (Math.floor((firstSquare + 1) / gridWidth) === Math.floor(firstSquare / gridWidth)) possibilities.push(firstSquare + 1);
      // Any possibilities?
      if (possibilities.length > 0) {
        const secondSquare = possibilities[Math.floor(Math.random() * possibilities.length)];
        newBoat.push(firstSquare, secondSquare);
        break;
      }
    }

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
          {Array.from({ length: gridWidth ** 2 }, (_, i) => (
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