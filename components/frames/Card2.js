export default function Card2(props){
    let frame = props.frame;
    return(    
        <div key={frame.type}>
            <p>{frame.subtitle}</p>
            <h2>{frame.header}</h2>
            <p>{frame.description}</p>
            {frame.buttons ? (frame.buttons.map((button, k) => (
                <div key={k}>
                    <Link href={button['button-path']} key={key}>
                        <a>{button['button-text']}</a>
                    </Link>
                </div>
            ))) : <></> }
            {frame.cards ? (frame.cards.map((card, k) => (
                <div key={k}>
                    {card.title}
                    {card.description}
                    <Link href={card['button-path']} key={key}>
                        <a>{card['button-text']}</a>
                    </Link>
                </div>
            ))) : <></> }
            <hr />
            <br />
        </div>

    )
}