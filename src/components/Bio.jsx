import about from "../json/about.json"

export default function Bio (props) {
    return <div>
        <h1>{about.name}</h1>
        <img src={about.img}/>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
    </div>
}