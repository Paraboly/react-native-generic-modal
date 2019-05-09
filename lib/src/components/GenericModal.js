import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Modal from "@paraboly/react-native-modal-box";
import { View, Easing, Dimensions } from "react-native";
// Styles & Utils
import ModalDesign from "./ModalDesign/ModalDesign";
import styles, { modalContainer } from "./GenericModal.style";
import GenerateButtons from "./GenerateButtons/GenerateButtons";
// Device / Screen Height
const { height, width } = Dimensions.get("window");

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
          {modalDesignComponent || <ModalDesign {...this.props} />}
          <View>{generateButtons && <GenerateButtons {...this.props} />}</View>
        </View>
      </Modal>
    );
  }
}

GenericModal.propTypes = {
  isOpen: PropTypes.bool,
  backdrop: PropTypes.bool,
  modalWidth: PropTypes.number,
  coverScreen: PropTypes.bool,
  modalBottom: PropTypes.object,
  modalHeight: PropTypes.number
};

GenericModal.defaultProps = {
  modalHeight: 125,
  modalWidth: width * 0.85,
  modalBottom: { bottom: height * 0.6 }
};

export default GenericModal;
