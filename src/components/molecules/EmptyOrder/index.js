import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlEmpty } from '../../../assets'
import { Button, Gap } from '../../atoms'

const EmptyOrder = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <IlEmpty />
            <Gap height={30} />
            <Text style={styles.title}>Ouch! Hungry</Text>
            <Gap height={6} />
            <Text style={styles.subtitle}>Seems like you have not</Text>
            <Text style={styles.subtitle}>ordered any food yet</Text>
            <Gap height={30} />
            <View style={styles.btncontainer}>
            <Button text="Find Foods" onPress={() => navigation.replace('MainApp')}/>
            </View>
        </View>
    )
}

export default EmptyOrder

const styles = StyleSheet.create({
    page:{
        backgroundColor:'ghostwhite',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        fontFamily:'Poppins-Medium',
        color:'#020202'
    },
    subtitle:{
        fontSize:14,
        fontFamily:'Poppins-Light',
        color:'#8D92A3'
    },
    btncontainer:{
        width:'100%',
        paddingHorizontal:80
    }
})
