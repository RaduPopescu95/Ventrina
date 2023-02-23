import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './SupportBtn.style';
import colors from 'src/data/colors';

const SupportBtn = () => {
  return (
    <TouchableOpacity style={styles.support}>
      <Icon
        name="headphones"
        size={30}
        color={colors.light.newText}
        style={styles.icon}
      />
      <Text style={styles.supportText}>Support</Text>
    </TouchableOpacity>
  );
};

export default SupportBtn;
