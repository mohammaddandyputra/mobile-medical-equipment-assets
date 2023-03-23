import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import {
  IconAccount,
  IconAccountActive,
  IconHome,
  IconHomeActive,
  IconScan,
  IconScanActive,
} from "../../../assets/icons";
import { PRIMARY_COLOR, DISABLE_COLOR } from "../../utils/constant";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === "Home") {
      return (
        <Image
          source={isFocused ? IconHomeActive : IconHome}
          style={styles.icon}
        />
      );
    }

    if (label === "Scan") {
      return (
        <Image
          source={isFocused ? IconScanActive : IconScan}
          style={styles.icon}
        />
      );
    }

    if (label === "Account") {
      return (
        <Image
          source={isFocused ? IconAccountActive : IconAccount}
          style={styles.icon}
        />
      );
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  text: (isFocused) => ({
    fontSize: 13.5,
    color: isFocused ? PRIMARY_COLOR : DISABLE_COLOR,
    marginTop: 8,
  }),
  icon: {
    width: 25,
    height: 25,
  },
});
