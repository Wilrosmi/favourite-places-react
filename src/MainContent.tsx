import Entry from "./Entry";

interface EntryStructure {
    title: string;
    name: string;
    country: string;
    image: URL;
    map: URL;
    description: string;
}

function MainContent(props: EntryStructure): JSX.Element {
    return (
        <>
            <Entry />
            <Entry />
            <Entry />
            <Entry />
        </>
    )
}

export default MainContent;