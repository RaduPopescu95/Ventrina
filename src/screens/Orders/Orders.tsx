import React from 'react';
import { StyleSheet, View } from 'react-native';
import BackgroundContainerCard from 'src/components/BackgroundContainerCard/BackgroundContainerCard';
import OrdersHeader from '../../components/OrdersComponents/OrdersHeader/OrdersHeader';
import OrdersTableRow from '../../components/OrdersComponents/OrdersTableRow/OrdersTableRow';
import OrdersTableHeader from '../../components/OrdersComponents/OrdersTableHeader/OrdersTableHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { User } from './OrderDrawer';

const Orders = ({
  data,
  allStatus,
  handleUser,
  handleAllCheckbox,
  toggleCheckBox,
  openDrawer,
  setData,
  status,
}: any) => {
  return (
    <View style={styles.container}>
      <OrdersHeader total={data.length} />
      <BackgroundContainerCard style={styles.cardStyle}>
        <OrdersTableHeader
          handleAllCheckbox={handleAllCheckbox}
          toggleCheckBox={toggleCheckBox}
        />
        <ScrollView style={styles.container}>
          {data.map((user: User) => {
            return (
              <OrdersTableRow
                key={user.password}
                orderNumber={user.id}
                handleUser={() => handleUser(user.id)}
                name={user.firstName + ' ' + user.lastName}
                state={user.status}
                openDrawer={openDrawer}
                checkValue={toggleCheckBox}
              />
            );
          })}
        </ScrollView>
      </BackgroundContainerCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    borderRadius: 0,
  },
});

export default Orders;
