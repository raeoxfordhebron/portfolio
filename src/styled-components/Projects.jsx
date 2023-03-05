import theme from "../json/theme.json"
import styled from "styled-components"

export const ProjectsContainer = styled.section`
display: flex;
flex-wrap: wrap;
padding: 10%;
justify-content: space-around;
background-color: ${theme.color2}
`

export const ProjectCard = styled.div`
width: 30%;
min-width: 290px;
text-align: center;
margin: 10px;
border: 3px solid ${theme.color5};
background-color: ${theme.color4};
border-radius: 20px;
color: white;
`

export const ProjectImage = styled.img`
width: 250px;
border-radius: 40px;
`

export const ProjectLink = styled.a`
width: 40%;
padding: 6px;
font-weight: 800;
background-color: ${theme.color5};
color: white;
margin: 6px;
font-size: 1.1em;
border-radius: 20px;
&:hover{
    background-color: ${theme.color3};
    color: ${theme.color5}
}
`
export const ProjectLinkContainer = styled.div`
display: flex;
margin: auto;
justify-content: center;
`


export const ProjectDescription = styled.p`
`