import Head from 'next/head'
import { attributes } from '../../content/listProjects.md'


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

    let paths = attributes.projects.map(project => {
        return {
          params: {proj: project.path.replace(/\.md$/, '')}
        }
    })

    return {
        paths,
        fallback: false
    }
  }
  
  export async function getStaticProps(context) {
    console.log(context)

    const { attributes, html } = await import(`../../content/projects/${context.params.proj}.md`)

    return {
        props: {
          attributes: attributes,
          data: html
        }
      }
  }