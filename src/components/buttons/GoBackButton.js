import React from "react";
import {StyledGoBackBtn} from "./button-styles";
import {ReactComponent as Arrow} from "../../icons/icon-arrow-left.svg";

const GoBackButton = () => {
    return (
        <StyledGoBackBtn><Arrow /> Go back</StyledGoBackBtn>
    )
}

export default GoBackButton;