import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../Components/button'
import Title from '../Components/title'

const Game = () => {
    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.progressView}>
                <Text style={styles.text}>Progress</Text>
            </View>

            <View style={styles.gamecenter}>
            <Text style={styles.num}>0</Text>
            <Button buttonText='TAP!' btnstyle={styles.button}/>
            </View>
        </View>
    )
}

export default Game

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    gamecenter:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    num:{
        fontSize:27
    },
    button:{
        borderWidth:2,
        width:130,
        alignItems:'center',
        paddingVertical:15, 
        marginTop:50
    },
    text:{
        fontSize:18
    },
    progressView:{
        margin:10
    }

})
