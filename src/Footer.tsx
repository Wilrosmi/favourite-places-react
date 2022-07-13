import PhotoCredit from "./PhotoCredit";

function Footer(): JSX.Element {
    return (
        <>
            <h3>Credit for photos to:</h3>
            <PhotoCredit credit={""}/>
            <PhotoCredit credit={""}/>
            <PhotoCredit credit={""}/>
            <PhotoCredit credit={""}/>
        </>
    );
}

export default Footer;