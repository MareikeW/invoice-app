import React from "react";
import { StyledQuantityInputField } from "./form-styes";

const QuantityInputField = ({ labelClass, label, inputClass, type, min, name, value, functionName }) => {
    return (
        <>
            <label className={labelClass}>{label}</label>
            <StyledQuantityInputField className={inputClass} type={type} min={min} name={name} value={value} onChange={functionName} />
        </>
    )
}

export default QuantityInputField;