import React, {useEffect} from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Food1, Food2, Food3, Food4} from '../../../assets';
import ListFoods from '../ListFoods';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

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

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {newTaste.map(item => {
        return (
          <ListFoods
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail')}
          />
        );
      })}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ListFoods
        type="product"
        name="Tongseng"
        price="50.000"
        rating={3}
        image={Food4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const HomeTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

const styles = StyleSheet.create({});
