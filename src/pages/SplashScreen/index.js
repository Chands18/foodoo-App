import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Logosplash } from '../../assets'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() =>{
            navigation.replace('SignIn')
        },3000)
    },[])
    return (
        <View style={{ backgroundColor:'lightskyblue', flex:1,justifyContent:'center', alignItems:'center' }}>
            <Logosplash />
            <View style={{ height:30 }}/>
            <Text style={{ fontSize:32, color:'#020202', fontFamily:'Poppins-Medium'}}>foodoo</Text>
        </View>
    )
}

export default SplashScreen
