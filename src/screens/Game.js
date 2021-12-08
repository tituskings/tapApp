import { react } from '@babel/types';
import React,{ useState, useEffect,useRef} from 'react'
import { Alert, Animated, StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native'
import { Button, Modal, Portal,Provider } from 'react-native-paper';
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
    const pass = useRef (0);
    const nTime = useRef(6)
    const [currentGameT, setCurrentGameT] = useState(0)
    const [Visible, setVisible] = useState(false);
    
   //function that toogles the start button
   const toggle = ()=>{
       setIsActive(!isActive)
      
   }

   //function that shows the modal
    const showModal = () => {
        setVisible(true)
    }
    // control the visibility of the modal
    const modFunction = () => {
        showModal();
        setTimeout(()=>{
            //sets visibility to false and navigate to next screen
            setVisible(false)
            navigation.navigate({
                name:'Result',
                //passing pass.current as a param to the next screen
                params:{passd:pass.current},
                merge: true,
            })

        },2000)
    }
    
    const nTimer = () => {
        setTimeout(() => {
            //subtract from timer
            nTime.current= nTime.current - 1;
            //set current time display
            setCurrentGameT(nTime.current)
            //display time
            console.log(nTime)
            if(nTime.current > 0 ) nTimer()
            if(nTime.current == 0 && pass.current < 10 )
            modFunction()
        }, 1000);
    }
    
    useEffect( () => {
        if(isActive){
           nTime.current = route.params?.difficultyTimeS
           
       nTimer()
    }

    },[isActive])


    
    const count =() =>{
        //if start button is clicked then the condition becomes true
        if(isActive){
            setCounter(counter + 1); console.log(counter)
            //conditio is true when the number of taps is equal to the generated random number
            if(counter == number){
                let min = 1;
                let max = 3;
                setNumber(Math.floor(Math.random()*max)+min);
                //setting the counter or number of taps back to the initial value when the above condition is true
                setCounter(1)
                //this condition makes sure that pass.current doesnt exceed 10
                if(pass.current < 10 )pass.current = pass.current + 1
                console.log(pass.current)
            }
            //if current pass is up to the required difficulty
            if(pass.current == 10 ){
              modFunction()
            }
        }
    }

    const formatNumber= number => `0${number}`.slice(-2);

   return (
       <>
       <ImageBackground
       source= {require('../../assets/images/back2.png')}
       resizeMode='cover'
       style={{flex:1}}
       >

        <View style={styles.container}>
            <Title/>
                <Portal>
                    <Modal visible={Visible} onDismiss={modFunction} contentContainerStyle={styles.containerStyle}>
                        {pass.current == 10 ? <Text style={styles.timerTextStyle2} >Good Job!</Text> :<Text style={styles.timerTextStyle2} >Time UP!</Text>}
                    </Modal>
                </Portal>
            
            <View style={styles.top}>
            <View >
            <Text style={styles.timerTextStyle1}>Timer</Text>
            <Text style={styles.timerTextStyle}>{formatNumber(currentGameT)}</Text>
            </View>
            {isActive? 
            <Text style={styles.text}>{pass.current} {pass.current <= 1 ?"tap" : "taps"}</Text>
            :<Text></Text> }
            </View>
            <View style={styles.gamecenter}>
            <Text style={styles.num}>{isActive ? number : ''}</Text>
            <Tapbutton style={styles.button} onPress={count}/>
            {isActive? <Text>''</Text> : 
            <TouchableOpacity style={styles.btnStart} onPress={toggle } disabled={isActive}>
                 <Text style={styles.btntext}>Start</Text>
            </TouchableOpacity>
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
        padding:10,
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
        borderRadius:120,
        color:'white'
        
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
        fontSize:20,
        fontWeight:'bold',
        marginLeft:180
    },
    containerStyle:{
        backgroundColor:'white',
        padding:30,
        marginHorizontal:20,
        borderRadius:10
    },
    timerTextStyle1:{
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:10
    },
    timerTextStyle2:{
        fontSize:22,
        fontWeight:'bold',
    },
    timerTextStyle:{
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:15
    },
})
