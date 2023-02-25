import { StyleSheet } from 'react-native';
import colors from 'src/data/colors';

export const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  viewBody: {
    flex: 9,
    width: '100%',
    paddingTop: 10,
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
