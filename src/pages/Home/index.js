import { NavigationHelpersContext } from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Food1, Food2, Food4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  });
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
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
