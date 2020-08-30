import Head from 'next/head'
import { Component } from 'react'


export default class Home extends Component {
    render() {
        let { title, frames } = attributes
        return (
            <>
                <Head>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
            </>
        )
    }
}