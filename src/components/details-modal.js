// @flow

import * as React from 'react';
import Modal from 'react-modal';

type Props = {
  handleClose: () => void,
  isOpen: boolean
};

class DetailsModal extends React.Component<Props> {
  render(): React.Node {
    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={this.props.handleClose}>
      </Modal>
    );
  }
}

export default DetailsModal;