import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profiledetail}>
        <View style={styles.photo}>
          <View style={styles.borderphoto}>
            <Image source={ProfileDummy} style={styles.photocontainer} />
          </View>
        </View>
        <Text style={styles.name}>Faridz Chandra</Text>
        <Text style={styles.email}>notyours@gmail.com</Text>
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
