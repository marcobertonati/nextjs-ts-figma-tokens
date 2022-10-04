import Link from 'next/link'


export default function Navbar () {

    return(
        <nav >
        <ul>
            <li>
                <Link href="/">
                    <a>My Zoleo App</a>
                </Link>
            </li>
            <li>
            <Link href="/devices">
                    <a>Devices</a>
                </Link>
            </li>
            <li>
            <Link href="/billings">
                    <a>Billings</a>
                </Link>
            </li>
            <li>
            <Link href="/contact">
                    <a>Contact us</a>
                </Link>
            </li>
        </ul>
        </nav>
    )
}