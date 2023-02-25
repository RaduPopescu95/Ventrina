import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ClientSection from '../../../components/OrdersComponents/ClientSection';
import PriceSection from '../../../components/OrdersComponents/PriceSection';
import ShippingSection from '../../../components/OrdersComponents/ShippingSection';
import { styles } from './OrderInfoTab.style';

const OrderInfoTab = ({ user }: any) => {
  return (
    <ScrollView style={[styles.container]}>
      <ClientSection user={user} />
      <ShippingSection user={user} />
      <PriceSection user={user} />
    </ScrollView>
  );
};

export default OrderInfoTab;
