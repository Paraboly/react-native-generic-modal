import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import GenericModal from "./lib/src/components/GenericModal";
import colors from "./lib/src/components/styles/colors";

const { width } = Dimensions.get("window");

export default class App extends React.Component {
  buttons = [
    {
      name: "cancel",
      icon: "cancel",
      type: "MaterialIcons",
      // customIcon: true,
      size: 35,
      color: "#C60817",
      onPress: () => {}
    },
    {
      name: "verify",
      icon: "verified-user",
      type: "MaterialIcons",
      // customIcon: true,
      size: 35,
      color: "#06CAA6",
      onPress: () => {}
    }
  ];

  getButtons = () => {
    const { buttons } = this;
    return buttons;
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 100 }}
          resizeMode="contain"
          source={require("./assets/parabol_logo.png")}
        />
        <GenericModal
          isOpen={true}
          backdrop
          title="Title"
          ref="testModal"
          refName="testModal"
          context="Test Modal"
          generateButtons={this.getButtons()}
          contextTextStyle={styles.contextTextStyle}
          backgroundColor={colors.theme.light.default}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  contextTextStyle: {
    fontSize: 14,
    textAlign: "left",
    alignItems: "center",
    color: colors.theme.light.primaryGrey
  }
});
