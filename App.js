import { useState,useEffect } from "react";
import {View,Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Board} from "./src/components/Board";
import {TETROMINOS,BOARD_WIDTH,BOARD_HEIGHT} from "./src/constants/tetrominos";

export default function App() {
  const createEmptyGrid = () => 
    Array(BOARD_HEIGHT).fill(null).map(()=>
    Array(BOARD_WIDTH).fill(0));
const[grid,setGrid]=useState(createEmptyGrid());

const [currPiece,setCurrPiece]=useState(
  {
    x:3,
    y:0,
    tetromino:TETROMINOS.I
  }
);

const [score,setScore]=useState(0);

const displayGrid=grid.map(
  row=>[...row]
);

currPiece.tetromino.shape.forEach(
  (row,y)=>{
row.forEach(
  (cell,x)=>
  {
    if(cell){
      const boardY=currPiece.y+y;
      const boardX=currPiece.x+x;
      if(boardY>=0&&boardY<BOARD_HEIGHT&&boardX>=0&&boardX<BOARD_WIDTH)
      {
        displayGrid[boardY][boardX]=
        {
          color:currPiece.tetromino.color
        };
      }
    }
  }
);
  }
);

const movePiece=(direction)=>
{
  setCurrPiece(prev=>
  (
    {
      ...prev,
      x:prev.x+direction
    }
  )
  );
};

const rotate=()=>
{
  const shape=Object.keys(TETROMINOS);
  const currIndex=shape.findIndex(
  s=>
    TETROMINOS[s].shape===currPiece.tetromino.shape
);
const nextPiece=shape[(currIndex+1)%shape.length];

setCurrPiece(
  prev=>(
    {
      ...prev,
      tetromino:TETROMINOS[nextPiece],
      color:TETROMINOS[nextPiece].color
    }
  )
);
};

const dropPiece=()=>{
  setCurrPiece(
    prev=>(
      {
        ...prev,
        y:prev.y+1
      }
    )
  );
};

useEffect(
  ()=>
  {
const interval=setInterval(
  ()=>
  {
    setCurrPiece(
      prev=>
      (
        {
          ...prev,
          y:prev.y+1
        }
      )
    );
  },1000
);

return ()=> clearInterval(interval);
  },[]
);


return (
 <SafeAreaView>
  <View>
    <Text>Tetris</Text>
    <Text>Score :{score}</Text>
  </View>
  <View>
    <Board grid={displayGrid} />
  </View>
<View>
  <TouchableOpacity onPress={()=>movePiece(-1)}>
    <Text>←</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text>↻</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>movePiece(1)}> 
    <Text>↓</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>movePiece(1)}>
    <Text>→</Text>
  </TouchableOpacity>
</View>
 </SafeAreaView>
);
      
};