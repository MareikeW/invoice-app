import React from "react";
import {GoBackButtonContainer, StyledGoBackBtn} from "./button-styles";
import {ReactComponent as Arrow} from "../../icons/icon-arrow-left.svg";

const GoBackButton = () => {
    return (
        <GoBackButtonContainer>
            <StyledGoBackBtn><Arrow /> Go back</StyledGoBackBtn>
        </GoBackButtonContainer>
    )
}

export default GoBackButton;