import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CheckBox from '@react-native-community/checkbox';
import colors from 'src/data/colors';
import { styles } from './OrdersTableRow.style';

export const handleSelectColor = (state: string | undefined) => {
  let color = '';
  switch (state) {
    case 'Shipped':
      color = colors.light.purple;
      break;
    case 'New':
      color = colors.light.blue;
      break;
    case 'Return made':
      color = colors.light.weirdPurple;
      break;
    case 'Cancelled':
      color = colors.light.red;
      break;
    case 'In progress':
      color = colors.light.orange;
      break;
    default:
      color = colors.light.white;
  }
  return color;
};

type Props = {
  orderNumber?: number | string | undefined;
  name?: string | undefined;
  state?: string | undefined;
  style?: object | undefined;
  stateStyle?: object | undefined;
  openDrawer?: (() => void) | undefined;
  checkValue?: boolean | undefined;
  handleUser?: (id: number) => void | undefined;
};

const OrdersTableRow = ({
  orderNumber,
  name,
  state,
  style,
  stateStyle,
  openDrawer,
  checkValue,
  handleUser,
}: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() => {
    setToggleCheckBox(checkValue);
  }, [checkValue]);

  return (
    <View style={styles.row}>
      <View style={styles.box1}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(
            newValue: boolean | ((prevState: boolean) => boolean),
          ) => setToggleCheckBox(newValue)}
        />
        <Text style={style ? style : styles.column1Text}>{orderNumber}</Text>
      </View>
      <View style={styles.box2}>
        <Text style={style ? style : styles.text}>{name}</Text>
      </View>
      <View style={styles.box3}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: handleSelectColor(state),
          }}
          onPress={() => {
            handleUser(orderNumber);
            openDrawer();
          }}>
          <Text style={stateStyle ? stateStyle : styles.buttonText}>
            {state}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box4}>
        <TouchableOpacity>
          <SimpleLineIcons name="options" size={20} color={colors.light.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrdersTableRow;
