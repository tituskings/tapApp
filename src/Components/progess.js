import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar,Colors,Badge } from 'react-native-paper';

const Progess = ({step,Rstep}) => {
    return (
        <>
           <Badge 
            style={{position:'relative',
                    backgroundColor:'#2b6d94',
                    fontSize:15,
                    padding:5,
                    height:35,
                    width:30,
                    borderRadius:15,
                    zIndex:0.5
                    }}
            >{Rstep}</Badge>
            <ProgressBar progress= {step} color={Colors.blue500} style={styles.progress}/>
        </>
    )
}

export default Progess

const styles = StyleSheet.create({
    
    progress:{
        width:100,
        height:22,
        borderRadius:10,
        backgroundColor:'#2b6d94',
        right:8
    },
})
