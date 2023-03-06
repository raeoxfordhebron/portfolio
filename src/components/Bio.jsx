import about from "../json/about.json"
import { BioContainer, BioImage, BioDescripton } from "../styled-components/Bio"

export default function Bio (props) {
    return <BioContainer>
        <h1>{about.name}</h1>
        <BioImage src={about.img}/>
        <BioDescripton>{about.bio}</BioDescripton>
    </BioContainer>
}