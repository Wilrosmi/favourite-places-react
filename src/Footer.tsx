import PhotoCredit from "./PhotoCredit";

function Footer(): JSX.Element {
    return (
        <>
            <h3>Credit for photos to:</h3>
            <PhotoCredit />
            <PhotoCredit />
            <PhotoCredit />
            <PhotoCredit />
        </>
    );
}

export default Footer;