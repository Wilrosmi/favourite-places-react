interface Photo {
  credit: string;
}

function PhotoCredit(props: Photo): JSX.Element {
  return (
    <li>
      <small>{props.credit}</small>
    </li>
  );
}

export default PhotoCredit;
