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

export const StyledDiscardBtn = styled(StyledEditBtn)`
    width: 84px;
`

export const StyledDeleteBtn = styled.button`
    width: 89px;
    background-color: #EC5757;
    color: #FFFFFF;

    &:hover {
        background-color: #FF9797;
    }
`

export const StyledDraftBtn = styled.button`
    width: 117px;
    background-color: #373B53;
    color: #888EB0;
`

export const StyledMarkAsPaidBtn = styled.button`
    width: 131px;
    background-color: #7C5DFA;
    color: #FFFFFF;

    &:hover {
        background-color: #9277FF;
    }
`

export const StyledSaveSendBtn = styled(StyledMarkAsPaidBtn)`
    width: 112px;
`

export const SaveChangesBtn = styled(StyledMarkAsPaidBtn)`
    width: 138px;
`

export const SaveChangesBtnContainer = styled.div`
    text-align: right;
    margin: 24px;
    margin-bottom: 0;
    padding-bottom: 24px;
    width: 327px;

    @media (min-width: 720px) {
        margin: 0;
        width: 502px;
    }
`

export const DiscardDraftSaveContainer = styled(SaveChangesBtnContainer)`
    text-align: unset;
    display: flex;
    justify-content: space-between;

    @media (min-width: 720px) {
        position: relative;

        .saveAsDraft {
            position: absolute;
            right: 120px;
        }
    } 
`