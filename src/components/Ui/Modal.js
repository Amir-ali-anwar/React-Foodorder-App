import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div className={Classes.BackDrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={Classes.modal}>
      <div className={Classes.content}>{props.children}</div>
    </div>
  );
};
let portalElement= document.getElementById('overlays')
const Modal = () => {
  return(
 
  <Fragment>
    {ReactDom.createPortal(<BackDrop/>,portalElement)}
    {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
  </Fragment>
  );
};

export default Modal;
