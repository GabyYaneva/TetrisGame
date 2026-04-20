import{ View , Text , TouchableOpacity} from 'react-native';

export const Controls =({onMoveL,onMoveR,onRotate,onDrop})=>
{
    return(
        <View className="justify-center items-center mt-4 d-flex flex-row inline-grid">
  <TouchableOpacity onPress={onMoveL} className="bg-gray-700 p-2 rounded-lg m-1">
    <Text>←</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={onRotate} className="bg-gray-700 p-2 rounded-lg m-1">
    <Text>↻</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={onDrop} className="bg-gray-700 p-2 rounded-lg m-1"> 
    <Text>↓</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={onMoveR} className="bg-gray-700 p-2 rounded-lg m-1">
    <Text>→</Text>
  </TouchableOpacity>
</View>
    );
};