import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

type authContextType = {
  user?: any;
};

export const AuthContext = createContext<authContextType>({ user: false });

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState();

  function onAuthStateChanged(userCurrent: any) {
    setUser(userCurrent);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
