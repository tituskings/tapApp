import React,{useState,useEffect,useRef} from 'react'
import { StyleSheet, Text, View,ImageBackground ,Animated, StatusBar} from 'react-native'
import ResultBox from '../Components/resultBtn';
import BackgroundVid from '../Components/backgroundVid';
import Progess from '../Components/progess';
import LifeStatus from '../Components/lifeStatus';


const Result = ({route, navigation}) => {
  
    const [stage, setStage]= useState(1);
    const [Trial , setTrail] = useState(0);
    const life = useRef(10)
    const step = useRef(0);
    const nTime = useRef(16)
    const [lifeNow , setNow] = useState(10)
    const [status,setStatus] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)

   
   useEffect(()=>{
       if(route.params?.passd == 10){
           step.current = step.current + 1
       } 
       
       //if game is loaded and life is less than 10
       if(status && life.current < 10){
           
           nTimer()
        }

   })

   //life timer function
   const nTimer = () => {
       //set timeout for 1 sec
        setTimeout(() => {
            //subtract from timer
            nTime.current= nTime.current - 1;
            //set status false thus game has not exited
            setStatus(false)
            //set current time display
            setCurrentTime(nTime.current)
            //display time
            console.log(nTime)
            //if timer is greater than 0 call timer
            if(nTime.current > 0 ) nTimer()
            //if timer if 0
            if(nTime.current == 0){
                
                //if life is less than 10
               if(life.current < 10 ) {
                //add 1 to life
                life.current = life.current + 1
                setNow(life.current)
                //reset timer
                nTime.current = 16
                //if life is less than 10
                if(life.current < 10){
                //call timer function
                nTimer()
                }
               }
            }
        }, 1000);
   }

   const selections = ()=> {
       //if life is greater 0
        //proceed
       //else pop error asking user to wait for life to be added 
        //navigation.navigate('Game') 
        //life.current = life.current - 1

    if(life.current > 0){
        navigation.navigate('Game') 
        if(life.current > 0){
            life.current = life.current - 1
            setStatus(true)
            setNow(life.current)
        }
    }else{
        console.log("bobbysua")
    }
    
       
    }
    
    return (
        <>
        
            <BackgroundVid/>
        <View style={styles.container}>
        <StatusBar backgroundColor='#2b6d94'/>
                 <View style={styles.top}>
                    <Text style={styles.text}>Level {stage}</Text>

                    <View style={{flex:1,flexDirection:'row',marginLeft:20,alignItems:'center'}}>
                        <Progess step={step.current/10} Rstep={step.current}/>
                    </View>
                   <View style={{flexDirection:'row',alignItems:'center', width:100}}>
                        <LifeStatus life={lifeNow}/>
                        <Text>{currentTime}</Text>
                   </View>
                 </View>

                 <View style={styles.center}>
                  { route.params?.passd? <Text style={{ 
                        fontFamily: 'menlo', 
                        fontSize: 20, 
                        fontWeight:'900',
                        marginBottom:8, 
                        color:'white'
                    }} >
                        {route.params?.passd}/10
                    </Text>:<Text></Text>}

                         {//when step is == 10 then the player is due for special level or next level
                        step.current == 10 ?
                    <Text style={{fontSize:20,marginTop:30,marginBottom:60 ,color:"white"}} >
                        Congratulation! level completed
                    </Text> 
                    : <Text></Text> }
                    
                    {route.params?.passd == 10 ?
                        <ResultBox  text={ 'Continue'}/>:
                        <Text></Text>
                    }

                    <ResultBox  text={route.params?.passd >= 2 || route.params?.passd < 10? 'Play again' : step.current  == 10 ? 'Next Level': 'play'} 
                                    onPress={selections}
                    />
              
                        <ResultBox  text='Instruction'/>
                       
                    
                        <ResultBox  text='Quit'/>

                 </View>
        </View>
            </>
    )
}

export default Result

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10
    },
    image:{
        flex:1
    },
    text:{
        fontSize:18,
        fontWeight:'500',
        color:'white'
    },
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    top:{
        margin:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
})
