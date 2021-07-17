import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import { useForm } from '../../utils';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email : '',
    password : ''
  })

  const onSubmit = () => {
    console.log('form:', form);
    axios.post('http://127.0.0.1:8000/api/login',form)
    .then((res)  => {
      console.log('success', res)
    })
    .catch((err)  => {
      console.log('error',err)
    })
  }
  return (
    <View style={styles.page}>
      <Header title="Sign In" subtitle="Find your best meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email',value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Your Password"
          value={form.password}
          onChangeText={value => setForm('password',value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit}/>
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="ghostwhite"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
});
