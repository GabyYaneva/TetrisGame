import { View, Text, TouchableOpacity, Touchable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controls } from './src/components/Controls';
import { Button } from 'react-native';
import { Board } from './src/components/Board';
import { Piece } from './src/components/Piece';
import { useGameState } from './src/hooks/gameState';
import{useGame} from './src/hooks/useGame';



export default function App() {

const newGrid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ];

  const tetromino = {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: 'blue',
  };


return(

  <SafeAreaView>
    <View>
      <View>
        <Text>Menu</Text>
        <Text>Tetris</Text>
        <Text>Score{}</Text>
      <Button title='play' onPress={}></Button>
      </View>
      <View className="border-2 border-slate-700 rounded-xl overflow-hidden">
        <Board grid={newGrid}/>
        <Piece tetromino={tetromino}/>
      </View>
     <View>
        <Controls />
      </View> 
  </View>
  </SafeAreaView>
)

};