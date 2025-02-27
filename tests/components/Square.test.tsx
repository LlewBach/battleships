import React from "react";
import '@testing-library/jest-dom';
import { it, expect, describe, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Square from '../../src/components/Square';

describe('Square', () => {
    it("should render an empty square initially", () => {
        render(<Square handleClick={() => {}} isHit={false} />);
        const square = screen.getByTestId("square");
        expect(square).toBeInTheDocument();
        expect(square).toHaveTextContent("");
    });

    it("should render an X when hit", () => {
        render(<Square handleClick={() => {}} isHit={true} />);
        const square = screen.getByTestId("square");
        expect(square).toBeInTheDocument();
        expect(square).toHaveTextContent("X");
    });

    it("should call handleClick when clicked", () => {
        const handleClickMock = vi.fn();
        render(<Square handleClick={handleClickMock} isHit={false} />);
        const square = screen.getByTestId("square");
        fireEvent.click(square);
        expect(handleClickMock).toHaveBeenCalled();
    });
});