import Head from 'next/head'
import { attributes, html as Content} from '../content/landingPages/about.md';
import Frames from '../components/Frames'
//import { useRouter } from 'next/router'

export default function About(){
    // const router = useRouter()
    // const { about } = router.query
    // console.log(about)

    let { title, frames } = attributes
    return (
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <article>
                <h1>{title}</h1>
                <Frames frames={frames}/>
                
            </article>
        </>
    )
}

