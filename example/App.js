import React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import GenericModal from "@paraboly/react-native-generic-modal";
import IcomoonConfig from "./assets/selection.json";

export default class App extends React.Component {
  buttons = [
    {
      size: 28,
      name: "map",
      icon: "map",
      color: "#C60817",
      customIcon: true,
      type: "MaterialIcons",
      onPress: () => {}
    },
    {
      size: 28,
      name: "announcement",
      color: "#06CAA6",
      customIcon: true,
      icon: "announcement",
      type: "MaterialIcons",
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
          resizeMode="contain"
          style={{ width: 300, height: 100 }}
          source={require("./assets/parabol_logo.png")}
        />

        <GenericModal
          backdrop
          title="Title"
          isOpen={false}
          refName="testModal"
          context="Test Modal"
          backgroundColor="#401394"
          customIconConfig={IcomoonConfig}
          generateButtons={this.getButtons()}
          contextTextStyle={styles.contextTextStyle}
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
    color: "gray"
  }
});
