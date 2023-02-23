import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Divider from './components/Divider/Divider';
import FormHeader from './components/FormHeader/FormHeader';
import ExtraOptions from './components/ExtraOptions/ExtraOptions';
import Support from './components/Support/Support';
import { FormTemplateProps } from './formTemplateTypes';
import { styles } from './CustomForm.style';

const FormTemplate = (props: FormTemplateProps) => {
  const {
    navigation,
    children,
    submitText,
    submitAction,
    divider,
    footer1,
    footer2,
    footerLink,
    extraOptions,
    title,
    subtitle,
    footerAction,
  } = props;

  return (
    <>
      <FormHeader title={title} subtitle={subtitle} />
      {children}
      {submitAction && (
        <TouchableOpacity style={styles.submit} onPress={submitAction}>
          <Text style={styles.submitText}>{submitText}</Text>
        </TouchableOpacity>
      )}
      {divider && <Divider />}
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
      <Support />
    </>
  );
};

export default FormTemplate;
