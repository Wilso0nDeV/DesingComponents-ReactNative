import { StyleSheet, Text, View } from "react-native"




export const PositionAbsoluteScreen = () => {
  return (
    <View style={sytles.container}>
        <View style={sytles.greenBox}>
        </View>
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

    },
    purpleBox:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left:0

    },
    orangeBox:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0

    },
    greenBox:{
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        ...StyleSheet.absoluteFillObject //* esta propiedad me remplaza el width,height, position, bottom, right, etc, y me estira el componente en todo el screen

    }
});
