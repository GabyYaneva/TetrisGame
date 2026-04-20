import {View} from 'react-native';

export const Piece = ({tetromino})=>
{
return(
     <View className="absolute ">
      {tetromino.shape.map((row, y) => (
        <View key={y} className="flex-row">
          {row.map((cell, x) => (
            <View
              key={x}
              className="w-6 h-6 m-0.5 ${cell ? 'bg-blue-500' : 'bg-slate-700'}"
            />
          ))}
        </View>
      ))}
    </View>
  );
};