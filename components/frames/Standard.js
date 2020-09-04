import Link from 'next/link'

export default function Standard(props){
    let frame = props.frame;
    return( 
           
        <div>
    <div class="container mx-auto px-6 border-b-2">
        <div class="sm:flex">
            <div class="sm:w-full sm:px-8 flex flex-col lg:flex-row md:flex-col justify-between mt-8 ml-2 ">
                <div class="flex flex-col mb-4 space-y-4">
                    <p>{frame.subtitle}</p>
                    <h2 className="font-bold text-3xl gradient bg-purple-600">{frame.header}</h2>
                    <p className="">{frame.description}</p>
                    {frame.buttons ? (frame.buttons.map((button, key) => (
                    <div className="py-1" key={key}>
                        <Link href={ '/' + button[ 'button-path']}>
                        <a className="py-2 px-1 bg-transparent text-purple-600 font-semibold border border-purple-600 rounded hover:bg-purple-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform">{button['button-text']}</a>
                        </Link>
                    </div>
                    ))) :
                    <>
                        </>}
                        <br />
                </div>
                <div class="flex flex-col mb-4">
                    {frame.img ?
                    <img width="1200" height="auto" src={frame.img}/>:
                    <>
                        </>}
                </div>
            </div>
        </div>
    </div>
</div>

    )
}