import Image from "next/image"
import Link from "next/link"
import './index.css'

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src="/logo.png" className="h-8" alt="website-logo" width={70} height={50} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Anime Hub</span>
            </Link>
            
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="navbar-link-container">
                    <li>
                        <Link href="/" className="navbar-link" aria-current="page">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar