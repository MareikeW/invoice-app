import React from "react";
import {ReactComponent as Arrow} from "../../icons/icon-arrow-down.svg";
import {StyledFilterButton} from "../menu/menu-styles";

const FilterButton = () => {

    const filterOptions = document.getElementById("filterOptions");
    const toggleFilterButton = (event) => {
        event.preventDefault();
        if (filterOptions.style.visibility === "visible") {
            filterOptions.style.visibility = "hidden";
        } else {
            filterOptions.style.visibility = "visible";
        }  
    }

    return (
        <div>
            <div className="mobileVersion">
                <StyledFilterButton onClick={toggleFilterButton}>Filter
                    <Arrow />
                </StyledFilterButton>
            </div>
            <div className="tabletVersion">
                <StyledFilterButton onClick={toggleFilterButton}>Filter by status
                    <Arrow />
                </StyledFilterButton>
            </div>
        </div>
    )
}

export default FilterButton;