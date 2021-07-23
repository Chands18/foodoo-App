import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage, useForm} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    // password_confirmation: '',
  });

  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form:', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };
  const addPhoto = () => {
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        console.log('Response :', response)
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          const source={uri:response.assets[0].uri};
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          setPhoto(source);
          console.log('uri :',photo)
          dispatch({type: 'SET_PHOTO', value: dataImage});
          dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }
      },
    );
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Sign Up"
          subtitle="Register and Eat"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderphoto}>
                <View style={styles.photocontainer}>
                  {photo ? (
                    <Image source={photo} style={styles.photocontainer} />
                  ) : (
                    <View style={styles.photocontainer}>
                      <Text style={styles.addphoto}>Add Photo</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Your Password"
            secureTextEntry
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
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
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
