import React from "react";
import '@testing-library/jest-dom';
import { it, expect, describe, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Square from '../../src/components/Square';

describe('Square', () => {
    it("should render an empty square initially", () => {
        render(<Square handleClick={() => {}} index={0} boats={[[1]]} hitSquares={[]} />);
        const square = screen.getByTestId("square");
        expect(square).toBeInTheDocument();
        expect(square).toHaveTextContent("");
    });

    it("should render a black X when hit but misses boat", () => {
        render(<Square handleClick={() => {}} index={0} boats={[[1]]} hitSquares={[0]} />);
        const square = screen.getByTestId("square");
        expect(square).toBeInTheDocument();
        expect(square).toHaveTextContent("X");
        expect(square).toHaveStyle("color: rgb(0, 0, 0)");
    });

    it("should render a red X if isHitBoat is true", () => {
        render(<Square handleClick={() => {}} index={0} boats={[[0]]} hitSquares={[0]} />);
        const square = screen.getByTestId("square");
        expect(square).toHaveStyle("color: rgb(255, 0, 0)");
    });

    it("should call handleClick when clicked", () => {
        const handleClickMock = vi.fn();
        render(<Square handleClick={handleClickMock} index={0} boats={[[1]]} hitSquares={[2, 3]} />);
        const square = screen.getByTestId("square");
        fireEvent.click(square);
        expect(handleClickMock).toHaveBeenCalled();
    });
});