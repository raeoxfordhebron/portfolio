import about from "../json/about.json"
import { BioImage, BioName } from "../styled-components/Title"

export default function Title (props) {
    return <>
    <BioName>{about.name}</BioName>
    <BioImage src={about.img}/>
    </>
}