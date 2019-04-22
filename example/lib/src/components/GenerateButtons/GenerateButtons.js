import React from "react";
import { View } from "react-native";
import { Grid, Col } from "react-native-easy-grid";
import FloatingActionButton from "react-native-floating-action-button";
import MyIcon from "react-native-custom-icon";
// Styles
import { buttonContainer } from "./GenerateButtons.style";
import colors from "../styles/colors";

const GenerateButtons = props => {
  const { modalHeight, generateButtons, customIconConfig } = props.data;
  return (
    <View style={buttonContainer(modalHeight, generateButtons)}>
      <Grid>
        {generateButtons.map((item, index) => (
          <Col key={item.name}>
            {item.customIcon ? (
              <FloatingActionButton
                size={40}
                textDisable
                textColor={item.color}
                onPress={item.onPress}
                shadowColor={item.color}
                iconComponent={
                  <MyIcon
                    name={item.icon}
                    size={item.size}
                    config={customIconConfig}
                    color={item.color || colors.theme.light.primaryDark}
                  />
                }
                iconColor={item.color || colors.theme.light.primary}
                rippleColor={item.color || colors.theme.light.primary}
              />
            ) : (
              <FloatingActionButton
                size={40}
                textDisable
                iconSize={20}
                iconName={item.icon}
                iconType={item.type}
                onPress={item.onPress}
                textColor={item.color}
                shadowColor={item.color}
                iconColor={item.color || colors.theme.light.primary}
                rippleColor={item.color || colors.theme.light.primary}
              />
            )}
          </Col>
        ))}
      </Grid>
    </View>
  );
};

export default GenerateButtons;
