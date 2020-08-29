import Head from 'next/head'
import { Component } from 'react'
import { attributes, react as Content} from '../content/about.md';

export default class About extends Component {
    render() {
        let { title, frames } = attributes
        return (
            <>
                <Head>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
                <article>
                    <h1>{title}</h1>

                    {frames.map((frame) => (
                        <>
                            <p>{frame.subtitle}</p>
                            <h2>{frame.header}</h2>
                            <p>{frame.description}</p>
                            <button>{frame.button}</button>
                            <br />
                        </>
                    ))}
                </article>
            </>
        )
    }
}