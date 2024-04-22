import { StyleSheet, View } from "react-native"




export const Tara7 = () => {
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
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    box:{
        width:100,
        height:100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purbleBox : {
        backgroundColor:'#5856D6',
        

    },
    orangeBox : {
        backgroundColor:'#F0A23B',
        
    },
    blueBox : {
        backgroundColor:'#28C4D9',
        



    }
})