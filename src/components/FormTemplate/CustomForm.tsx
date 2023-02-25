import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import CustomDivider from './components/CustomDivider/CustomDivider';
import HeaderForm from './components/HeaderForm/HeaderForm';
import SignInOptions from './components/SingInOptions/SignInOptions';
import SupportBtn from './components/SupportBtn/SupportBtn';
import { styles } from './CustomForm.style';

type CustomFormProps = {
  navigation: any;
  children: React.ReactNode;
  title: string;
  subtitle: string;
  submitText: string;
  isDivider: boolean;
  isSignInOptions: boolean;
  footer1: string;
  footer2?: string;
  footerLink: string;
  handleSubmit: any;
  footerNavigate: any;
};

const CustomForm = (props: CustomFormProps) => {
  const {
    navigation,
    children,
    submitText,
    isDivider,
    footer1,
    footer2,
    footerLink,
    isSignInOptions,
    title,
    subtitle,
    footerNavigate,
    handleSubmit,
  } = props;

  return (
    <>
      <HeaderForm title={title} subtitle={subtitle} />
      {children}
      {handleSubmit && (
        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={styles.submitText}>{submitText}</Text>
        </TouchableOpacity>
      )}
      {isDivider && <CustomDivider />}
      {isSignInOptions && <SignInOptions />}
      {footer2 && (
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.resetPass}>{footer1}</Text>
        </TouchableOpacity>
      )}
      {footerLink && (
        <View style={styles.formFooter}>
          {footer2 ? (
            <Text>{footer2} </Text>
          ) : footer1 ? (
            <Text>{footer1} </Text>
          ) : null}
          <TouchableOpacity onPress={footerNavigate}>
            <Text style={styles.redirect}>{footerLink}</Text>
          </TouchableOpacity>
        </View>
      )}
      <SupportBtn />
    </>
  );
};

export default CustomForm;
