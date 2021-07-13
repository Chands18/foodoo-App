import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Food4} from '../../assets';
import {Header, ItemValue, ListFoods, Button, Gap} from '../../components';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subtitle="You deserve a better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ListFoods
          type="order-summary"
          name="Tongseng"
          price="50.000"
          items={20}
          image={Food4}
          items={20}
        />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label="Cherry Waffle" value="IDR 50.000" />
        <ItemValue label="Driver" value="IDR 12.000" />
        <ItemValue label="Tax 10%" value="IDR 10.000" />
        <ItemValue
          label="Total Price"
          value="IDR 100.000"
          valueColor="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver To:</Text>
        <ItemValue label="Name" value="Faridz Kurnia" />
        <ItemValue label="Phone No." value="0897 5392 28495" />
        <ItemValue label="Address" value="Radio Dalam" />
        <ItemValue label="House No." value="8b" />
        <ItemValue label="City" value="Jakarta" />
      </View>
      <View style={styles.button}>
        <Button
          text="Checkout Now"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
      <Gap height={40}/>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
