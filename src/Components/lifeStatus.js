import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar,Colors,Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LifeStatus = ({life}) => {
    return (
        <>
            <Badge 
                style={{position:'relative',
                        backgroundColor:'red',
                        fontSize:15,
                        padding:5,
                        height:30,
                        width:30,
                        borderRadius:15,
                        zIndex:0.5
                    }}
                >
                    <Icon name="heart"  color="white" size={20}/>
            </Badge>
                <View style={styles.life}>
                        <Text style={{color:'white', paddingLeft:2,fontWeight:'bold' }}>{life}</Text>
                        <Icon name="plus" color='white' size={15}/>
                </View>
        </>
    )
}

export default LifeStatus

const styles = StyleSheet.create({
    
    life:{
         flex:1,
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
         height:25,
         borderRadius:12.5,
         backgroundColor:'#2b6d94',
         right:14,
         paddingHorizontal:14
    },
})
