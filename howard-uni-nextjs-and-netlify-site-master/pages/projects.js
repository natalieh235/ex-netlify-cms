import Head from 'next/head'
import { Component } from 'react'
import { attributes, react as Content } from '../content/landingPages/projects.md';
import Layout from '../components/layout'
import Frames from '../components/Frames'
import Link from 'next/link'


export default function projects(props) {

    let { title, frames } = attributes
    return(
        <Layout>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <article>
                <Frames frames={frames}/>

            {props ? (props.p.map((project, k) => (
                <div key={k}>
                    <h2>{project.attributes.title}</h2>
                    <Link href={'/projects/' + project.attributes.path}>
                        <a>{'See more ->'}</a>
                    </Link>
                </div>
            ))) : <></> }
                                
            </article>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const testFolder = './content/projects/';
    const fs = require('fs')

    const fileNames = await fs.promises.readdir(testFolder);

    let p = await Promise.all(fileNames.map(async (name) => {
        const { attributes, html } = await import(`../content/projects/${name}`)
        return {
            attributes: attributes,
            html: html
        }
    }))

    return {
        props: {p}
    }
}