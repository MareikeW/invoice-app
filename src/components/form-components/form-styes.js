import styled from "styled-components";

export const PageBody = styled.body`
    background-color: #FFFFFF;
`

export const FormContainer = styled.div`
    color: #7E88C3;
    margin: 24px;
    
    width: 327px;

    h1 {
        margin-left: 24px;
    }

    h3 {
        margin-bottom: 24px;
        margin-top: 66px;
    }  
`

export const FormAllFieldsContainer = styled.div`
    margin-left: 24px;
`

export const FieldsetTitle = styled.p`
    color: #7C5DFA;
    font-weight: bold;
    margin-top: 24px;
`
export const LongInputField = styled.input`
    width: 327px;
    margin-top: 10px;
`

export const ShortInputField = styled(LongInputField)`
    width: 152px;
`
export const QuantityInputField = styled(LongInputField)`
    width: 64px;
`

export const PriceInputField = styled(LongInputField)`
    width: 100px;
`

export const ItemTotalField = styled(LongInputField)`
    width: 60px;
    padding: 0;
    border: none;
    background-color: #F8F8FB;
    color: #888EB0;
`

export const FormFieldContainer = styled.div`
    margin-top: 24px;

    div {
        height: 73px;
        width: 327px;
        position: relative;
        
        .cityLabel,
        .quantityLabel {
            position: absolute;
            top: 0;
        }

        .cityInput,
        .quantityInput,
        .postCodeInput,
        .priceInput,
        .itemTotalInput {
            position: absolute;
            top: 10px;
        }

        .postCodeLabel,
        .postCodeInput {
            position: absolute;
            left: 176px;
        }

        .priceLabel,
        .priceInput {
            position: absolute;
            left: 80px;
        }

        .itemTotalLabel,
        .itemTotalInput {
            position: absolute;
            left: 196px;
        }

        .deleteItem {
            position: absolute;
            right: 5px;
            bottom: 16px;
        }
    }
`

export const NewItemButton = styled.button`
    width: 327px;
    background-color: #F9FAFE;
    color: #7E88C3;
    text-transform: capitalize;
    margin-top: 48px;
    margin-bottom: 88px;
`