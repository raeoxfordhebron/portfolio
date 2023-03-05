import about from "../json/about.json"
import { HeaderContainer, NavContainer, NavLinkWrapper, NavLink } from "../styled-components/Header"

export default function Header (props) {
    return <HeaderContainer>
        <h1>Welcome!</h1>
        <NavContainer>
            <NavLinkWrapper href="https://github.com/raeoxfordhebron">
                <NavLink>Github</NavLink>
            </NavLinkWrapper>
            <NavLinkWrapper href="https://www.linkedin.com/in/rae-hebron/">
                <NavLink>LinkedIn</NavLink>
            </NavLinkWrapper>
        </NavContainer>
    </HeaderContainer>
}