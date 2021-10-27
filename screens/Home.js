import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../Components/button'
import Title from '../Components/title'

const Home = () => {
    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.btnContainer}>
            <Button buttonText='New Game' btnstyle={styles.view}/>
            <Button buttonText='Continue'btnstyle={styles.view}/>
            <Button buttonText='Quit' btnstyle={styles.view}/>
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
