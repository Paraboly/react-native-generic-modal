import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FloatingActionButton from "react-native-floating-action-button";
import GenericModal from "./lib/src/components/GenericModal";
import colors from "./lib/src/components/styles/colors";

export default class App extends React.Component {
  buttons = [
    {
      name: "cancel",
      icon: "cancel",
      type: "material-icons",
      // customIcon: true,
      size: 35,
      color: "#C60817",
      onPress: () => {}
    },
    {
      name: "verify",
      icon: "verified-user",
      type: "material-icons",
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
        <Text>Open up App.js to start working on your app!</Text>
        <FloatingActionButton
          size={40}
          textDisable
          iconSize={20}
          iconName="cancel"
          iconType="material-icons"
          onPress={() => {}}
          shadowColor="rgba(0,0,0,0.11)"
          iconColor={colors.theme.light.primary}
          rippleColor={colors.theme.light.primary}
        />
        <GenericModal
          isOpen={true}
          backdrop
          title="Title"
          ref="testModal"
          refName="testModal"
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
