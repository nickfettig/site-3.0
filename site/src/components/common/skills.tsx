import { ProjectType } from "@/data/portfolio";
import Image from "next/image";

export default function Project({title, link, bg_image_src, skills, description}: ProjectType) {
    return (
            <a href = {link} target = "_blank" className="group border border-white/10 bg-white/5 shadow rounded-lg hover:shadow-lg hover:border-gray-100/20 transition duration-300 cursor-pointer overflow-hidden pb-2 flex flex-col text-[#DBE8E9]">
                <Image src = {bg_image_src} className="w-full object-cover transition duration-300 h-60" width={10000} height={10000} alt = "screenshot of project" />
                <h1 className="text-lg text-center font-medium my-3 px-4 group-hover:text-red-100/80 group-hover:underline transition duration-300">{title}</h1>
                <p className="text-sm font-light px-4 mb-2">{description}</p>
                <div className = "flex flex-wrap px-4 mt-auto pt-2">
                    {skills.map((skill, id) => <p key = {id} className="px-3 py-1 bg-white/10 shadow text-sm text-gray-100 mr-2 rounded-full mb-2">{skill}</p>)}
                </div>
            </a>
    )
}