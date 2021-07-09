import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Food1, Food2, Food4 } from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components';

const Home = () => {
  return (

      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodcard}>
              <Gap width={24} />
              <FoodCard image={Food1} />
              <FoodCard image={Food2} />
              <FoodCard image={Food4} />
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
