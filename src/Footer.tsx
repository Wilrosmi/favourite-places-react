import PhotoCredit from "./PhotoCredit";

function Footer(): JSX.Element {
  return (
    <>
      <h3>Credit for photos to:</h3>
      <ul>
        <PhotoCredit credit={"Wikipedia"} />
        <PhotoCredit credit={"Ufford Park"} />
        <PhotoCredit credit={"Sardegna Turismo"} />
      </ul>
    </>
  );
}

export default Footer;
