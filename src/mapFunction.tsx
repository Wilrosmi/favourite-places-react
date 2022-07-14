import Entry from "./Entry"

interface Place {
    title: string;
    name: string;
    country: string;
    image: string;
    map: string;
    description: string;
  }

function mapFunction(obj: Place): JSX.Element{
    return (
        <Entry 
            title={obj.title}
            name={obj.name}
            country={obj.country}
            image={obj.image}
            map={obj.map}
            description={obj.description}
        />
    )
}


export default mapFunction;