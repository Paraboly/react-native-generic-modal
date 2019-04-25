import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
import styles, {
  titleContainer,
  contextContainer,
  _rightTextStyle,
  _titleTextStyle,
  _contextTextStyle
} from "./ModalDesign.style";

const { width, height } = Dimensions.get("window");

const ModalDesign = props => {
  const {
    title,
    context,
    rightText,
    modalWidth,
    contextHeight,
    defaultContext,
    titleTextStyle,
    rightTextStyle,
    backgroundColor,
    titleFontFamily,
    contextTextStyle,
    contextFontFamily,
    rightTextFontFamily
  } = props.data;

  return (
    <View>
      <View style={titleContainer(backgroundColor)}>
        <Text style={titleTextStyle || _titleTextStyle(titleFontFamily)}>
          {title || ""}
        </Text>
        <Text style={rightTextStyle || _rightTextStyle(rightTextFontFamily)}>
          {rightText || ""}
        </Text>
      </View>
      <View style={contextContainer(modalWidth, contextHeight)}>
        <View style={styles.contextContainerGlue}>
          <Text
            style={contextTextStyle || _contextTextStyle(contextFontFamily)}
          >
            {context || defaultContext || ""}
          </Text>
        </View>
      </View>
    </View>
  );
};

ModalDesign.propTypes = {
  title: PropTypes.string,
  context: PropTypes.string,
  rightText: PropTypes.string,
  fontFamily: PropTypes.string,
  modalWidth: PropTypes.number,
  contextHeight: PropTypes.number,
  defaultContext: PropTypes.string,
  backgroundColor: PropTypes.string
};

ModalDesign.defaultProps = {
  modalHeight: 125,
  modalWidth: width * 0.85,
  modalBottom: { bottom: height * 0.6 }
};

export default ModalDesign;
