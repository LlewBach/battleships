type SquareProps = {
    id: number;
    handleClick: () => void;
    hitSquares: number[];
};

export default function Square({id, handleClick, hitSquares}: SquareProps) {
    const isHitSquare = hitSquares.includes(id);

    return (
        <button 
            id={id.toString()}
            onClick={handleClick}
        >
            {isHitSquare ? 'X' : ''}
        </button>
    )
}