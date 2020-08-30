import Head from 'next/head'


export default function Project(props){
    //console.log(props)
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
    return {
        paths: [
          { params: { proj: 'ex' } }
        ],
        fallback: false
      }
  }
  
  export async function getStaticProps({ params }) {
    let title = params.proj;
    const { attributes, html } = await import(`../../content/projects/${title}.md`)

    return {
        props: {
          attributes: attributes,
          data: html

        }
      }
  }