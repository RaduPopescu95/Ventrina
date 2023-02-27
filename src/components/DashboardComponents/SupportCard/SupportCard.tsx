import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Card from 'src/components/DashboardComponents/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './SupportCard.style';
import colors from 'src/data/colors';

const SupportCard = () => {
  return (
    <Card
      icon={
        <Feather name="headphones" size={28} color={colors.light.newText} />
      }
      title="Customer support">
      <View style={styles.helpPerson}>
        <Image
          source={{
            uri: 'https://pixabay.com/get/g97b0e78ff6eb240340d432a0a5d4b47aaadef55dfaafc15d7a7d0935ce08297a6c0b6fe7e652174e863f10f2a768cfb7167afa62cadff6d81b8c7b9c9fe9fe0f6ae49377d058ff00e5e6f380eabcc1aa_1920.jpg',
          }}
          style={styles.avatar}
        />
        <Text>Simone is here to help you</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Contact us</Text>
      </TouchableOpacity>
    </Card>
  );
};

export default SupportCard;
