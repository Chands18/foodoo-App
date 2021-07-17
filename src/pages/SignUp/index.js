import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';
import { useSelector } from 'react-redux';

const SignUp = ({navigation}) => {
  const globalState = useSelector((state) => state.globalReducer)
  return (
    <View style={styles.page}>
      <Header title="Sign Up" subtitle="Register and Eat" onBack={() => {}} />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderphoto}>
            <View style={styles.photocontainer}>
              <Text style={styles.addphoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Your Password" />
        <Gap height={24} />
        <Button text="Continue" onPress={() =>navigation.navigate('SignUpAddress')}/>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'ghostwhite',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  photocontainer: {
    padding: 24,
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
  },
  addphoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
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
  photo:{
      alignItems:'center',
      marginTop:26,
      marginBottom:16,
  }
});
