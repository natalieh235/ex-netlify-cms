import Head from 'next/head'
import { attributes, html as Content} from '../content/landingPages/involve.md';
import Frames from '../components/Frames'
import Layout from '../components/layout'

export default function Involve(){

    let { title, frames } = attributes
    return (
        <Layout>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <article>
                <h1>{title}</h1>
                <Frames frames={frames}/>
            </article>
        </Layout>
    )
}

