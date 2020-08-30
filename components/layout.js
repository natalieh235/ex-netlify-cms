import Head from 'next/head'
import Link from 'next/link'
import { attributes, react as Content } from '../content/nav.md';

export default function Layout({ children, home }){
    let { links } = attributes
    return(
       <>
        <div>
            {links.map((link) => (
                <Link href={link.path} className="nav-link">
                    <a>{link.name}</a>
                </Link>
            ))}
        </div>
        {children}
       </>
    )
}