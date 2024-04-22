import { StyleSheet, Text, View } from "react-native"




export const FlexBoxScreen = () => {
  return (
    <View style={[
        styles.container,
        {flexDirection:'column'}
    ]}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:20
    },
    box1 : {
        backgroundColor: '#403ec8',
        flex: 1 //1  + 2 + 3  = 1/6
    },
    box2 : {
        backgroundColor: '#4542cc',
        flex: 2  //  2/6 = 1/3
    },
    box3 : {
        backgroundColor: '#5654dc',
        flex: 3 // 3/6 = 1/2
    },
    
})


