import { useState, useCallback, useRef, useEffect } from 'react';
import { TETROMINOS, BOARD_WIDTH, BOARD_HEIGHT } from '../constants/tetrominos';

export const useGame = () => {
  const createEmptyGrid = () => 
    Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0));

  const getRandomPiece = () => {
    const shapes = ['I', 'O'];
    const random = shapes[Math.floor(Math.random() * shapes.length)];
    return TETROMINOS[random];
  };

  const [grid, setGrid] = useState(createEmptyGrid());
  const [piece, setPiece] = useState({
    x: 3,
    y: 0,
    tetromino: getRandomPiece()
  });
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);


  const resetGame = useCallback(() => {
    setGrid(createEmptyGrid());
    setPiece({
      x: 3,
      y: 0,
      tetromino: getRandomPiece()
    });
    setScore(0);
    setIsGameOver(false);
  }, []);

  const isValidPosition = useCallback((newPiece, newX, newY) => {
    for (let y = 0; y < newPiece.shape.length; y++) {
      for (let x = 0; x < newPiece.shape[y].length; x++) {
        if (newPiece.shape[y][x]) {
          const boardX = newX + x;
          const boardY = newY + y;
          
          if (boardX < 0 || boardX >= BOARD_WIDTH || boardY >= BOARD_HEIGHT) {
            return false;
          }
          if (boardY >= 0 && grid[boardY][boardX]) {
            return false;
          }
        }
      }
    }
    return true;
  }, [grid]);

  const placePiece = useCallback(() => {
    if (piece.y <= 0) {
      setIsGameOver(true);
      return;
    }

    const newGrid = grid.map(row => [...row]);
    piece.tetromino.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          const boardY = piece.y + y;
          const boardX = piece.x + x;
          if (boardY >= 0) {
            newGrid[boardY][boardX] = { color: piece.tetromino.color };
          }
        }
      });
    });
    
    setGrid(newGrid);
    
    setPiece({
      x: 3,
      y: 0,
      tetromino: getRandomPiece()
    });
  }, [piece, grid]);

  const moveLeft = useCallback(() => {
    if (isGameOver) return;
    const newX = piece.x - 1;
    if (isValidPosition(piece.tetromino, newX, piece.y)) {
      setPiece(prev => ({ ...prev, x: newX }));
    }
  }, [piece, isGameOver, isValidPosition]);

  const moveRight = useCallback(() => {
    if (isGameOver) return;
    const newX = piece.x + 1;
    if (isValidPosition(piece.tetromino, newX, piece.y)) {
      setPiece(prev => ({ ...prev, x: newX }));
    }
  }, [piece, isGameOver, isValidPosition]);

  const dropDown = useCallback(() => {
    if (isGameOver) return;
    const newY = piece.y + 1;
    if (isValidPosition(piece.tetromino, piece.x, newY)) {
      setPiece(prev => ({ ...prev, y: newY }));
    } else {
      placePiece();
    }
  }, [piece, isGameOver, isValidPosition, placePiece]);

  const rotatePiece = useCallback(() => {
    if (isGameOver) return;
    setPiece(prev => ({
      ...prev,
      tetromino: prev.tetromino === TETROMINOS.I ? TETROMINOS.O : TETROMINOS.I
    }));
  }, [isGameOver]);

  const displayGrid = grid.map(row => [...row]);
  piece.tetromino.shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        const boardY = piece.y + y;
        const boardX = piece.x + x;
        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
          displayGrid[boardY][boardX] = { color: piece.tetromino.color };
        }
      }
    });
  });

  return {
    displayGrid,
    score,
    isGameOver,
    moveLeft,
    moveRight,
    dropDown,
    rotatePiece,
    resetGame
  };
};