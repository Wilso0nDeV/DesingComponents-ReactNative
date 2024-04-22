import { StyleSheet, Text, View } from "react-native"




export const FlexDirectionScreen = () => {
  return (
    <View style={[
        styles.container
    ]}>
        <View style={[styles.box,styles.box1]}/>
        <View style={[styles.box,styles.box2]}/>
        <View style={[styles.box,styles.box3]} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fefefe',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        flexDirection: 'row',
       
        
    },
    box:{
        width: 100,
        height: 100
    },
    box1 : {
        backgroundColor: '#47d0f6',
        
      
        
    },
    box2 : {
        backgroundColor: '#0dac9a',
        
    },
    box3 : {
        backgroundColor: '#11a33a',
        
    },
    
})


