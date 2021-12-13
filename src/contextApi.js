import React,{ useState,createContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const GameContext = createContext();

export const  GameProvider = props => {
    const [stepNow, setStepNow] = useState(0);
    const [level, setLevel]= useState(1);
    return (
        <GameContext.Provider 
        value={
            [stepNow,setStepNow],
            [level,setLevel]
        }>
            {props.children}
        </GameContext.Provider>
    )
}

