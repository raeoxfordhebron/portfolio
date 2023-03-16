import about from "../json/about.json"
import { HeaderContainer, NavContainer, NavLinkWrapper, NavLink } from "../styled-components/Header"
import resume from "../assets/ATS_Resume.pdf"


export default function Header (props) {
    return <HeaderContainer>
        <NavContainer>
            <NavLinkWrapper href="https://github.com/raeoxfordhebron" target="_blank" rel="noreferrer noopener">
                <NavLink>Github</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper href="https://www.linkedin.com/in/rae-hebron/" target="_blank" rel="noreferrer noopener">
                <NavLink>LinkedIn</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper href="mailto:rae.oxford.hebron@gmail.com" target="_blank" rel="noreferrer noopener">
                <NavLink>E-Mail</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper href={resume} target="_blank" rel="noreferrer noopener">
                <NavLink>Resume</NavLink>
            </NavLinkWrapper>
        </NavContainer>
    </HeaderContainer>
}