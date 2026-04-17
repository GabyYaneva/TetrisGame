import {useState, useEffect, use, useCallback} from 'react';
import{TETROMINS,BOARD_WIDTH,BOARD_HEIGHT} from '/src/constants/tetrominos';

export const useGame=()=>{

    const createGrid=()=> Array(BOARD_HEIGHT).fill(null)
    .map(
        ()=>Array(BOARD_WIDTH).fill(0)
    );

    const [grid,setGrid]=useState(createGrid());

    const [currPiece,setCurrPiece]=useState(
{   x:3,y:0,tetromins:TETROMINS['I']});

const [score,setScore]=useState(0);

const isVallidMove=useCallback(
    (newX,newY)=>{
        for(let y=0;y<currPiece.tetromins.shape.length;y++){
            for(let x=0;x<currPiece.tetromins.shape[y].length;x++){
                if(currPiece.tetromins.shape[y][x]){
                    const boardX=newX+x;
                    const boardY=newY+y;

                    if(boardX<0||boardX>=BOARD_WIDTH||boardY>=BOARD_HEIGHT||grid[boardY][boardX]){
                        return false;
                    }
                }
            }
        }
        return true;
    },[currPiece,grid]
);

const moveLeft=useCallback(
    ()=>{
const newX=currPiece.x-1;
if(isVallidMove(newX,currPiece.y)){
    setCurrPiece({...currPiece,x:newX});
}
    },[currPiece,isVallidMove]
);

const moveRight=useCallback(
    ()=>{
const newX=currPiece.x+1;
if(isVallidMove(newX,currPiece.y)){
    setCurrPiece({...currPiece,x:newX});
}   
    },[currPiece,isVallidMove]
);

const moveDown=useCallback(
    ()=>{
const newY=currPiece.y+1;
if(isVallidMove(currPiece.x,newY)){
    setCurrPiece({...currPiece,y:newY});        
}   
},[currPiece,isVallidMove]
);

const rotate=useCallback(
    ()=>{
        setCurrPiece(
prev=>({
...prev,
tetromins:prev.tetromins===TETROMINS['I']?TETROMINS['O']:TETROMINS['I']
}));  },[]
);

const displayGrid=grid.map(row=>[...row]);

currPiece.tetromins.shape.forEach(
    (row,y)=>{
        row.forEach(
            (cell,x)=>{
                if(cell){
                    const boardX=currPiece.x+x;
                    const boardY=currPiece.y+y;

                    if(boardY>=0 && boardY<BOARD_HEIGHT && boardX>=0 && boardX<BOARD_WIDTH){
                        displayGrid[boardY][boardX]={
                            color:currPiece.tetromins.color
                        };
                    }
                }
            }
        );
    }
);

return{
displayGrid,
moveLeft,
moveRight,
moveDown,
rotate,
score
};
};