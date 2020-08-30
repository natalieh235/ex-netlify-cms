export default function Frames(props){
    return(
        <>
            {props.frames.map((frame, key) => (
                <div key={key}>
                    <p>{frame.subtitle}</p>
                    <h2>{frame.header}</h2>
                    <p>{frame.description}</p>
                    {frame.img ? <img src={'profile/img/' + frame.img}/> : <></>}
                    {frame.button ? <button>{frame.button}</button> : <></>}
                    {frame.textbox ? (frame.textbox.map((box, k) => (
                        <div key={k}>
                            <h3>{box.title}</h3>
                            <p>{box.text}</p>
                        </div>
                    ))) : <></> }
                    <hr />
                    <br />
                </div>

            ))}
        </>
    )
}