import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FoodCard, Gap, HomeProfile, HomeTabSection, SearchBar } from '../../components';
import { getFoodData } from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  });

  const [value, setValue] = useState('');
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="skyblue"/>
      <HomeProfile />
      <View>
      <SearchBar value={value} placeholder="Cari apa?" type="clickOnly" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodcard}>
            <Gap width={24} />
            {food.map(itemFood => {
              return (
                <FoodCard
                  key={itemFood.id}
                  name={itemFood.name}
                  image={{uri: itemFood.picturePath}}
                  rating={itemFood.rate}
                  onPress={() => navigation.navigate('FoodDetail',itemFood)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabcontainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  foodcard: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  page: {
    flex: 1,
  },
  tabcontainer: {
    flex: 1,
  },
});
