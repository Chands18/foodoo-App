import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBackDetail} from '../../assets';
import Button from '../../components/atoms/Button';
import {Counter, Number} from '../../components/molecules';
import Rating from '../../components/molecules/Rating';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const {id, name, picturePath, description, ingredients, rate, price} =
    route.params;

  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = value => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 12000;
    const tax = (10 / 100) * (totalItem * price);
    const total = totalPrice + driver + tax;

    // const userProfile =

    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total,
      },
      userProfile,
    };
    console.log('data checkout : ', data);
    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IcBackDetail />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.maincontent}>
          <View style={styles.productcontainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.label}>Ingredients</Text>
          <Text style={styles.desc}>{ingredients}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.pricecontainer}>
            <Text style={styles.labeltotal}>Total Price</Text>
            <Number number={totalItem * price} style={styles.pricetotal} />
          </View>
          <View style={styles.button}>
            <Button text="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
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
  content: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -30,
    backgroundColor: 'ghostwhite',
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  productcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'grey',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    marginBottom: 4,
  },
  maincontent: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  button: {
    width: 163,
  },
  pricecontainer: {
    flex: 1,
  },
  labeltotal: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  pricetotal: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});
