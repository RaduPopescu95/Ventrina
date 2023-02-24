import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './ExtraOptions.style';

const ExtraOptions = () => {
  return (
    <>
      <TouchableOpacity style={styles.extraSubmit}>
        <Image
          source={require('src/assets/images/Vector.png')}
          style={styles.img}
        />
        <Text style={styles.submitText2}> Sign in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.extraSubmit}>
        <Image
          source={require('src/assets/images/google-login.png')}
          style={styles.img}
        />
        <Text style={styles.submitText2}> Sign in with Google</Text>
      </TouchableOpacity>
    </>
  );
};

export default ExtraOptions;
