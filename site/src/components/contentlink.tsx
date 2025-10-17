import Link from "next/link";

export default function ContentLink({text, link}: {text: string, link: string}) {
    // TODO: add some cool effect to nav links
    return (
        <Link className="cursor-pointer underline text-[#CFC8CB] hover:text-gray-300" target="_blank" href={link}>{text}</Link>
    )
}