interface Photo {
  credit: string;
}

function PhotoCredit(props: Photo): JSX.Element {
  return <p><small>Credit to {props.credit} for photo use</small></p>;
}

export default PhotoCredit;
