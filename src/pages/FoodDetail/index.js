import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Food1, Food5, IcBackDetail} from '../../assets';
import Rating from '../../components/molecules/Rating';
import Button from '../../components/atoms/Button';


const FoodDetail = () => {
  return (
    <View>
      <ImageBackground source={Food5} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcBackDetail />
        </TouchableOpacity>
      </ImageBackground>
      <View>
        <View>
          <View>
            <Text>Cherry Waffle</Text>
            <Rating />
          </View>
          <Text>Counter</Text>
        </View>
        <Text>
          Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
          pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
          teratur.
        </Text>
        <Text>Ingredients</Text>
        <Text>Telur, Blueberry, Cherry</Text>
        <View>
            <View>
                <Text>Total Price</Text>
                <Text>IDR 50.000</Text>
            </View>
            <View>
                <Button text="Order Now"/>
            </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  cover: {
    height: 330,
  },
  back: {
    width: 30,
    height: 30,
    paddingTop: 26,
    paddingLeft: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
