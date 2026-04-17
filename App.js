import { useState,useEffect } from "react";
import {View,Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Board} from "./src/components/Board";
import {TETROMINOS,BOARD_WIDTH,BOARD_HEIGHT} from "./src/constants/tetrominos";

export default function App() {
  
return (
 <SafeAreaView>
  <View>
    <Text>Tetris</Text>
    <Text>Score :{score}</Text>
  </View>
  <View>
    <Board />
  </View>
<View>
  <TouchableOpacity >
    <Text>←</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text>↻</Text>
  </TouchableOpacity>
  <TouchableOpacity > 
    <Text>↓</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text>→</Text>
  </TouchableOpacity>
</View>
 </SafeAreaView>
);
};    
