import { useState,useEffect } from "react";
import {View,Text, SafeAreaViewBase } from "react-native";
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

return (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
    <View style={{ alignItems: 'center', padding: 20 }}>
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
        Tetris
      </Text>
      <Text style={{ color: '#ff0', fontSize: 18 }}>
        Score: {score}
      </Text>
    </View>
    
    <View style={{ alignItems: 'center' }}>
      <Board grid={displayGrid} />
    </View>
  </SafeAreaView>
);
      
};