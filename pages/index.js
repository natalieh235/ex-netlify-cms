import Head from 'next/head'
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../components/layout'

export default class Home extends Component {

    render() {
        
        let { title, frames } = attributes
        return (
            <Layout>
                <Head>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
                <article>
                    <h1>{title}</h1>

                    {frames.map((frame, key) => (
                        <div key={key}>
                            <p>{frame.subtitle}</p>
                            <h2>{frame.header}</h2>
                            <p>{frame.description}</p>
                            <button>{frame.button}</button>
                            <hr />
                        </div>
                    ))}
                </article>
            </Layout>
        )
    }
}