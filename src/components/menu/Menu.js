import React from "react";
import {MenuContainer, NumInvoices, FilterButton, 
    FilterOptions, FilterOption, FilterCheckbox, StyledCheckbox, 
    AddInvoiceButton, PlusSign} from "./menu-styles.js";
import {ReactComponent as Arrow} from "../../icons/icon-arrow-down.svg";
import {ReactComponent as Plus} from "../../icons/icon-plus.svg";
function Menu(props) {
    return (
        <MenuContainer>
            <div>
                <h2>Invoices</h2>
                <NumInvoices>{props.amountsOfInvoices} invoices</NumInvoices>
            </div>

            <div>
                <FilterButton>Filter
                <Arrow />
                </FilterButton>
                <FilterOptions>
                    <FilterOption>Draft
                        <FilterCheckbox type="checkbox" />
                        <StyledCheckbox></StyledCheckbox>
                    </FilterOption>
                    <FilterOption>Pending
                        <FilterCheckbox type="checkbox" />
                        <StyledCheckbox></StyledCheckbox>
                    </FilterOption>
                    <FilterOption>Paid
                        <FilterCheckbox type="checkbox" />
                        <StyledCheckbox></StyledCheckbox>
                    </FilterOption>
                </FilterOptions>    
            </div>
            
            <AddInvoiceButton><PlusSign><Plus style={{position: "absolute", top: "10px", left: "10px"}}/></PlusSign> New</AddInvoiceButton>
        </MenuContainer>
    )
}

export default Menu;