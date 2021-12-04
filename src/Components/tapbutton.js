import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Tapbutton = ({style,onPress}) => {
    return (
        <View style={style}>
            <TouchableOpacity style={styles.mainbutton} onPress={onPress}>
                <Text style={styles.text}>
                    TAP
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Tapbutton

const styles = StyleSheet.create({
    mainbutton:{
        zIndex:10,
        width:120,
        height:70,
        borderRadius:20,
        shadowColor:'#4048BF',
        shadowOffset:{
            width:6.4,
            height:6.4,
        },
        shadowOpacity:0.5,
        shadowRadius:20,
        backgroundColor:'#203953',
        elevation:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
})
