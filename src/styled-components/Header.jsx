import styled from "styled-components"
import theme from "../json/theme.json"

export const HeaderContainer = styled.header`
padding: 6px;
text-align: center;
background-color: ${theme.color4};
color: white;
`

export const NavContainer = styled.nav`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

export const NavLinkWrapper = styled.nav`
text-decoration: none;
color: white;
&:hover {
    color: ${theme.color1};
    font-weight: 800;
}
`