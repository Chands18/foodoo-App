import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcNext } from '../../../assets'

const ListProfile = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <IcNext/>
        </View>
    )
}

export default ListProfile

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:7
    },
    text:{
        fontSize:14,
        fontFamily:'Poppins-Regular'
    }
})
