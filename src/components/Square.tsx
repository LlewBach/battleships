import styled from "styled-components";

type SquareProps = {
    handleClick: () => void;
    isHit: boolean;
    isHitBoat: boolean;
};

export default function Square({handleClick, isHit, isHitBoat}: SquareProps) {

    return (
        <StyledSquare 
            onClick={handleClick}
            $isHitBoat={isHitBoat}
            data-testid="square"
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