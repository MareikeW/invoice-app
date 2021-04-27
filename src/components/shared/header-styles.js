import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #373B53;
    height: 72px;
    display: flex;
    justify-content: space-between;

    @media (min-width: 675px) {
        height: 80px;
    }
`

export const LogoContainer = styled.div`
    background-color: #7C5DFA;
    border-radius: 0px 20px 20px 0px;
    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 675px) {
        height: 80px;
    }
`

export const ThemeImageContainer = styled.div`
    width: 112px;
    height: 72px;
    display: flex;
    justify-content: space-between;

    @media (min-width: 675px) {
        height: 80px;
        width: 146px;
    }
`

export const ImageContainer = styled.div`
    height: 72px;
    width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #494E6E;
    cursor: pointer;

    @media (min-width: 675px) {
        height: 80px;
        width: 96px;
    }
`

export const ProfileAvatar = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
`