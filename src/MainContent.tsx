import Entry from "./Entry";

function MainContent(): JSX.Element {
    return (
        <>
            <Entry 
                title={"Pembroke Hall"}
                name={"Pembroke College, University of Oxford"}
                country={"England, UK"}
                image={}
                map={}
                description={""}
            />
            <Entry 
                title={"Ufford Park 5th Tee"}
                name={"Ufford Park Golf Club, Suffolk"}
                country={"England, UK"}
                image={}
                map={}
                description={"I have played a countless number of rounds at this golf club"}
            />
            <Entry 
                title={"Ipswich Town's Stadium"}
                name={"Portman Road, Ipswich"}
                country={"Engand, UK"}
                image={}
                map={}
                description={"The stadium of the team I support, Ipswich Town (soon to be promoted to the Championship...)"}
            />
            <Entry 
                title={"An enjoyable holiday in Italy"}
                name={"Nora, Sardinia"}
                country={"Italy"}
                image={}
                map={}
                description={"Roman ruins, with an added fort in the back"}
            />
        </>
    )
}

export default MainContent;