import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcMin, IcPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.num}>18</Text>
      <TouchableOpacity>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  num: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
  },
});
