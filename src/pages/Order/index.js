import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyOrder, Header, OrderTabSection } from '../../components';
import { getOrders } from '../../redux/action';

const Order = () => {
  const dispatch = useDispatch();
  const {orders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log('list orders', orders);
  return (
    <View style={{flex: 1}}>
      {orders.length < 1 ? (
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
