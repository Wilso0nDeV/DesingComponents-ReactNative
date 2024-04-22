import { StyleSheet, Text, View } from "react-native"




export const PositionRelativeScreen = () => {
  return (
    <View style={sytles.container}>
        <View style={sytles.purpleBox}>
        </View>
        <View style={sytles.orangeBox}>
        </View>
    </View>
  )
};

const sytles = StyleSheet.create({
    container : {
        flex : 1, //*Si quitamos esto, el ancho que tengamos va a estar relacionados al espacio que ocupen los componentes
        backgroundColor: '#2BC4D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'relative',
        top: 0
    },
    orangeBox:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        top: 0,
        left: -100

    }
});
