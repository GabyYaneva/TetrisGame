import {View} from 'react-native';
import React from 'react';
export const Board=({grid})=>{
    return(
        <View  >
            {grid.map((row,y)=>(
            <View key={y} >
               {
                row.map((cell,x)=>(
                    <View key={x} />
                )
            )
               }
                </View>
            ))
            }
        </View>
    );
};