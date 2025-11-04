"use client"

import Link from "next/link";

export default function NavLink({text, link}: {text: string, link: string}) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
    };

    let id_link = link.split(':');
    if (id_link[0] === 'id') {
        return <p className="cursor-pointer hover:text-gray-700" onClick={() => scrollToSection(id_link[1])}>{text}</p>
    }

    return <Link className="cursor-pointer hover:text-gray-700" href = {link}>{text}</Link>
}