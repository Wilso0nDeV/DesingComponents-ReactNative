import {Dimensions, useWindowDimensions} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

//*Dimensions : nos sirve para optener las dimensiones witdh y height.
//*Pero este se usa cuando estamos fuera del contexto de react-native.

//const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {

    //*useWindowDimensions :  nos sirve para obtener las dimensiones de un container dentro del contexto de React
    //*Este actualiza las dimensiones de manera automatica en caso la pantalla gire (Vertica u Horizontal)
  const {width, height} = useWindowDimensions()
  
  return (
    <View>
      <View style={styles.container}>
        <View style={{
            ...styles.purbleBox,
            width: width * 0.60  //Aqui estamos sobre escribien el with del hijo  a un (60%)
        }}></View>
      </View>
      <Text>w:{width}, h:{height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
  purbleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
});
