import skills from "../json/skills.json"
import { SkillContainer, Container, SkillImage, SkillTitle } from "../styled-components/Skills"

export default function Skills (props) {
    return <div>
    <SkillContainer>
        {skills.map((skill) => {
            return <>
            <Container>
            <SkillImage src={skill.image}/>
            <SkillTitle>{skill.name}</SkillTitle>
            </Container>
            </>
        })}
    </SkillContainer>
    </div>
    
}