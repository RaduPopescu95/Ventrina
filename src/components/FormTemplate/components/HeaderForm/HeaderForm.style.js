import { StyleSheet } from 'react-native';
import colors from 'src/data/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.light.newText,
  },
  subtitle: {
    color: colors.light.strongGrey,
    textAlign: 'center',
    marginTop: 5,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
