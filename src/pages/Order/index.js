import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={{flex: 1}}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subtitle="wait for the best meals" />
          <View style={styles.tabcontainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  tabcontainer: {
    flex: 1,
    marginTop: 24,
  },
});
