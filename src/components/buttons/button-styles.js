import styled from "styled-components";

export const GoBackButtonContainer = styled.div`
    margin: 0 auto;
    width: 327px;

    @media (min-width: 720px) {
        width: 688px;
    }

    @media (min-width: 1024px) {
        width: 730px;
    }
`

export const StyledGoBackBtn = styled.button`
    width: 81px;
    height: 15px;
    font-family: 12px;
    background-color: unset;
    display: flex;
    justify-content: space-between;
    margin: 32px 24px;
    margin-left: 0;
`

export const StyledEditBtn = styled.button`
    width: 73px;
    background-color: #F9FAFE;
    color: #7E88C3;

    &:hover {
        background-color: #DFE3FA;
    }
`

export const StyledDeleteBtn = styled.button`
    width: 89px;
    background-color: #EC5757;
    color: #FFFFFF;

    &:hover {
        background-color: #FF9797;
    }
`

export const StyledMarkAsPaidBtn = styled.button`
    width: 131px;
    background-color: #7C5DFA;
    color: #FFFFFF;

    &:hover {
        background-color: #9277FF;
    }
`

export const StyledDiscardBtn = styled.button`
    width: 84px;
    background-color: #F9FAFE;
    color: #7E88C3;
`

export const StyledDraftBtn = styled.button`
    width: 117px;
    background-color: #373B53;
    color: #888EB0;
`

export const StyledSaveSendBtn = styled.button`
    width: 112px;
    background-color: #7C5DFA;
    color: #FFFFFF;
`