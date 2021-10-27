import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Splash = () => {
   
    return (

        <View style={styles.container}>
            <Text style={styles.text}>TAPGAME</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'gray'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'white'
        
    }
})
