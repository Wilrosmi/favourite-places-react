import PhotoCredit from "./PhotoCredit";

function Footer(): JSX.Element {
  return (
    <>
      <h3>Credit for photos to:</h3>
      <PhotoCredit credit={"Wikipedia"} />
      <PhotoCredit credit={"Ufford Park"} />
      <PhotoCredit credit={"Wikipedia"} />
      <PhotoCredit credit={"Sardegna Turismo"} />
    </>
  );
}

export default Footer;
