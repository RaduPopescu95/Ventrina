import { StyleSheet } from 'react-native';
import colors from 'src/data/colors';

export const styles = StyleSheet.create({
  separator: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    borderBottomColor: colors.light.text,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '40%',
  },
});
