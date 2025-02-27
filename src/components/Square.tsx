import styled from "styled-components";

type SquareProps = {
    handleClick: () => void;
    isHit: boolean;
};

export default function Square({handleClick, isHit}: SquareProps) {

    return (
        <StyledSquare 
            onClick={handleClick}
            data-testid="square"
        >
            {isHit ? 'X' : ''}
        </StyledSquare>
    )
}

const StyledSquare = styled.button`
    border-radius: 5px;
    width: 80px;
    height: 80px;
    align-self: center;
    justify-self: center;
`;