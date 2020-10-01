import Link from 'next/link'

export default function Card2(props){
    let frame = props.frame;
    
    return(    
        <div>
            <p>{frame.subtitle}</p>
            <h2>{frame.header}</h2>
            <p>{frame.description}</p>
            {frame.buttons ? (frame.buttons.map((button, key) => (
                <div key={key}>
                    <Link href={'/' + button['button-path']} key={key}>
                        <a>{button['button-text']}</a>
                    </Link>
                </div>
            ))) : <></> }
            {frame.cards ? (frame.cards.map((card, key) => (
                <div key={key}>
                    {card.title}
                    {card.description}
                    <Link href={'/' + button['button-path']} key={key}>
                        <a>{card['button-text']}</a>
                    </Link>
                </div>
            ))) : <></> }
            <br />
        </div>

    )
}