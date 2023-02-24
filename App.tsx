import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, useColorScheme } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
