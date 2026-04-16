import {View}  from "react-native";

export const Board=({grid})=>
{
    <View>
        {
            grid.map(
                (row,y)=>
                    <View key={y}>
                        {
                            row.map(
                                (cell,x)=>
                                (
                                    <View
                                    key={x}
                                    />
                                )
                            )
                        }
                    </View>
        )
        }
    </View>
}