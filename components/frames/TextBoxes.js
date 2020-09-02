export default function TextBoxes(props){
    let frame = props.frame;
    return(    
        <div key={frame.type}>
            <p>{frame.subtitle}</p>
            <h2>{frame.header}</h2>
            <p>{frame.description}</p>
            {frame.images ? (frame.images.map((image, k) => (
                <div key={k}>
                    <img src={image}/>
                </div>
            ))) : <></> }
            {frame.boxes ? (frame.boxes.map((box, k) => (
                <div key={k}>
                    <h3>{box.title}</h3>
                    <p>{box.text}</p>
                </div>
            ))) : <></> }
            <hr />
            <br />
        </div>

    )
}