import styled from "styled-components";
import Square from './Square.tsx';

type BoardProps = {
    formData: { gridWidth: number };
    boats: number[][];
    hitSquares: number[];
    setHitSquares: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function Board({ formData, boats, hitSquares, setHitSquares }: BoardProps) {
    function fire(index: number) {
        if (!hitSquares.includes(index)) {
            setHitSquares(prevHitSquares => [...prevHitSquares, index]);
        }      
    }

    return (
        <StyledBoard
            $gridWidth={formData.gridWidth}
        >
            {Array.from({ length: formData.gridWidth ** 2 }, (_, i) => (
            <Square
                key={i}
                handleClick={() => fire(i)}
                index={i}
                boats={boats}
                hitSquares={hitSquares}
                data-testid="board"
            />
            ))}
        </StyledBoard>
    );
}

const StyledBoard = styled.div<{$gridWidth: number}>`
    border: 1px solid green;
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(${(props) => props.$gridWidth}, 1fr);
    justify-content: center;
    align-content: center;
`;