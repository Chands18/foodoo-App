import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ProfileDummy} from '../../../assets';
import { getData } from '../../../utils';

const HomeProfile = () => {
  const [photo, setPhoto] = useState(ProfileDummy)
  useEffect(() => {
    getData('userProfile').then(res => {
      console.log('user profile : ', res)
      setPhoto({uri: res.profile_photo_url})
    })
  },[])
  const navigation = useNavigation();
  return (
    <View style={styles.profilecontainer}>
      <View>
        <Text style={styles.appname}>foodoo</Text>
        <Text style={styles.desc}>Let's get some foods</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile') }>
      <Image source={photo} style={styles.profile} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profilecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  appname: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
