import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';
import {useForm} from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Sorong',
  });

  const dispatch = useDispatch();
  const registerReducer = useSelector(state => state.registerReducer)

  const onSubmit = () => {
    console.log('form:', form);
    const data = {
      ...form,
      ...registerReducer
    }
    console.log('data Register: ', data)
    axios.post('http://192.168.0.143:8000/api/register', data)
    .then(res => {
      console.log('data success:', res.data)
      showMessage('Register success', 'info')
      navigation.replace('SuccessSignUp')
    })
    .catch(err => {
      showToast('Error signup')
    })
  };

  const showToast = (message, type) => {
    showMessage({
      message,
      type: type === 'success' ? 'info' : 'danger',
      backgroundColor: type === 'success' ? 'skyblue' : 'danger'
    });
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow:1 }}>
    <View style={styles.page}>
      <Header
        title="Address"
        subtitle="Make sure its valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput
          label="Phone No."
          placeholder="Type your phone number"
          value={form.phoneNumber}
          onChangeText={(value) => setForm('phoneNumber', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Address"
          placeholder="Type your address"
          value={form.address}
          onChangeText={(value) => setForm('address', value)}
        />
        <Gap height={16} />
        <TextInput
          label="House No."
          placeholder="Type your house number"
          value={form.houseNumber}
          onChangeText={(value) => setForm('houseNumber', value)}
        />
        <Gap height={16} />
        <Select label="City" value={form.city}
          onSelectChange={(value) => setForm('city', value)} />
        <Gap height={16} />
        <Button
          text="Sign Up Now"
          onPress={onSubmit}
        />
      </View>
    </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
