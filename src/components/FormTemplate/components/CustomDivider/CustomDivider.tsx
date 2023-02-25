import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './CustomDivider.style';

const CustomDivider = () => {
  return (
    <View style={styles.separator}>
      <View style={[styles.divider, { marginRight: '5%' }]} />
      <Text>OR</Text>
      <View style={[styles.divider, { marginLeft: '5%' }]} />
    </View>
  );
};

export default CustomDivider;
