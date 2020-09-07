import Link from 'next/link'

export default function Card2(props){
    let frame = props.frame;
    
    return(    
        <div>

        <p>{frame.subtitle}</p>
        <h2>{frame.header}</h2>
        <p>{frame.description}</p>


        {frame.cards ? (frame.cards.map((card, key) => (

        <div key={key}>

            <h2>{card.title}</h2>
            <p>{card.description}</p>

            <Link href='/' key={key}>
            <a>{card['button-text']}</a>
            </Link>
        </div>

        ))) :
        <>
            </>} {frame.img ?
            <img src={frame.img}/>:
            <>
                </>}

                <br />
        </div>


        ) }
