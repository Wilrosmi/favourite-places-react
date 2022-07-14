import mapFunction from "./mapFunction";
import Place from "./placeInterface";

interface Prop {
  arr: Place[];
}

function MainContent(props: Prop): JSX.Element {
  return <>{props.arr.map(mapFunction)}</>;
}

export default MainContent;
