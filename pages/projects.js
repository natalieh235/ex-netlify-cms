import Head from 'next/head'
import { Component } from 'react'
import { attributes, react as Content } from '../content/landingPages/projects.md';
import { attributes as ProjAttributes, react as ProjectContent } from '../content/listProjects.md';
import Layout from '../components/layout'
import Frames from '../components/Frames'
import Link from 'next/link'


// {projects.map((project, key) => (
//     <div key={key}>
//         <h2>{'Name: ' + project.name}</h2>
//         <Link href={'/projects/' + project.path}>
//             <a>{'See more ->'}</a>
//         </Link>

//     </div>
// ))}
export default function projects() {

    let { title, frames, listOfProjects } = attributes

    let { projects } = ProjAttributes

    return(
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <article>
                <h1>{title}</h1>
                <Frames frames={frames}/>

                {listOfProjects ? (listOfProjects.map((project, k) => (
                        <div key={k}>
                            <h2>{project}</h2>
                        </div>
                    ))) : <></> }

                
            </article>
        </>
    )
}