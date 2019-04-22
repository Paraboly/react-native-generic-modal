import React from "react";
import { Text, View } from "react-native";
import styles, {
  titleContainer,
  contextContainer,
  _rightTextStyle,
  _titleTextStyle,
  _contextTextStyle
} from "./ModalDesign.style";

const ModalDesign = props => {
  const {
    title,
    context,
    rightText,
    fontFamily,
    modalWidth,
    contextHeight,
    defaultContext,
    titleTextStyle,
    rightTextStyle,
    backgroundColor,
    contextTextStyle
  } = props.data;

  return (
    <View>
      <View style={titleContainer(backgroundColor)}>
        <Text style={titleTextStyle || _titleTextStyle(fontFamily)}>
          {title || ""}
        </Text>
        <Text style={rightTextStyle || _rightTextStyle}>{rightText || ""}</Text>
      </View>
      <View style={contextContainer(modalWidth, contextHeight)}>
        <View style={styles.contextContainerGlue}>
          <Text style={contextTextStyle || _contextTextStyle}>
            {context || defaultContext || ""}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ModalDesign;
