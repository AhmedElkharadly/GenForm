import React from "react";
import "./formStyle.css";

function GeniricForm(props) {
  return (
    <div >
    <h1 style={{color:"", marginBottom: "0" }}>Form Name</h1>
      <div className="formContainer">
      {props.formProps?.map((npt) => {
        return (
          <div key={npt.id} className="inpt">
            <label className={npt.lableStyle} htmlFor={npt.id}>
              {npt.lable}
            </label>
            <input
              id={npt.id}
              type={npt.type}
              placeholder={npt.placeholder}
              className={npt.inputStyle}
              style={npt.style} />
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default GeniricForm;
