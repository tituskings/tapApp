import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Title = () => {
    return (
        <View style={styles.header}>
        <Image
        style={styles.logo}
        source={require('../../assets/images/logo1.png')}
        />
      </View>
    )
}

export default Title

const styles = StyleSheet.create({
    header:{
      height:50,
    },
    logo:{
     height:30,
     width:120
    }})
