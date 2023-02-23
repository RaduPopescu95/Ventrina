import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import CustomDivider from './components/CustomDivider/CustomDivider';
import HeaderForm from './components/HeaderForm/HeaderForm';
import ExtraOptions from './components/ExtraOptions/ExtraOptions';
import SupportBtn from './components/SupportBtn/SupportBtn';
import { styles } from './CustomForm.style';

type CustomFormProps = {
  navigation: any;
  children: React.ReactNode;
  title: string;
  subtitle: string;
  submitText: string;
  divider: boolean;
  extraOptions: boolean;
  footer1: string;
  footer2?: string;
  footerLink: string;
  submitAction: any;
  footerAction: any;
};

const CustomForm = (props: CustomFormProps) => {
  const {
    navigation,
    children,
    submitText,
    divider,
    footer1,
    footer2,
    footerLink,
    extraOptions,
    title,
    subtitle,
    footerAction,
    submitAction,
  } = props;

  return (
    <>
      <HeaderForm title={title} subtitle={subtitle} />
      {children}
      {submitAction && (
        <TouchableOpacity style={styles.submit} onPress={submitAction}>
          <Text style={styles.submitText}>{submitText}</Text>
        </TouchableOpacity>
      )}
      {divider && <CustomDivider />}
      {extraOptions && <ExtraOptions />}
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
          <TouchableOpacity onPress={footerAction}>
            <Text style={styles.redirect}>{footerLink}</Text>
          </TouchableOpacity>
        </View>
      )}
      <SupportBtn />
    </>
  );
};

export default CustomForm;
