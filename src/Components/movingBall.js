import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MovingBall = () => {
    const [counter, setCounter] = useState(0)
    const bounce = useState(new Animated.Value(0)) [0];
    
    useEffect(()=>{
        let interval =null;
        if (isActive){
            interval = setInterval((counter) => {
                bounce.setValue(-40)
                setCounter(counter +1)
                console.log(counter)
                Animated.spring(bounce,{
                    toValue:0,
                    duration:2000,
                    friction:4,
                    tension:20,
                    useNativeDriver:false
                }).start();
            }, 2000);
        }
       
        return () =>clearInterval(interval)
        
    },[isActive])
    return (
        <View>
                 {//pass == 10 ? but not yet passed through the stack nbavigator
                        step == 0 ?
                        <Animated.View 
                        style={[
                            {
                                position:'absolute',
                                width:20,
                                height:20,
                                borderRadius:10,
                                backgroundColor:'red',
                                transform:[{
                                    translateY:bounce
                                }]
                            }
                        ]}
                        />
                        : <Text></Text> }
        </View>
    )
}

export default MovingBall

const styles = StyleSheet.create({})
