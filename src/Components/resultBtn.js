import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const resultBtn = ({text,onPress}) => {
    return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <View >
                    <Text style={styles.text}>{text}</Text>
                 </View>
            </TouchableOpacity>
    )
}

export default resultBtn

const styles = StyleSheet.create({
     container:{
        flexDirection:'row',
        justifyContent:'center',
        height:50,
        alignItems:'center',
        borderWidth:1,
        borderColor:'white',
        margin:13,
        paddingHorizontal:5,
        width:'50%',
        borderRadius:25,
        shadowColor:'#4048BF',
        shadowOffset:{
            width:6.4,
            height:6.4,
        },
        shadowOpacity:0.5,
        shadowRadius:20,
        backgroundColor:'#2b6d94',
        opacity:0.7,
        elevation:10,

    },
    text:{
        fontSize:22,
        color:'white'
    },
})
