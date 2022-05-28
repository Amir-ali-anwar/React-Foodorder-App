import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onClose}/>;
};
const ModalOverlay = (props) => {
  return (
    <div className={Classes.modal}>
      <div className={Classes.content}>{props.children}</div>
    </div>
  );
};
let portalElement= document.getElementById('overlays')
const Modal = (props) => {
  return(
 
  <Fragment>
    {ReactDom.createPortal(<BackDrop onClick={props.onClose}/>,portalElement)}
    {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
  </Fragment>
  );
};

export default Modal;
