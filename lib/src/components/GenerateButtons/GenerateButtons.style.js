export function buttonContainer(modalHeight, generateButtons) {
  return {
    flex: 1,
    right: 8,
    alignSelf: "flex-end",
    bottom: (modalHeight && modalHeight * 0.2) || 16,
    width: (generateButtons && 50 * generateButtons.length) || 150
  };
}
