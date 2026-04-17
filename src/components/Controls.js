import{ View , Text , TouchableOpacity} from 'react-native';

export const Controls =({onMoveL,onMoveR,onRotate,onDrop})=>
{
    return(
        <View style={{flexDirection:'row'}}>
  <TouchableOpacity onPress={onMoveL}>
    <Text>←</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={onRotate}>
    <Text>↻</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={onDrop} > 
    <Text>↓</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={onMoveR}>
    <Text>→</Text>
  </TouchableOpacity>
</View>
    );
};