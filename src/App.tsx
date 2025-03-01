import { useState } from 'react';
import styled from "styled-components";
import Form from './components/Form.tsx';
import Board from './components/Board.tsx';

export default function App() {
  const [formData, setFormData] = useState({ gridWidth: 3 });
  const [isGameOn, setIsGameOn] = useState(false);
  const [boats, setBoats] = useState<number[][]>([]);
  const [hitSquares, setHitSquares] = useState<number[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newGridWidth = Number(event.currentTarget.gridWidth.value); // ✅ Type-safe access
    setFormData({ gridWidth: newGridWidth });
    setBoard(newGridWidth);
    setIsGameOn(true);
  }

  function setBoard(gridWidth: number) {
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
        // break;
      }
    }

    setBoats([newBoat]);
  }

  function reset() {
    setIsGameOn(false);
    setHitSquares([]);
  }

  return (
    <>
      <h1 className="text-center">Battleships</h1>

      {!isGameOn && <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />}

      {isGameOn && <div className="dashboard">
        <Board 
          formData={formData} 
          boats={boats} 
          hitSquares={hitSquares}
          setHitSquares={setHitSquares}
        />
      </div>}
      
      <div className='text-center'>
        <StyledResetButton onClick={reset} data-testid="reset-button">Reset</StyledResetButton>
      </div>
    </>
  )
}

const StyledResetButton = styled.button`
  margin: 10px auto;
  padding: 5px 10px;
  border-radius: 5px;
`;