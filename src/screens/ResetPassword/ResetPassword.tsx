import React, { useState } from 'react';
import Header from 'src/components/Header/Header/Header';
import CompanyNameTitle from 'src/components/Header/CompanyName/CompanyNameTitle';
import CustomForm from 'src/components/FormTemplate/CustomForm';
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { styles } from './ResetPassword.style';
import { handleResetPass } from 'src/api/auth/handleResetPass';

type RestPassProps = {
  navigation: any;
};

const ResetPassword = (props: RestPassProps) => {
  const [email, setEmail] = useState('');
  const { navigation } = props;

  const handleEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setEmail(event.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation}>
        <CompanyNameTitle />
      </Header>
      <View style={styles.body}>
        <CustomForm
          navigation={navigation}
          title="Forgot Password"
          subtitle="Enter your email and you'll receive an email to recover ypur password."
          submitText="Send email"
          submitAction={() => handleResetPass(email, navigation)}
          divider={false}
          extraOptions={false}
          footer1="Do you have an account?"
          footerLink="Sign in now"
          footerAction={() => navigation.navigate('Login')}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </CustomForm>
      </View>
    </View>
  );
};

export default ResetPassword;
