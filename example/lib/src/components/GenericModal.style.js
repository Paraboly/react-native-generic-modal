import colors from "./styles/colors";

export function modalContainer(modalWidth, modalHeight, modalBottom) {
  return {
    ...modalBottom,
    width: modalWidth,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: modalHeight || 125,
    backgroundColor: "transparent"
  };
}

const styles = {
  modalContent: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    right: 8,
    elevation: 10,
    alignSelf: "flex-end"
  }
};

export default styles;
