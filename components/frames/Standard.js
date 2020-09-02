export default function Standard(props){
    let frame = props.frame;
    return(    
        <div key={frame.type}>
            <p>{frame.subtitle}</p>
            <h2>{frame.header}</h2>
            <p>{frame.description}</p>
            {frame.img ? <img src={''}/> : <></>}
            {frame.buttons ? (frame.buttons.map((button, k) => (
                <div key={k}>
                    <Link href={button['button-path']} key={key}>
                        <a>{button['button-text']}</a>
                    </Link>
                </div>
            ))) : <></> }
            <hr />
            <br />
        </div>

    )
}