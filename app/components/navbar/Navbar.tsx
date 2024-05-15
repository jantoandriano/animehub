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
            <button data-collapse-toggle="navbar-default" type="button" className="navbar-btn-menu" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="navbar-link-container">
                    <li>
                        <Link href="/" className="navbar-link" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/" className="navbar-link" aria-current="page">About</Link>
                    </li>
                    <li>
                        <Link href="/" className="navbar-link" aria-current="page">Team</Link>
                    </li>
                    <li>
                        <Link href="#" className="navbar-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar