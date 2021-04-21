import styled from "styled-components";

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

export const ShortInputField = styled.input`
    width: 152px;
    margin-top: 10px;
`

export const FormFieldContainer = styled.div`
    margin-top: 24px;

    div {
        background-color: blue;
        position: relative;
        
        .cityLabel {
            position: absolute;
            top: 0;
        }

        .cityInput {
            position: absolute;
            top: 10px;
        }

        .postCodeLabel {
            position: absolute;
            left: 176px;
        }

        .postCodeInput {
            position: absolute;
            left: 176px;
            top: 10px;
        }
    }
`
