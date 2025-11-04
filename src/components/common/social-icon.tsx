import Link from "next/link";
import Image from "next/image";

export default function SocialIcon({color, link, svg_path}: {color: string, link: string, svg_path: string}) {
    return (
        <Link href={link} target="_blank" className={`bg-[${color}] w-14 h-14 md:w-16 md:h-16 xl:h-20 xl:w-20 flex items-center rounded-full justify-center hover:opacity-90 cursor-pointer`}>
            <Image src = {svg_path} alt = {link} className="w-2/5 h-2/5" height={10} width={10}/>
        </Link>
    )
}