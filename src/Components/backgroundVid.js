import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Video from 'react-native-video';

const BackgroundVid = () => {
    return (
        <>
        <Video
            source={require('../../assets/video/Bubble.mp4')}
            style={styles.video}
            repeat
            resizeMode="cover"
            muted
            rate={1.0}
            />
            </>
    )
}

export default BackgroundVid

const styles = StyleSheet.create({
    
    video:{
        position:'absolute',
        zIndex:0,
        top:0,
        right:0,
        left:0,
        bottom:0
    },
})
