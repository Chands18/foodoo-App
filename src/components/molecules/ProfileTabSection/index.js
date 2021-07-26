import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Food1, Food2, Food3, Food4} from '../../../assets';
import ListFoods from '../ListFoods';
import {useNavigation} from '@react-navigation/native';
import ListProfile from '../ListProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const Account = () => {
  const navigation = useNavigation();
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']) .then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]})
    });
  }
  return (
    <View style={{paddingTop: 8, paddingHorizontal:24}}>
      <ListProfile text="Edit Profile"/>
      <ListProfile text="Home Address"/>
      <ListProfile text="Security"/>
      <ListProfile text="Payments"/>
      <ListProfile text="Sign Out" onPress={signOut}/>
    </View>
  );
};

const foodoo = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal:24}}>
      <ListProfile text="Rate App"/>
      <ListProfile text="Help Center"/>
      <ListProfile text="Privacy & Policy"/>
      <ListProfile text="Terms & Conditions"/>
    </View>
  );
};

const ProfileTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'foodoo'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: foodoo,
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

export default ProfileTabSection;

const styles = StyleSheet.create({});
