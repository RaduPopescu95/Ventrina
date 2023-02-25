import { StyleSheet } from 'react-native';
import colors from 'src/data/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    borderRadius: 0,
  },
  navigationContainer: {
    backgroundColor: colors.light.darkBlue,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
