import Link from "next/link";

export default function NavLink({text, link}: {text: string, link: string}) {
    // TODO: add some cool effect to nav links
    return (
        <Link className="cursor-pointer hover:text-gray-700" href={link}>{text}</Link>
    )
}