import React, { useState } from 'react';
import CustomForm from 'src/components/FormTemplate/CustomForm';
import CompanyNameTitle from 'src/components/Header/CompanyName/CompanyNameTitle';
import Header from 'src/components/Header/Header/Header';
import { TextInput, View } from 'react-native';
import { styles } from './SignUp.style';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { handleSignup } from 'src/api/auth/handleSignup';

type SignUpProps = {
  navigation: any;
};

const SignUp = (props: SignUpProps): JSX.Element => {
  const [nameSurname, setNameSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigation } = props;

  const handleshopName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setNameSurname(event.nativeEvent.text);
  };

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
    <View style={styles.container}>
      <Header navigation={navigation}>
        <CompanyNameTitle />
      </Header>
      <View style={styles.body}>
        <CustomForm
          navigation={navigation}
          title="Create your e-commerce"
          subtitle="Try Vetrina Live for free in the next 7 days. Open a shop in few minutes! No credit card required."
          submitText="Create your shop"
          submitAction={() => handleSignup(nameSurname, email, password)}
          divider={true}
          extraOptions={true}
          footer1="Do you have an account?"
          footerLink="Sign in now"
          footerAction={() => navigation.navigate('Login')}>
          <TextInput
            style={styles.textInput}
            placeholder="Name and Surname"
            value={nameSurname}
            onChange={handleshopName}
          />
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

export default SignUp;
