import styled from "styled-components";

export const MenuContainer = styled.div`
    height: 44px;
    min-width: 327px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px auto;
    padding-left: 24px;
    padding-right: 24px;

    p {
        color: #888EB0;
    }

    @media (min-width: 700px) {
        width: 672px;
        padding: 0;
        height: 59px;
        margin-top: 56px;

        h2 {
            font-size: 32px;
        }

        p {
            margin-top: 8px;
        }
    }

    @media (min-width: 1024px) {
        width: 730px;
    }
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
    margin-left: 30px;

    @media (min-width: 700px) {
        width: 118px;
        margin-left: 150px;
    }
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
    top: 150px;
    padding-left: 10px;
    padding-top: 10px;
    z-index: 1;
    visibility: hidden;

    @media (min-width: 700px) {
        top: 180px;
        margin-left: 150px;
        width: 120px;
    }

    @media (min-width: 1024px) {
        top: 190px;
        margin-left: 120px;
        width: 192px;
        padding-left: 24px;
    }
`

export const FilterOption = styled.label`
    height: 16px;
    font-weight: 700;
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;

    @media (min-width: 700px) {
        padding-left: 30px;
    }
`

export const FilterCheckbox = styled.input`
    left: 0;
    position: absolute;
    height: 18px;
    width: 18px;
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

    @media (min-width: 700px) {
        width: 150px;
        height: 48px;
    }
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

    @media (min-width: 700px) {
        top: 8px;
        left: 8px;
    }
`

export const ZeroInvoicesContainer = styled.div`
    margin: 102px auto 0 auto; 
    width: 217px;
    height: 277px;
    text-align: center;

    p {
        color: #888EB0;
        margin-top: 24px;
    }
`