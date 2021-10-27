import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = () => {
    return (
        <View style={styles.header}>
        <Text style={styles.text}> TAPGAME</Text>
      </View>
    )
}

export default Title

const styles = StyleSheet.create({
    header:{
      height:50,
      margin:10
    },
    text:{
      color:'blue',
      fontSize:15,
      fontWeight:'bold',
      fontStyle:'italic',
    }})
