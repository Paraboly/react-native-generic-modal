import _ from "lodash";
import React from "react";
import Modal from "@paraboly/react-native-modal-box";
import { View, Easing, Dimensions } from "react-native";
// Styles & Utils
import styles, { modalContainer } from "./GenericModal.style";
import ModalDesign from "./ModalDesign/ModalDesign";
import GenerateButtons from "./GenerateButtons/GenerateButtons";
// Device / Screen Height
const { height } = Dimensions.get("window");

class GenericModal extends React.Component {
  render() {
    const {
      isOpen,
      refName,
      backdrop,
      onOpened,
      onClosed,
      modalWidth,
      coverScreen,
      modalBottom,
      modalHeight,
      generateButtons,
      modalDesignComponent
    } = this.props;

    return (
      <Modal
        ref={refName}
        onOpened={onOpened}
        onClosed={onClosed}
        isOpen={isOpen || false}
        easing={Easing.elastic(1)}
        backdrop={backdrop || false}
        coverScreen={coverScreen || false}
        style={modalContainer(modalWidth, modalHeight, modalBottom)}
      >
        <View style={[styles.modalContent]}>
          {modalDesignComponent || <ModalDesign data={this.props} />}
          <View>
            {generateButtons && <GenerateButtons data={this.props} />}
          </View>
        </View>
      </Modal>
    );
  }
}

GenericModal.defaultProps = {
  modalBottom: { bottom: height * 0.6 }
};

export default GenericModal;