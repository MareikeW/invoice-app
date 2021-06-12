import React from "react";
import { StyledLongInputField } from "./form-styes";

const LongInputField = ({ labelClass, label, inputClass, type, name, value, functionName }) => {
    return (
        <>
            <label className={labelClass}>{label}</label>
            <StyledLongInputField className={inputClass} type={type} name={name} value={value} onChange={functionName} required/>
        </>
    )
}

export default LongInputField;