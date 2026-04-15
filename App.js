import { useState,useEffect } from "react";
import {View,Text,SafeAreaView } from "react-native";
import {Board} from "./components/Board";
import {Controls} from "./components/Controls";
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
    tetromino:TETROMINOS.I,
    color:'cyan'
  }
);


      
};