import { sora, space } from "@/app/fonts"
import { WorkItemType } from "@/data/work"
import Image from "next/image"

export default function WorkItem({icon_path, employer, role, description, employment_dates}: WorkItemType) {
    return (
        <>
            <div className="col-span-2 flex gap-8">
                <Image src = {icon_path} alt = "" className = "col-span-1 h-20 md:h-28 w-20 md:w-28 rounded-lg shadow-lg" width={12} height={12}/>
                <div className={`h-full flex flex-col justify-between text-[#DBE8E9] ${sora.className}`}>
                    <div>
                        <h1 className="text-medium text-md md:text-xl text-[#F2EEEF]">{employer}</h1>
                        <p>{role}</p>
                    </div>
                    <p className="italic">{employment_dates}</p>
                </div>
            </div>
            <p className={`col-span-2 ${space.className} text-[#DBE8E9] font-light`}>{description}</p>
        </>
    )
}