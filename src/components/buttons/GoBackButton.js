import React from "react";
import {GoBackBtn} from "./button-styles";
import {ReactComponent as Arrow} from "../../icons/icon-arrow-left.svg";

function GoBackButton() {
    return (
        <GoBackBtn><Arrow /> Go back</GoBackBtn>
    )
}

export default GoBackButton;