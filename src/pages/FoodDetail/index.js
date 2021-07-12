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
import { Counter } from '../../components/molecules';


const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Food5} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcBackDetail />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.maincontent}>
        <View style={styles.productcontainer}>
          <View>
            <Text style={styles.title}>Cherry Waffle</Text>
            <Rating />
          </View>
          <Counter/>
        </View>
        <Text style={styles.desc}>
          Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
          pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
          teratur.
        </Text>
        <Text style={styles.label}>Ingredients</Text>
        <Text style={styles.desc}>Telur, Blueberry, Cherry</Text>
        </View>
        <View style={styles.footer}>
            <View style={styles.pricecontainer}>
                <Text style={styles.labeltotal}>Total Price</Text>
                <Text style={styles.pricetotal}>IDR 50.000</Text>
            </View>
            <View style={styles.button}>
                <Button text="Order Now" onPress={() => navigation.navigate('OrderSummary')}/>
            </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page:{
    flex:1
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
  content:{
    borderTopRightRadius:40, 
    borderTopLeftRadius:40,
    marginTop:-30,
    backgroundColor:'ghostwhite',
    paddingTop:26,
    paddingHorizontal:16,
    flex:1,
  },
  title:{
    fontSize:16,
    fontFamily:'Poppins-Regular',
  },
  productcontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:14,
  },
  desc:{
    fontSize:14,
    fontFamily:'Poppins-Regular',
    color:'grey',
    marginBottom:16
  },
  label:{
    fontSize:14,
    fontFamily:'Poppins-Regular',
    color:'black',
    marginBottom:4
  },
  maincontent:{
    flex:1
  },
  footer:{
    flexDirection:'row',
    paddingVertical:16,
    alignItems:'center'
  },
  button:{
    width:163,
  },
  pricecontainer:{
    flex:1
  },
  labeltotal:{
    fontSize:13,
    fontFamily:'Poppins-Regular'
  },
  pricetotal:{
    fontSize:18,
    fontFamily:'Poppins-Regular'
  }
});
