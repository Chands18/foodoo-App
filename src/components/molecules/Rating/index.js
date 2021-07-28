import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i < 5; i++) {
      if (i <= number) {
        star.push(<IcStarOn />);
      } else {
        star.push(<IcStarOff />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingcontainer}>
      <View style={styles.starcontainer}>
        {renderStar()}
      </View>
      <Text>{number}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  starcontainer: {
    flexDirection: 'row',
    marginRight:4,
    alignItems:'center',
  },
  ratingcontainer: {
    flexDirection: 'row',
  },
});
