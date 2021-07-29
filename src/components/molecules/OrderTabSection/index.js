import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {getInProgress, getPastOrders} from '../../../redux/action';
import ListFoods from '../ListFoods';

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
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getInProgress());
  }, [dispatch]);
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {inProgress.map(order => {
          return (
            <ListFoods
              key={order.id}
              image={{uri: order.food.picturePath}}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type="in-progress"
              items={order.quantity}
              price={order.total}
              name={order.food.name}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getPastOrders());
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {pastOrders.map(order => {
        return (
          <ListFoods
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => navigation.navigate('OrderDetail',order)}
            type="past-orders"
            items={order.quantity}
            price={order.total}
            name={order.food.name}
            date={order.created_at}
            status={order.status}
          />
        );
      })}
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
