interface EntryStructure {
    title: string;
    name: string;
    country: string;
    image: URL;
    map: URL;
    description: string;
}

function Entry(props: EntryStructure): JSX.Element {
    return (
        <>
            <h1>{props.title}</h1>
            <h3>{props.name}</h3>
            <h3>{props.country}</h3>
            <img src="{props.image}" alt="A photo of {props.name}" />
            <a href="{props.map}">Map Link</a>
            <p>{props.description}</p>
        </>
    )
}

export default Entry;