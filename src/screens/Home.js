import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import Title from '../Components/title'

const Home = () => {
    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.btnContainer}>
            <Button style={styles.view} mode="text" onPress={() => console.log('Pressed')}>
                New Game
            </Button>
            <Button style={styles.view} mode="text" onPress={() => console.log('Pressed')}>
                Continue
            </Button><Button style={styles.view} mode="text" onPress={() => console.log('Pressed')}>
                Quit
            </Button>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    btnContainer:{
        marginTop:'50%'
    },
    view:{
        borderWidth:1,
        borderRadius:50,
        width:'90%',
        alignItems:'center',
        paddingVertical:7, 

    }
})
