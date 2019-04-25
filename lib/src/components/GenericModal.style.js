export function modalContainer(modalWidth, modalHeight, modalBottom) {
  return {
    ...modalBottom,
    width: modalWidth,
    height: modalHeight,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
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
