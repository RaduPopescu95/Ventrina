import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './HeaderForm.style';

type HeaderFormProps = {
  title?: string;
  subtitle?: string;
};

const HeaderForm = ({ title, subtitle }: HeaderFormProps) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default HeaderForm;
