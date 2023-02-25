import React, { useState } from 'react';
import Header from 'src/components/Header/Header/Header';
import CompanyNameTitle from 'src/components/Header/CompanyName/CompanyNameTitle';
import CustomForm from 'src/components/FormTemplate/CustomForm';
import { TextInput, View } from 'react-native';
import { styles } from './ResetPassword.style';
import { handleResetPass } from 'src/utils/auth/handleResetPass';

type RestPassProps = {
  navigation: any;
};

const ResetPassword = (props: RestPassProps) => {
  const [email, setEmail] = useState('');
  const { navigation } = props;

  const handleEmail = (event: any) => {
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
          handleSubmit={() => handleResetPass(email, navigation)}
          isDivider={false}
          isSignInOptions={false}
          footer1="Do you have an account?"
          footerLink="Sign in now"
          footerNavigate={() => navigation.navigate('Login')}>
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
