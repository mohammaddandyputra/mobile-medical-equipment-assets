import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import {
  IconMedicalEquipment,
  IconBuilding,
  IconComplain,
  IconRepair,
  IconRoom,
  IconUser,
} from "../../../assets";
import { PRIMARY_COLOR } from "../../utils/constant";

const ButtonIcon = ({ title, slug, type }) => {
  const Icon = () => {
    if (slug === "medical_equipment") {
      return <Image source={IconMedicalEquipment} style={styles.icon} />;
    }

    if (slug === "building") {
      return <Image source={IconBuilding} style={styles.icon} />;
    }

    if (slug === "room") {
      return <Image source={IconRoom} style={styles.icon} />;
    }

    if (slug === "complain") {
      return <Image source={IconComplain} style={styles.icon} />;
    }

    if (slug === "repair") {
      return <Image source={IconRepair} style={styles.icon} />;
    }

    if (slug === "user_management") {
      return <Image source={IconUser} style={styles.icon} />;
    }
  };

  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={{ width: 75 }}>
        <View style={styles.button(type)}>
          <Icon />
        </View>
        <Text style={styles.text(type)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: (type) => ({
    marginBottom: type === "layanan" ? 12 : 0,
    marginRight: type === "layanan" ? 30 : 0,
  }),
  button: (type) => ({
    backgroundColor: PRIMARY_COLOR,
    padding: type === "layanan" ? 12 : 7,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: type === "layanan" ? 14 : 10,
    textAlign: "center",
    color: "black",
  }),
  icon: {
    width: 50,
    height: 50,
  },
});
