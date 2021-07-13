import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Food1, Food2, Food3, Food4} from '../../../assets';
import ListFoods from '../ListFoods';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'black', height: 3}}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? 'black' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal:24}}>
      <ListFoods
        rating={3}
        image={Food1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
        price="150.000"
        name="Tongseng"
      />
      <ListFoods
        rating={3}
        image={Food2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
        price="150.000"
        name="Tongseng"
      />
      <ListFoods
        rating={3}
        image={Food3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
        price="150.000"
        name="Tongseng"
      />
      <ListFoods
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
        price="150.000"
        name="Tongseng"
      />
      <ListFoods
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
        price="150.000"
        name="Tongseng"
      />
      <ListFoods
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
        price="150.000"
        name="Tongseng"
      />
      <ListFoods
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
        price="150.000"
        name="Tongseng"
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal:24}}>
      <ListFoods
        rating={3}
        image={Food1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        price="150.000"
        name="Tongseng"
        date="July 12 , 13.00"
        status="Cancel"
      />
      <ListFoods
        rating={3}
        image={Food2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        price="150.000"
        name="Tongseng"
        date="July 12 , 13.00"
      />
      <ListFoods
        rating={3}
        image={Food3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        price="150.000"
        name="Tongseng"
        date="July 12 , 13.00"
      />
      <ListFoods
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        price="150.000"
        name="Tongseng"
        date="July 12 , 13.00"
      />
      <ListFoods
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        price="150.000"
        name="Tongseng"
        date="July 12 , 13.00"
      />
    </View>
  );
};

const OrderTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
