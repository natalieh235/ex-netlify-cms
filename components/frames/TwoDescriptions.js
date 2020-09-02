export default function TwoDescriptions(props){
    let frame = props.frame;
    return(    
        <div key={frame.type}>
            <p>{frame.subtitle}</p>
            <h2>{frame.header}</h2>
            <p>{frame.description1}</p>
            <p>{frame.description2}</p>
            {frame.img ? <img src={''}/> : <></>}
            {frame['button-text'] ?   
                    <Link href={button['button-path']} key={key}>
                        <a>{button['button-text']}</a>
                    </Link>
            : <></> }
            <hr />
            <br />
        </div>

    )
}