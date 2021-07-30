import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {ProfileTabSection} from '../../components';
import { getData } from '../../utils';

const Profile = () => {
  const [userProfile,setUserProfile] = useState({});
  useEffect (() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    })
  },[]);
  return (
    <View style={styles.page}>
      <View style={styles.profiledetail}>
        <View style={styles.photo}>
          <View style={styles.borderphoto}>
            <Image source={{ uri: userProfile.profile_photo_url }} style={styles.photocontainer} />
          </View>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  photocontainer: {
    padding: 24,
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
  },
  borderphoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 120,
    height: 120,
    borderRadius: 120,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 24,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  email: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  profiledetail:{
      backgroundColor:'ghostwhite',
      paddingBottom:26,
  }
});
