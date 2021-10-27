import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({buttonText,btnstyle}) => {
    return (
           <TouchableOpacity style={styles.container}>
               <View style={btnstyle}>
                <Text style={styles.text}>
                 {buttonText}
                 </Text>  
               </View>
           </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container:{
        paddingVertical:3,        
        alignItems:'center',
        margin:4,
    },
    text:{
        fontSize:17,
        fontWeight:'bold',

    },
})
