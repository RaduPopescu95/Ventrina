import { StyleSheet } from 'react-native';
import colors from 'src/data/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {},
  body: {
    flex: 9,
    width: '100%',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: colors.light.white,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.light.grey,
    borderRadius: 8,
    height: 48,
    padding: 10,
    marginTop: 10,
  },
});
