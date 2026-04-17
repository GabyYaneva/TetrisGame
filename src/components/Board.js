import {View}  from "react-native";

export const Board=({grid})=>
{
    return(
    <View>
    {
        grid.map(
            (row,rowIndex)=>
            (
                <View key={rowIndex} 
                style={{flexDirection:"row"}}>
    {
        row.map(
            (cell,cellIndex)=>
            (
                <View
                key={cellIndex}
                style={{width:20,
                height:20,
                backgroundColor:cell?cell.color:'#5B07EC',}}
                />
            )
        )
    }
                </View>
            )
        )
    }
    </View>
    );
};
