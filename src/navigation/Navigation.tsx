import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';
import RootNavigator from './RootNavigator';

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
