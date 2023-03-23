import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";

import { SplashBackground } from "../../../assets";
import ButtonIcon from "../../components/ButtonIcon";

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={SplashBackground} style={styles.background}>
        <View style={styles.feature}>
          <Text style={styles.label_feature}>Features</Text>
          <View style={styles.icon_feature}>
            <ButtonIcon
              title="Medical Equipment"
              slug="medical_equipment"
              type="layanan"
            />
            <ButtonIcon title="Building" slug="building" type="layanan" />
            <ButtonIcon title="Room" slug="room" type="layanan" />
            <ButtonIcon title="Complain" slug="complain" type="layanan" />
            <ButtonIcon title="Repair" slug="repair" type="layanan" />
            <ButtonIcon
              title="User Management"
              slug="user_management"
              type="layanan"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  background: {
    width: windowWidth,
    height: windowHeight,
  },
  feature: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label_feature: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  icon_feature: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    flexWrap: "wrap",
  },
});
