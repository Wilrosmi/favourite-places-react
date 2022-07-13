interface Photo {
    credit: string;
}

function PhotoCredit(props: Photo): JSX.Element {
    return (
        <p>{props.credit}</p>
    )
}

export default PhotoCredit;