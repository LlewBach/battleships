import styled from "styled-components";

type SquareProps = {
    handleClick: () => void;
    index: number;
    boats: number[][];
    hitSquares: number[];
};

export default function Square({handleClick, index, boats, hitSquares}: SquareProps) {
    const isHit = hitSquares.includes(index);
    const isBoat = boats.some(boat => boat.includes(index));
    const isHitBoat = isHit && isBoat;

    return (
        <StyledSquare 
            onClick={handleClick}
            $isHitBoat={isHitBoat}
            data-testid="square"
            data-boat={isBoat ? "true" : "false"}
        >
            {isHit ? 'X' : ''}
        </StyledSquare>
    )
}

const StyledSquare = styled.button<{$isHitBoat: boolean}>`
    border-radius: 5px;
    width: 80px;
    height: 80px;
    align-self: center;
    justify-self: center;
    color: ${(props) => props.$isHitBoat ? 'red' : 'black'};
`;