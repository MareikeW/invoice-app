import React from "react";
import { StyledShortInputField } from "./form-styes";

const ShortInputField = ({ labelClass, label, inputClass, type, name, value, functionName }) => {
    return (
        <>
            <label className={labelClass}>{label}</label>
            <StyledShortInputField className={inputClass} type={type} name={name} value={value} onChange={functionName} required/>
        </>
    )
}

export default ShortInputField;