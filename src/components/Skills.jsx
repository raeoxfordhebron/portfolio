import skills from "../json/skills.json"
import { SkillContainer, Container } from "../styled-components/Skills"

export default function Skills (props) {
    return <div>
    <SkillContainer>
        {skills.map((skill) => {
            return <>
            <Container>
            <img src={skill.image}/>
            <div>{skill.name}</div>
            </Container>
            </>
        })}
    </SkillContainer>
    </div>
    
}