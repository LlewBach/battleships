import React from "react";
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import App from "../src/App.tsx";

describe('App', () => {
    it('should render 9 Squares', () => {
        render(<App />);
        const squares = screen.getAllByTestId("square");
        expect(squares).toHaveLength(9);
    });

    it('should update square content state when clicking a square', () => {
        render(<App />);
        const square = screen.getAllByTestId("square")[0];
        fireEvent.click(square);
        expect(square).toHaveTextContent("X");
    });

    it('should reset board when clicking the reset button', () => {
        render(<App />);
        const square = screen.getAllByTestId("square")[0];
        fireEvent.click(square);
        const resetButton = screen.getByTestId("reset-button");
        fireEvent.click(resetButton);
        expect(square).toHaveTextContent("");
    });
})