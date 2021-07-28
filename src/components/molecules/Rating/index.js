import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';
import Number from '../Number';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<IcStarOn key={i} />);
      } else {
        star.push(<IcStarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingcontainer}>
      <View style={styles.starcontainer}>
        {renderStar()}
      </View>
      <Number number={number} type="decimal" style={styles.numberRating}/>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  starcontainer: {
    flexDirection: 'row',
    marginRight:4,
    
  },
  ratingcontainer: {
    flexDirection: 'row',
    
  },
  numberRating: {
    fontSize:12,
    fontFamily:'Poppins-Regular',
  }
});
