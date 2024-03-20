// import React from "react"
import Link from "next/link"

export default function Navbar(){
    return (
    <nav>
        <ul className="flex justify-between p-8 bg-slate-900 text-white">
            <li><Link href="/">Home</Link></li>

            <li><Link href="/signup">Sign Up</Link></li>

            <li><Link href="/login">Log In</Link></li>

        </ul>
    </nav>
    )
}