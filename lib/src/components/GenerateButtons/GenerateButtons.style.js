export function buttonContainer(modalHeight, generateButtons) {
  return {
    flex: 1,
    right: 8,
    elevation: 5,
    alignSelf: "flex-end",
    bottom: (modalHeight && modalHeight * 0.2) || 20,
    width: (generateButtons && 50 * generateButtons.length) || 150
  };
}
