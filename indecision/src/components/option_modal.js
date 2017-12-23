import React from 'react';
import Modal from 'react-modal';


const OptionModal = ({selectedOption , handleClean}) =>(
  <Modal
    isOpen={!!selectedOption}
  >
    <h3> Slected Option </h3>
    {
      selectedOption &&
      <p>{selectedOption}</p>
    }
    <button onClick={handleClean}> Okay</button>

  </Modal>
);

export default OptionModal;
