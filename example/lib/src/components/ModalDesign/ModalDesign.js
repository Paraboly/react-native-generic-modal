import React from "react";
import { Text, View } from "react-native";
import styles, {
  titleContainer,
  contextContainer,
  _rightTextStyle,
  _titleTextStyle,
  _contextTextStyle
} from "./ModalDesign.style";

// TODO: Delete comments after everything is done
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
          {/* {SharedUtils.Capitalize(selectedMarker.name) || ""} */}
        </Text>
        <Text style={rightTextStyle || _rightTextStyle}>{rightText || ""}</Text>
      </View>
      <View style={contextContainer(modalWidth, contextHeight)}>
        <Text style={contextTextStyle || _contextTextStyle}>
          {context || defaultContext || ""}
          {/* {context ||
              (selectedMarker.displayAddress ||
                "Adres şuanda güncel değildir.")} */}
        </Text>
      </View>
    </View>
  );
};

export default ModalDesign;
