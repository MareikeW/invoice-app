import React from "react";
import {ReactComponent as Arrow} from "../../icons/icon-arrow-down.svg";
import {StyledFilterButton} from "../menu/menu-styles";

const FilterButton = () => {

    const toggleFilterOptions = (event) => {
        if (document.getElementById("filterOptions")) {
            event.preventDefault();
            if (document.getElementById("filterOptions").style.visibility === "visible") {
                document.getElementById("filterOptions").style.visibility = "hidden";
            } else {
                document.getElementById("filterOptions").style.visibility = "visible";
            }  
        }
    }

    return (
        <div>
            <div className="mobileVersion">
                <StyledFilterButton onClick={toggleFilterOptions}>Filter
                    <Arrow />
                </StyledFilterButton>
            </div>
            <div className="tabletVersion">
                <StyledFilterButton onClick={toggleFilterOptions}>Filter by status
                    <Arrow />
                </StyledFilterButton>
            </div>
        </div>
    )
}

export default FilterButton;