import React from "react";
import { formProps } from "./formProps";
import "./formStyle.css";
// Replacing npt by Props
const GeniricForm = (props) => {
  return (<>
    <h1 style={{marginBottom:"0"}}>Form Name</h1>
    <div className="formContainer">
      {formProps?.map((npt) => {
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
              style={npt.style}
            />
          </div>
        );
      })}
    </div>
    </>);
};

export default GeniricForm;
