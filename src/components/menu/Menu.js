import React from "react";
import {Link} from "react-router-dom";
import {MenuContainer, NumInvoices, FilterButton, 
    FilterOptions, FilterOption, FilterCheckbox, StyledCheckbox, 
    AddInvoiceButton, PlusSign} from "./menu-styles.js";
import {ReactComponent as Arrow} from "../../icons/icon-arrow-down.svg";
import {ReactComponent as Plus} from "../../icons/icon-plus.svg";
const Menu = ({amountsOfInvoices}) => {
    return (
        <MenuContainer>
            <div>
                <h2>Invoices</h2>
                <NumInvoices>{amountsOfInvoices} invoices</NumInvoices>
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
            
            <Link to="/create-invoice"><AddInvoiceButton><PlusSign><Plus style={{position: "absolute", top: "10px", left: "10px"}}/></PlusSign> New</AddInvoiceButton></Link>
        </MenuContainer>
    )
}

export default Menu;