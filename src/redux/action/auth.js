import axios from 'axios';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'http://192.168.0.143:8000/api',
};

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    axios
      .post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        console.log('data success:', res.data);
        const profile = res.data.data.user;
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;

        storeData('token', {value: token});

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          axios
            .post(`${API_HOST.url}/user/photo`, photoForUpload, {
              headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(resUpload => {
              console.log('succes upload: ', resUpload);
              profile.profile_photo_url = `http://192.168.0.143:8000/storage/${resUpload.data.data[0]}`
              storeData('userprofile', profile);
              navigation.reset({ index: 0, routes: [{name :'SuccessSignUp'}]});
            })
            .catch(err => {
              console.log('upload gagal: ', err);
              showMessage('Upload photo gagal');
              navigation.reset({ index: 0, routes: [{name :'SuccessSignUp'}]});
            });
        } else {
            storeData('userprofile', profile);
            navigation.reset({ index: 0, routes: [{name :'SuccessSignUp'}]});
        }
        dispatch(setLoading(false));
        
      })
      .catch(err => {
        console.log('signup error:', err.response.data);
        dispatch(setLoading(false));
        showMessage(err?.response?.data?.message);
      });
  };
