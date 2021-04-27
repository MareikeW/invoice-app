import React from "react";
import {StyledHeader, LogoContainer, ThemeImageContainer, ImageContainer, ProfileAvatar} from "./header-styles";
import {ReactComponent as Logo} from "../../icons/logo.svg";
import {ReactComponent as Moon} from "../../icons/icon-moon.svg";
import profileAvatar from "../../icons/image-avatar.jpg";

const Header = () => {
    return (
        <StyledHeader>
            <LogoContainer>
                <Logo style={{marginRight: "5px"}}/>
            </LogoContainer>
            <ThemeImageContainer>
                <Moon className="mobileVersion" style={{ marginTop: "26px", cursor: "pointer"}}/>
                <Moon className="tabletVersion" style={{ marginTop: "30px", marginRight: "30px", width: "20px"}}/>
                <ImageContainer>
                    <ProfileAvatar src={profileAvatar} alt="profile avatar" />
                </ImageContainer>
            </ThemeImageContainer>
        </StyledHeader>
    )
}

export default Header;