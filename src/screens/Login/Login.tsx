import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import CustomForm from 'src/components/FormTemplate/CustomForm';
import { styles } from './Login.style';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import CompanyNameTitle from 'src/components/Header/CompanyName/CompanyNameTitle';
import Header from 'src/components/Header/Header/Header';
import { handleLogin } from 'src/api/auth/handleLogin';

type LoginProps = {
  navigation: any;
};

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigation } = props;

  const handleEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setEmail(event.nativeEvent.text);
  };

  const handlePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setPassword(event.nativeEvent.text);
  };

  return (
    <View style={styles.viewContainer}>
      <Header>
        <CompanyNameTitle />
      </Header>
      <View style={styles.viewBody}>
        <CustomForm
          navigation={navigation}
          title="Welcome"
          subtitle="Enter your email and password to enter your account."
          submitText="Login"
          submitAction={() => handleLogin(email, password)}
          divider={true}
          extraOptions={true}
          footerText1="Did you forget your password?"
          footerText2="Don't you have an account?"
          footerLink="Sign up now"
          footerAction={() => navigation.navigate('SignUp')}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            secureTextEntry={true}
          />
        </CustomForm>
      </View>
    </View>
  );
};

export default Login;
