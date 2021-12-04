import { react } from '@babel/types';
import React,{ useState, useEffect,useRef} from 'react'
import { Alert, Animated, StyleSheet, Text, View,ImageBackground } from 'react-native'
import { Button } from 'react-native-paper';
import Tapbutton from '../Components/tapbutton';
import Title from '../Components/title'

/*
const formatNumber= number => `0${number}`.slice(-2);
const getRemaining = (time) => {
    const mins = Math.floor(time/ 60);
    const secs = time - mins * 60;

    return {mins:formatNumber(mins), secs:formatNumber(secs)} ;
}
*/
const Game = ({navigation,route}) => {
    const [counter, setCounter] = useState(1);
    const [number, setNumber]=useState(2);
    const [isActive, setIsActive] = useState(false);
    const leftValue =  useState(new Animated.Value(0)) [0];
    const pass = useRef (0);
    
   
   const toggle = ()=>{
       setIsActive(!isActive)
      
   }
   
   
   useEffect( () => {
       if(isActive){
       Animated.timing(leftValue,{
           toValue:350,
           duration:5000,
           useNativeDriver:false
        }).start(()=>{
            Alert.alert('flash','Time Up', [
                {text:''}
            ]);
            setTimeout(()=>{
                navigation.navigate({
                    name:'Result',
                    params:{passd:pass.current},
                    merge: true,
                })

            },2000)
            
        })

    }

    },[isActive])


    
    const count =() =>{
        if(isActive){
            setCounter(counter + 1); console.log(counter)
            if(counter == number){
                let min = 1;
                let max = 3;
                setNumber(Math.floor(Math.random()*max)+min);
                setCounter(1)
                if(pass.current < 10 )pass.current = pass.current + 1
                console.log(pass.current)
            }
            if(pass.current === 10 ){
                Alert.alert('flash','You tried but next time do well and have fun', [
                    {text:'ok' , onPress: ()=> navigation.navigate({
                        name:'Result',
                        params:{passd:pass.current},
                        merge: true,
                    })}
                ]);
            }
        }
    }



   return (
       <>
       <ImageBackground
       source= {require('../../assets/images/backg1.png')}
       resizeMode='cover'
       style={{flex:1}}
       >

        <View style={styles.container}>
            <Title/>
            <View style={styles.top}>
            {isActive? 
            <Text style={styles.text}>{pass.current} {pass.current == 1 ?"tap" : "taps"}</Text>
            :<Text></Text> }
            </View>
            <Animated.View 
            style={[
                {
                    width:20,
                    height:20,
                    marginLeft:leftValue,
                    backgroundColor:'#353f4f'
                }
            ]}
            />
            <View style={styles.gamecenter}>
            <Text style={styles.num}>{isActive ? number : ''}</Text>
            <Tapbutton style={styles.button} onPress={count}/>
            {isActive? <Text>''</Text> : 
            <Button style={styles.btnStart} color='white'
            labelStyle={styles.btntext} mode="outlined" onPress={toggle } disabled={isActive}>
                 Start
            </Button>
                }
            </View>
        </View>
                </ImageBackground>
        </>
    )
} 

export default Game

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    gamecenter:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    num:{
        fontSize:27,
        color:'white',
        fontWeight:'bold',
        marginTop:30
    },
    button:{
        width:130,
        alignItems:'center', 
        marginTop:100,
    },
    btnStart:{
        borderWidth:10,
        width:120,
        height:120,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10, 
        marginTop:50,
        borderColor:'purple',
        borderRadius:120
        
    },

    btntext:{
        fontSize:20
    },
    top:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'

    },
    text:{
        fontSize:17,
        fontWeight:'bold'
    }
})
