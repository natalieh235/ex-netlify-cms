import Head from 'next/head'
import { Component } from 'react'
import { attributes, html as HomeContent } from '../content/landingPages/home.md';
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import Frames from '../components/Frames'



export default function Home(){
    console.log(HomeContent)
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

