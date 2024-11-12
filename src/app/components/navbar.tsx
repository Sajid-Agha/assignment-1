import Link from "next/link"
export default function Navbar() {
    return (
        <div>
            <nav className="h-14 bg-blue-300 px-20 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-blue-950">
                        Agha Sajid
                    </h1>
                </div>
                <div>
                    <ul className="flex space-x-20 text-lg">
                        <li><Link href="/" className="hover:text-blue-900">Home</Link></li>
                        <li><Link href="/about" className="hover:text-blue-900">About</Link></li>
                        <li><Link href="/services" className="hover:text-blue-900">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-900">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="text-lg px-5 py-1 border border-blue-950 rounded-full hover:bg-blue-950 hover:text-white">
                        <li><Link href="#!">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}