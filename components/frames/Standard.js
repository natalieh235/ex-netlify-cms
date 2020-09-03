import Link from 'next/link'

export default function Standard(props){
    let frame = props.frame;
    console.log('here')
    console.log(frame.buttons[0]['button-path'])
    return(    
        <div>
            <p>{frame.subtitle}</p>
            <h2>{frame.header}</h2>
            <p>{frame.description}</p>
            {frame.img ? <img src={''}/> : <></>}
            {frame.buttons ? (frame.buttons.map((button, key) => (
                <div key={key}>
                    <Link href={'/' + button['button-path']}>
                        <a>{button['button-text']}</a>
                    </Link>
                </div>
            ))) : <></> }
            <hr />
            <br />
        </div>

    )
}