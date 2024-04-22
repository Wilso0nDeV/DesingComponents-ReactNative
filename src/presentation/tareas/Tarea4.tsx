import { StyleSheet, View } from "react-native"




export const Tarea4 = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box,styles.purbleBox]}/>
        <View style={[styles.box,styles.orangeBox]}/>
        <View style={[styles.box,styles.blueBox]}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#28425B',
        flexDirection: 'row-reverse',
        justifyContent:'space-between'
    },
    box:{
        width:100,
        height:100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purbleBox : {
        backgroundColor:'#5856D6',
        alignSelf:'flex-start'

    },
    orangeBox : {
        backgroundColor:'#F0A23B',
        alignSelf:'center'
    },
    blueBox : {
        backgroundColor:'#28C4D9',
        alignSelf:'flex-end'



    }
})