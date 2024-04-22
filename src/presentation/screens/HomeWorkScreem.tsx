import { StyleSheet, View } from "react-native"




export const HomeWorkScreem= () => {
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
        top:100
        

    },
    orangeBox : {
        backgroundColor:'#F0A23B',
        alignSelf:'flex-end',
        right:56
        
    },
    blueBox : {
        backgroundColor:'#28C4D9',
        



    }
})