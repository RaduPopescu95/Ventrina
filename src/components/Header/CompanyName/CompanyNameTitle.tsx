import React from 'react';
import { Text } from 'react-native';
import { styles } from './CompanyNameTitle.style';

const CompanyNameTitle = () => {
  return (
    <Text>
      <Text style={styles.title}>vetrina</Text>
      <Text style={styles.subTitle}>live</Text>
    </Text>
  );
};

export default CompanyNameTitle;
