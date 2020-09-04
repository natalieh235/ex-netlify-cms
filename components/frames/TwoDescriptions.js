import Link from 'next/link'

export default function TwoDescriptions(props){
    let frame = props.frame;
    return(
        <div>
    <div className="container mx-auto px-6 border-b-2 ">
        <div className="px-8">
            <p className="mt-4 text-xl gradient bg-purple-400">{frame.subtitle}</p>
            <h2 className="font-bold text-3xl gradient bg-purple-600 mb-4">{frame.header}</h2>
        </div>

        <div className="sm:flex">
            <div className="sm:w-full sm:px-8 flex flex-row lg:flex-row md:flex-row justify-between ">
                <div className="flex flex-col mb-4 space-y-4">
                    <p>{frame.description1}</p>
                    {frame.buttons ? (frame.buttons.map((button, key) => (
                    <div key={key}>
                        <Link href={ '/' + button[ 'button-path']}>
                        <a className="py-2 px-1 bg-transparent text-purple-600 font-semibold border border-purple-600 rounded hover:bg-purple-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform">{button['button-text']}</a>
                        </Link>
                    </div>
                    ))) :
                    <>
                        </>}
                        <br />
                </div>
                <div className="flex flex-col mb-4">
                    <p>{frame.description2}</p>
                </div>
            </div>
        </div>
        <div className="px-8 mb-4">
        {frame.img ?
        <img src={frame.img}/>:
        <>
        </>}
        </div>
    </div>
</div>

    )
}