import React,{useState,useEffect,useRef} from 'react'
import { StyleSheet, Text, View, StatusBar} from 'react-native'
import {  Modal, Portal } from 'react-native-paper';
import ResultBox from '../Components/resultBtn';
import BackgroundVid from '../Components/backgroundVid';
import Progess from '../Components/progess';
import LifeStatus from '../Components/lifeStatus';


const Result = ({route, navigation}) => {
  
    const [level, setLevel]= useState(1);
    const [Trial , setTrail] = useState(0);
    const life = useRef(10)
    const step = useRef(0);
    var difficultyTime = useRef(10);
    const nTime = useRef(250)
    const [lifeNow , setNow] = useState(10)
    const [status,setStatus] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)
    const [stepNow, setStepNow] = useState(0);
    const [Visible, setVisible] = useState(false);

   
   useEffect(()=>{
       //if pass a param from the game screen is equal to 10 then increase step by 1
       if(status && route.params?.passd == 10){
           nstep()
       } 
       
       // if step equals 10 then increase the level by 1
       if(status && step.current == 10){
         nlevel()
       }
       //if game is loaded and life is less than 10
       if(status && life.current < 10){
           
           nTimer()
        }

   })

    //function that shows the modal
    const showModal = () => {
        setVisible(true)
    }
    //function that hide the modal
    const hideModal = () => {
        setVisible(false)
    }


   // level function
   const nlevel = () =>{
    setLevel(level + 1)
    step.current = 0
    setStatus(false)
   }
    // step function
   const nstep = () => {
    step.current = step.current + 1
    setStepNow(step.current)
    setStatus(false)
   }

   

  

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
                nTime.current = 250
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
        
        navigation.navigate({
            name:'Game',
            //passing pass.current as a param to the next screen
           
            params:{difficultyTimeS:difficultyTime.current},
            merge: true,
        })
        if(life.current > 0){
            life.current = life.current - 1
            setStatus(true)
            setNow(life.current)
    }else{
        console.log("bobbysua")
    }
    
    }
}

    const contNextFunc = () => {
        //COntinue, another step
        if(route.params?.passd == 10){
            if(route.params?.passd == 10) difficultyTime.current = difficultyTime.current - 1
            navigation.navigate({
                name:'Game',
                //passing pass.current as a param to the next screen
                params:{difficultyTimeS:difficultyTime.current},
                merge: true,
            })
            if(life.current > 0){
                life.current = life.current - 1
                setStatus(true)
                setNow(life.current)
                
            }
            }else{
                console.log("bobbysua")
            }
            //Nexy level
            if(step.current  == 10){
                if( level == 2){
                    selections()
                }
                else if( level == 3){
                    selections()
                }
                else if( level == 4){
                    selections()
                }
                else if( level == 5){
                    selections()
                }
            }
        
       }
    
    
    return (
        <>
        
            <BackgroundVid/>
        <View style={styles.container}>
        <StatusBar backgroundColor='#2b6d94'/>
                <Portal>
                    <Modal visible={Visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                     <Text > INSTRUCTIONS</Text>
                    </Modal>
                </Portal>
                 <View style={styles.top}>
                    <Text style={styles.text}>Level {level}</Text>

                    <View style={{flex:1,flexDirection:'row',marginLeft:30,alignItems:'center'}}>
                        <Progess step={stepNow/10} Rstep={stepNow}/>
                    </View>
                   <View style={{flexDirection:'row',alignItems:'center', width:100}}>
                        <LifeStatus life={lifeNow}/>
                   </View>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                         {currentTime > 0 ?<Text style={{color:'white',fontSize:14}}>{currentTime}</Text>: <Text></Text>}
                   </View>
                 </View>

                 <View style={styles.center}>
                  { route.params?.passd?  <Text style={styles.tapStyle}>
                        {route.params?.passd}/10
                    </Text>:<Text style={styles.tapStyle}>0 tap</Text>}

                         {//when step is == 10 then the player is due for special level or next level
                        stepNow == 10 ?
                    <Text style={{fontSize:20,marginTop:30,marginBottom:60 ,color:"white"}} >
                        Congratulation! level completed
                    </Text> 
                    : <Text></Text> }
                    
                    {route.params?.passd == 10 ?
                    //if the pass if equal to 10 the continue to the next step but still in the same level
                        <ResultBox  text={ 'Continue'} onPress={contNextFunc}/>:
                        //if the step which controls the progress bar is equal to 10 then next load next levl 
                        step.current  == 10 ? <ResultBox  text={ 'Next Level'} onPress={contNextFunc}/>:
                        <Text></Text>
                    }

                    <ResultBox  text={route.params?.passd >= 2 || route.params?.passd < 10? 'Play again' : 'play'} 
                                        onPress={selections}
                    />
              
                    <ResultBox  text='Instruction' onPress={showModal}/>
                       
                    
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
    containerStyle:{
        backgroundColor:'white',
        padding:30,
        marginHorizontal:15,
        borderRadius:10
    },
    tapStyle:{
        fontFamily: 'menlo', 
        fontSize: 20, 
        fontWeight:'900',
        marginBottom:8, 
        color:'white'
    }
})
