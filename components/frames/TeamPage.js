import Link from 'next/link'

export default function TeamPage(props){
    let frame = props.frame;
    
    return(    
        <div>
            <p>{frame.subtitle}</p>
            <h2>{frame.header}</h2>
            <p>{frame.description}</p>
            {frame.buttons ? (frame.buttons.map((button, key) => (
                <div key={key}>
                    <Link href='/' key={key}>
                        <a>{button['button-text']}</a>
                    </Link>
                </div>
            ))) : <></> }
            {frame.profiles ? (frame.profiles.map((profile, key) => (
                <div key={key}>
                    <img src={'img/' + profile.img}></img>
                    {profile.name}
                    {profile.position}
                </div>
            ))) : <></> }
            <br />
        </div>

    )
}