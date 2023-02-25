import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';
import CustomForm from 'src/components/FormTemplate/CustomForm';
import { styles } from './Login.style';
import CompanyNameTitle from 'src/components/Header/CompanyName/CompanyNameTitle';
import Header from 'src/components/Header/Header/Header';
import { handleLogin } from 'src/utils/auth/handleLogin';

type LoginProps = {
  navigation: any;
};

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigation } = props;

  const handleEmail = (event: any) => {
    setEmail(event.nativeEvent.text);
  };

  const handlePassword = (event: any) => {
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
          handleSubmit={() => handleLogin(email, password)}
          isDivider={true}
          isSignInOptions={true}
          footer1="Did you forget your password?"
          footer2="Don't you have an account?"
          footerLink="Sign up now"
          footerNavigate={() => navigation.navigate('SignUp')}>
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
