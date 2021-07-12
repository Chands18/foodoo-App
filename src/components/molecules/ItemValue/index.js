import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemValue = ({label, value, valueColor='black'}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value(valueColor)}>{value}</Text>
        </View>
    )
}

export default ItemValue

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    label:{
        fontSize:14,
        fontFamily:'Poppins-Regular',
        color:'gray'
    },
    value: (color) => ({
        fontSize:14,
        fontFamily:'Poppins-Regular',
        color:color 
    })
})
