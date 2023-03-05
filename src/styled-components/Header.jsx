import styled from "styled-components"
import theme from "../json/theme.json"

export const HeaderContainer = styled.header`
padding: 6px;
text-align: center;
background-color: ${theme.color4};
color: white;
border-radius: 10px;
`

export const NavContainer = styled.nav`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
border-radius: 10px;
`

export const NavLinkWrapper = styled.nav`
text-decoration: none;
color: white;
&:hover {
    color: ${theme.color1};
    font-weight: 800;
}
`

export const NavLink = styled.div`
cursor: pointer;
`