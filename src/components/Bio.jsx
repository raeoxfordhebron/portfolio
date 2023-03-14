import about from "../json/about.json"
import { BioContainer, BioDescripton } from "../styled-components/Bio"

export default function Bio (props) {
    return <BioContainer>
        <BioDescripton>{about.bio}</BioDescripton>
    </BioContainer>
}