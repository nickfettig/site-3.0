import { sans, mono } from "@/app/fonts"
import { WorkItemType } from "@/data/work"
import Image from "next/image"

export default function WorkItem({icon_path, employer, role, description, employment_dates}: WorkItemType) {
    return (
        <>
            <div className="col-span-2 flex gap-6 md:gap-8">
                <Image src = {icon_path} alt = "" className = "col-span-1 h-20 md:h-28 w-20 md:w-28 rounded-lg shadow-lg" width={12} height={12}/>
                <div className={`h-full flex flex-col justify-between text-ink ${sans.className}`}>
                    <div>
                        <h3 className={`${mono.className} font-semibold text-md md:text-xl text-[#F2EEEF]`}>{employer}</h3>
                        <p className="font-light">{role}</p>
                    </div>
                    <p className="text-ink-muted italic">{employment_dates}</p>
                </div>
            </div>
            <p className={`col-span-2 ${sans.className} text-ink font-light leading-relaxed`}>{description}</p>
        </>
    )
}
