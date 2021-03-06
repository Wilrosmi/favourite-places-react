import Place from "./placeInterface";

function Entry(props: Place): JSX.Element {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.name}</h3>
      <h3>{props.country}</h3>
      <img src="{props.image}" alt="{props.name}" />
      <a href="{props.map}"> Map Link</a>
      <p>{props.description}</p>
    </>
  );
}

export default Entry;
