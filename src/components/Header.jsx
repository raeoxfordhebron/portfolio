import about from "../json/about.json"
import { HeaderContainer, NavContainer, NavLinkWrapper } from "../styled-components/Header"

export default function Header (props) {
    return <HeaderContainer>
        <h1>My Portfolio</h1>
        <NavContainer>
            <NavLinkWrapper href="">
                <div>Github</div>
            </NavLinkWrapper>
            <NavLinkWrapper href="">
                <div>LinkedIn</div>
            </NavLinkWrapper>
        </NavContainer>
    </HeaderContainer>
}