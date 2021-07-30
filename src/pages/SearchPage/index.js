import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IcBack } from '../../assets';
import { ListFoods } from '../../components';
import { API_HOST } from '../../config';
import { showMessage } from '../../utils';

const SearchPage = ({navigation}) => {
  const [foodList, setFoodList] = useState([]);
  const onSearchFood = val => {
    axios
      .get(`${API_HOST.url}/food?name=${val}`)
      .then(res => {
        setFoodList(res.data.data.data);
        console.log('search result: ', res.data.data.data);
      })
      .catch(err => {
        showMessage(
          `${err?.response?.data?.message} on Food By Type API` ||
            'Terjadi kesalahan di API Food By Name',
        );
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack />
        </TouchableOpacity>
        <View>
          <TextInput
            onChangeText={onSearchFood}
            placeholder="What foods?"
            style={styles.search}
          />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        contentContainerStyle={{height: '150%'}}
        numColumns={1}
        data={foodList}
        renderItem={({item}) => {
          return (
            <View
              style={{
                padding: 10,
                borderRadius: 20,
              }}>
              <ListFoods
                name={item.name}
                image={{uri: item.picturePath}}
                rating={item.rate}
                price={item.price}
                subTitle={item.ingredients}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  search: {
    borderRadius: 20,
    height: 40,
    width: 340,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 10,
  },
});
