import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './CustomDivider.style';

const CustomDivider = () => {
  return (
    <View style={styles.separator}>
      <View style={[styles.divider, styles.dividerMarginR]} />
      <Text>OR</Text>
      <View style={[styles.divider, styles.dividerMarginL]} />
    </View>
  );
};

export default CustomDivider;
