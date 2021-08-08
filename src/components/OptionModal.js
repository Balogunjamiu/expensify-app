import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#app')

const OptionModal = (props)=> (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose = {props.ClearSelectedOption}
    contentLabel = "Selected Option"
    closeTimeoutMS = {2000}
    className="modal"
    >
        <h3 className="modal__title">Are you sure</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button"  onClick={props.ClearSelectedOption}>Yes</button>
        <button className="button"  onClick={props.ClearSelectedOption}>No</button>
    </Modal>
)
export default OptionModal
