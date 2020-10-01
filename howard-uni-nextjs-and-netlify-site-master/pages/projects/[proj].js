import Head from 'next/head'

export default function Project(props){
    
    let { title, subtitle } = props.attributes
    return(
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <article>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div dangerouslySetInnerHTML={{ __html: props.data }} />
            </article>
        </>

    )
}

export async function getStaticPaths() {
    const testFolder = './content/projects/';
    const fs = require('fs')

    const fileNames = await fs.promises.readdir(testFolder);

    let paths = fileNames.map(file => {
        return {
            params: {proj: file.replace(/\.md$/, '')}
        }
    })

    return {
        paths,
        fallback: false
    }
  }
  
  
  export async function getStaticProps(context) {
    const { attributes, html } = await import(`../../content/projects/${context.params.proj}.md`)

    return {
        props: {
          attributes: attributes,
          data: html
        }
    }
  }