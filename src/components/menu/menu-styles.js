import styled from "styled-components";

export const MenuContainer = styled.div`
    height: 44px;
    max-width: 327px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;
    margin-left: 24px;
    margin-right: 24px;
`

export const NumInvoices = styled.p`
    color: #888EB0;
`

export const FilterButton = styled.button`
    border: none;
    background-color: unset;
    width: 54px;
    height: 15px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    position: relative;
`

export const FilterOptions = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 88px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    position: absolute;
    top: 88px;
    padding-left: 10px;
    padding-top: 10px;
    z-index: 1;
`

export const FilterOption = styled.label`
    height: 16px;
    font-weight: 700;
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
`

export const FilterCheckbox = styled.input`
    left: 0;
    position: absolute;
    height: 18px;
    width: 18px;
`

export const StyledCheckbox = styled.span`
    position: absolute;
    height: 16px;
    width: 16px;
    background-color: DFE3FA;
    border: 1px solid #7C5DFA;
    border-radius: 2px;
    top: 0;
    left: 0;
    cursor: pointer;
`

export const AddInvoiceButton = styled.button`
    width: 90px;
    height: 44px;
    background-color: #7C5DFA;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    position: relative;
    text-align: center;
    padding-left: 26px;
`

export const PlusSign = styled.span`
    border: 1px solid white;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: white;
    position: absolute;
    top: 6px;
    left: 6px;
`