import React, { useRef, useState, useLayoutEffect } from 'react';
import {
  ActivityIndicator,
  DrawerLayoutAndroid,
  StyleSheet,
  View,
} from 'react-native';
import DrawerTabs from '../../components/DrawerTabs/DrawerTabs';
import Orders from './Orders';
import { statusList } from 'src/data/data';
import useUserMockup from 'src/hooks/useUsersMockup';

const getRandomStatus = () => {
  let randNum = Math.floor(Math.random() * 3);
  return statusList[randNum];
};

const ordersStatus = () => {
  const array = [];
  for (let i = 0; i <= 30; ++i) {
    array.push(getRandomStatus());
  }
  return array;
};

const allOrdersStatus = ordersStatus();

export type User = {
  id: number;
  password: string;
  firstName: string;
  lastName: string;
  status: string;
};

const OrderDrawer = ({ navigation }: any) => {
  const { data, user, isLoading, setUser, setData } = useUserMockup();
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [header, setHeader] = useState(false);

  const handleAllCheckbox = () => {
    setToggleCheckBox(prevState => !prevState);
  };
  const openDrawer = () => {
    drawer.current?.openDrawer();
    setHeader(true);
  };
  const closeDrawer = () => {
    drawer.current?.closeDrawer();
    setHeader(false);
  };
  const handleUser = (id: number) => {
    const userFound = data.find((x: any) => x.id === id);
    setUser(userFound);
  };

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: header ? false : true });
  }, [header, navigation]);

  return (
    <>
      {isLoading ? (
        <View style={{ ...styles.container, ...styles.activityViewContainer }}>
          <ActivityIndicator size={100} />
        </View>
      ) : (
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={400}
          drawerPosition="right"
          renderNavigationView={() => (
            <DrawerTabs
              closeDrawer={closeDrawer}
              navigation={navigation}
              user={user}
            />
          )}>
          <Orders
            data={data}
            allStatus={allOrdersStatus}
            handleUser={handleUser}
            handleAllCheckbox={handleAllCheckbox}
            toggleCheckBox={toggleCheckBox}
            openDrawer={openDrawer}
            setData={setData}
          />
        </DrawerLayoutAndroid>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OrderDrawer;
