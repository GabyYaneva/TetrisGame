import {View}  from "react-native";

export const Board=({grid})=>
{
    return(
    <View className="bg-slate-950 p-2 rounded-lg">
    {
        grid.map(
            (row,rowIndex)=>
            (
                <View key={rowIndex} 
                className="flex-row">
    {
        row.map(
            (cell,cellIndex)=>
            (
                <View
                key={cellIndex}
                className={`w-6 h-6 m-0.5 ${cell? 'bg-blue-500':'bg-slate-700'}`}
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
