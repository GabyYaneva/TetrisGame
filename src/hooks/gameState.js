import { useState, useEffect, useCallback, use } from 'react';

export const useGameState = () => {

const[gameState, setGameState] = useState('menu');

const startGame=useCallback(
    ()=>{
        setGameState('playing');

    },[]
);

const gameOver=useCallback(
    ()=>{
        setGameState('gameover');
    },[]
);

const restartGame=useCallback(
    ()=>{
        setGameState('playing');
    },[]
);

const pauseGame=useCallback(
    ()=>{
        setGameState(prev=> prev === 'playing' ? 'paused' : 'playing');
    },[]
);

const goToMenu=useCallback(
    ()=>{
        setGameState('menu');
    },[]
);

    return{
        gameState,
        isPlaying: gameState === 'playing',
        isPaused: gameState === 'paused',
        isGameOver: gameState === 'gameover',
        startGame,
        gameOver,
        restartGame,
        pauseGame,
        goToMenu

    };



};