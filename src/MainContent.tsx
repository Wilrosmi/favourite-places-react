import Entry from "./Entry";
import mapFunction from "./mapFunction"

interface Place {
  title: string;
  name: string;
  country: string;
  image: string;
  map: string;
  description: string;
}

interface Prop {
  arr: Place[]
}

function MainContent(props: Prop): JSX.Element {
  return (
    <>
      {props.arr.map(mapFunction)}
    </>
  );
}

export default MainContent;
