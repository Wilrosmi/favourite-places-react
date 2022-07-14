import Entry from "./Entry";
import Place from "./placeInterface";

function mapFunction(obj: Place): JSX.Element {
  return (
    <Entry
      title={obj.title}
      name={obj.name}
      country={obj.country}
      image={obj.image}
      map={obj.map}
      description={obj.description}
    />
  );
}

export default mapFunction;
