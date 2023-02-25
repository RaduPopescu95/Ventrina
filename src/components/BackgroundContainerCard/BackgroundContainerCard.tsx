import React from 'react';
import { View } from 'react-native';
import { styles } from './BackgroundContainerCard.style';

const BackgroundContainerCard = ({ children, style }: any) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.mainCardView, ...style }}>{children}</View>
    </View>
  );
};

export default BackgroundContainerCard;
