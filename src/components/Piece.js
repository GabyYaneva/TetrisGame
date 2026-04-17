import {View} from 'react-native';

export const Piece = ({tetromino})=>
{
return(
     <View>
      {tetromino.shape.map((row, y) => (
        <View key={y} style={{ flexDirection: 'row' }}>
          {row.map((cell, x) => (
            <View
              key={x}
              style={{
                width: 20,
                height: 20,
                backgroundColor: cell ? tetromino.color : 'transparent'
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
};