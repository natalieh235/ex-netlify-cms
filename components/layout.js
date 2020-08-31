import Head from 'next/head'
import Link from 'next/link'
import { attributes, react as Content } from '../content/nav.md';

export default function Layout({ children, home }){
    let { links } = attributes
    return(
       <>
        <div>
            {links.map((link, key) => (
                <Link href={link.path} key={key}>
                    <a>{link.name}</a>
                </Link>
            ))}
        </div>
        {children}
        <footer>
            <h1>{'Bit Project'}</h1>
            {links.map((link, key) => (
                <Link href={link.path} key={key}>
                    <a>{link.name}</a>
                </Link>
            ))}
        </footer>
       </>
    )
}