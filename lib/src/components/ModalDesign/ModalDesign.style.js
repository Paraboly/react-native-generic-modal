import { Dimensions } from "react-native";
import colors from "../styles/colors";

const { width } = Dimensions.get("window");
const defaultBackgroundColor = colors.theme.light.default;

export function titleContainer(backgroundColor) {
  return {
    height: 50,
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "space-between",
    shadowOffset: { width: 3, height: 3 },
    shadowColor: colors.theme.light.shadowColor,
    backgroundColor: backgroundColor || defaultBackgroundColor
  };
}

export function contextContainer(modalWidth, contextHeight) {
  return {
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    flexDirection: "column",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: contextHeight || 55,
    width: modalWidth || width * 0.9,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: colors.theme.light.shadowColor,
    backgroundColor: colors.theme.light.primaryWhite
  };
}

export function _titleTextStyle(titleFontFamily) {
  return {
    left: 16,
    fontSize: 16,
    textAlign: "left",
    alignItems: "center",
    fontFamily: titleFontFamily,
    color: colors.theme.light.primaryWhite
  };
}

export function _contextTextStyle(contextFontFamily) {
  return {
    fontSize: 12,
    textAlign: "left",
    alignItems: "center",
    fontFamily: contextFontFamily,
    color: colors.theme.light.primaryGrey
  };
}

export function _rightTextStyle(rightTextFontFamily) {
  return {
    right: 16,
    fontSize: 16,
    color: "white",
    textAlign: "right",
    alignItems: "center",
    fontFamily: rightTextFontFamily
  };
}

export default {
  contextContainerGlue: {
    margin: 16
  }
};
