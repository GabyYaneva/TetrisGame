import{View,Text,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Board} from './src/components/Board';
import {Controls} from './src/components/Controls';
import {useGame} from './src/hooks/useGame';
import {useGameState} from './src/hooks/gameState';


export default function App() {

  const {
   gameState,
        isPlaying,
        isPaused,
        isGameOver,
        startGame,
        gameOver,
        restartGame,
        pauseGame,
        goToMenu

  }=useGameState();

 const {
  displayGrid,
  score,
  isGameOver: gameIsOver,
  moveLeft,
  moveRight,
  dropDown,
  rotatePiece,
  resetGame
 }=useGame();


 if(gameIsOver && isPlaying){
  gameOver();
 }

 if(goToMenu){
  return(
    <SafeAreaView style={{flex:1}}>
<View>
  <Text>Tertis</Text>
  <TouchableOpacity onPress={startGame}>
    <Text>Start Game</Text>
  </TouchableOpacity>
</View>
    </SafeAreaView>
  );
 }

 if(isGameOver||gameIsOver){
  return(
    <SafeAreaView style={{flex:1}}>
<View>
<Text>Game Over</Text>
<Text>Score: {score}</Text>
<TouchableOpacity onPress={()=>{
  resetGame();
  restartGame();
  }}>
  <Text>Restart Game</Text>
  </TouchableOpacity>
<TouchableOpacity onPress={goToMenu}>
  <Text>Menu</Text>
</TouchableOpacity>
</View>
    </SafeAreaView>
  );
 }

return(
<SafeAreaView style={{flex:1}}>
  <View>
    <Text>Tetris</Text>
<Text>Score: {score}</Text>
{isPaused && <Text>Paused</Text>}
  </View>
  <View>
    <Board grid={displayGrid}/>
  </View>
  <Controls
    onLeft={moveLeft}
    onRight={moveRight}
    onDown={moveDown}
    onRotate={rotate}
    onPause={pauseGame}
  />

  <View>
    <TouchableOpacity onPress={pauseGame}>
<Text>{isPaused ? 'Resume' : 'Pause'}</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);

};