import React from "react";
import {StyledHeader, LogoContainer, ImageContainer, ProfileAvatar} from "./header-styles";
import {ReactComponent as Logo} from "../../icons/logo.svg";
import profileAvatar from "../../icons/image-avatar.jpg";

const Header = () => {
    return (
        <StyledHeader>
            <LogoContainer>
                <Logo style={{marginRight: "5px"}}/>
            </LogoContainer>
                <ImageContainer>
                    <ProfileAvatar src={profileAvatar} alt="profile avatar" />
                </ImageContainer>
        </StyledHeader>
    )
}

export default Header;