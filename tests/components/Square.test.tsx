import React from "react";
import '@testing-library/jest-dom';
import { it, expect, describe, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Square from '../../src/components/Square';

describe('Square', () => {
    it("should render an empty square initially", () => {
        render(<Square handleClick={() => {}} isHit={false} isHitBoat={false} />);
        const square = screen.getByTestId("square");
        expect(square).toBeInTheDocument();
        expect(square).toHaveTextContent("");
    });

    it("should render a black X when hit but misses boat", () => {
        render(<Square handleClick={() => {}} isHit={true} isHitBoat={false} />);
        const square = screen.getByTestId("square");
        expect(square).toBeInTheDocument();
        expect(square).toHaveTextContent("X");
        expect(square).toHaveStyle("color: rgb(0, 0, 0)");
    });

    it("should render a red X if isHitBoat is true", () => {
        render(<Square handleClick={() => {}} isHit={true} isHitBoat={true} />);
        const square = screen.getByTestId("square");
        expect(square).toHaveStyle("color: rgb(255, 0, 0)");
    });

    it("should call handleClick when clicked", () => {
        const handleClickMock = vi.fn();
        render(<Square handleClick={handleClickMock} isHit={false} isHitBoat={false} />);
        const square = screen.getByTestId("square");
        fireEvent.click(square);
        expect(handleClickMock).toHaveBeenCalled();
    });
});