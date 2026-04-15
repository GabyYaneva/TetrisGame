import {View} from 'react-native';
import React from 'react';
export const Board=({grid})=>{
    return(
        <View className="bg-blue-500 p-2 border-2 border-grey-400" >
            {grid.map((row,y)=>(
            <View key={y} className="flex-row">
               {
                row.map((cell,x)=>(
                    <View key={x}
                     className="w-6 h-6 border border-gray-400
                      ${cell?cell.color:'bg-gray-800'}" />
                )
            )
               }
                </View>
            ))
            }
        </View>
    );
};