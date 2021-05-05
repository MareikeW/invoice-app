import styled from "styled-components";

export const PageBody = styled.body`
    background-color: #FFFFFF;

    .goBackButton {
        margin-left: 52px;
    }
`

export const FormContainer = styled.div`
    color: #7E88C3;
    margin: 0 auto;
    
    width: 327px;

    h1 {
        margin-left: 24px;
    }

    h3 {
        margin-bottom: 24px;
        margin-top: 66px;
        color: #777F98;
    }  

    @media (min-width: 720px) {
        width: 504px;

        h1 {
            margin-left: 0;
        }
        
        h3 {
            margin-bottom: 16px;
            margin-top: 24px;
        }
    }
`

export const FormAllFieldsContainer = styled.div`
    margin-left: 24px;

    @media (min-width: 720px) {
        margin-left: 0;
    }
`

export const BillFromContainer = styled.div`
    @media (min-width: 720px) {
        position: relative;

        .countryInput {
            width: 152px;
            position: absolute;
            right: 0;
            top: 151px;
        } 

        .countryLabel {
            position: absolute;
            top: 140px;
            right: 102px;
        }
    }
`

export const BillToContainer = styled(BillFromContainer)`
    @media (min-width: 720px) {
        .countryInput {
            top: 350px;
        } 

        .countryLabel {
            top: 340px;
        }
    }
`

export const FormDatePaymentTermsContainer = styled(BillFromContainer)`
    @media (min-width: 720px) {
        height: 73px; 

        .invoiceDateLabel {
            position: absolute;
        }

        .invoiceDateInput {
            width: 240px;
            position: absolute;
            top: 12px;
        }

        .paymentTermsLabel {
            position: absolute;
            right: 145px;
        }

        .paymentTermsSelect {
            width: 240px;
            position: absolute;
            right: 0;
            top: 12px;
        }
    }
`

export const ItemListContainer = styled(BillFromContainer)`
    @media (min-width: 720px) {
        height: 211px;
        width: 504px;

        .itemInputLabel {
            position: absolute;
            top: 45px;
        }

        .itemNameInput {
            width: 214px;
            position: absolute;
            left: 0;
            top: 58px;
        }

        .itemInfo {
            position: absolute;
            right: 0;
            width: 256px;
        }
    }
`

export const FieldsetTitle = styled.p`
    color: #7C5DFA;
    font-weight: bold;
    margin-top: 24px;

    @media (min-width: 720px) {
        margin-top: 48px;
    }
`
export const LongInputField = styled.input`
    width: 327px;
    margin-top: 10px;

    @media (min-width: 720px) {
        width: 504px;    
    }
`

export const ShortInputField = styled(LongInputField)`
    width: 152px;
`

export const QuantityInputField = styled(LongInputField)`
    width: 64px;
    padding-right: 0;
`

export const PriceInputField = styled(LongInputField)`
    width: 100px;
`

export const ItemTotalField = styled(LongInputField)`
    width: 60px;
    padding: 0;
    cursor: unset;
    color: #888EB0;
    border: none; 
`

export const FormFieldContainer = styled.div`
    margin-top: 24px;

    select {
        margin-top: 10px;
        width: 327px;
        padding: 0;
        padding-left: 20px;
    }

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

        .itemTotalInput:focus {
            outline: none !important;
            outline-offset: none !important;
        }
    }

    
`