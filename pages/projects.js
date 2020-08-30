import Head from 'next/head'
import { Component } from 'react'
import { attributes, react as Content } from '../content/landingPages/projects.md';
import Layout from '../components/layout'
import Frames from '../components/Frames'

export default function projects() {

    let { title, frames } = attributes
    return(
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