import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSucorder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = () => {
  return (
    <View style={styles.page}>
      <IlSucorder />
      <Gap height={30} />
      <Text style={styles.title}>You've Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Just stay at home while we are</Text>
      <Text style={styles.subtitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.btncontainer}>
        <Button
          text="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={15} />
      <View style={styles.btncontainer}>
        <Button
          text="View My Order"
          color="gray"
          textColor="white"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'ghostwhite',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  btncontainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
