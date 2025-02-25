import styled from "styled-components";

type SquareProps = {
    id: number;
    handleClick: () => void;
    hitSquares: number[];
};

export default function Square({id, handleClick, hitSquares}: SquareProps) {
    const isHitSquare = hitSquares.includes(id);

    return (
        <StyledSquare 
            id={id.toString()}
            onClick={handleClick}
        >
            {isHitSquare ? 'X' : ''}
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