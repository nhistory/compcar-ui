import React from "react";
import "./ComparePopUp.scss";
export default function ComparePopUp(props) {
  const { isComparePopUpOpen, onClose } = props;
  if (!isComparePopUpOpen) return null;
  return (
    <div className="overlay">
      <div className="modal--container">
        <div className="modal--header">
          <div className="modal--header--heading">Select to compare</div>
          <div
            className="modal--header--close"
            onClick={onClose}
          >
            X
          </div>
        </div>
        <div className="modal--title">MY FAVOURITE</div>
        <div className="modal--input">
          <select className="modal--input--select">
            <option style={{textAlign:"left"}}>Select Car</option>
          </select>
        </div>
        <div className="modal--button--wrapper">
          <button
            className="modal--button --cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="modal--button --select">Select</button>
        </div>
      </div>
    </div>
  );
}
