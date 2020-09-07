import Link from 'next/link'

export default function TwoDescriptions(props){
    let frame = props.frame;
    return(
        <div>

        <p>{frame.subtitle}</p>
        <h2>{frame.header}</h2>
        <p>{frame.description1}</p>
        {frame.buttons ? (frame.buttons.map((button, key) => (
        <div key={key}>
            <Link href={ '/' + button[ 'button-path']}>
            <a>{button['button-text']}</a>
            </Link>
        </div>
        ))) :
        <>
            </>}
            <br />

            <p>{frame.description2}</p>


            {frame.img ?
            <img src={frame.img}/>:
            <>
                </>}
        </div>

            )
        }