


import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//*BoxObjectModelScreen : Es el padre que determinara las dimensiones de sus hijos
export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
        <View style={styles.purbleBox}>
          <Text style={{color:'with'}}>Hola mundo</Text>
        </View>
        <View style={styles.purbleBox}></View>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'red',
    
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30, //* me genera un paddingleft y rigth
    paddingVertical:10, //*me genera un paddingTop y Buttom
    borderWidth:10
  },
  purbleBox:{
    height:30,
    backgroundColor: 'purple',
    // margin: 30,
    marginHorizontal: 20,
    marginVertical: 30,
    padding: 5
  }
})