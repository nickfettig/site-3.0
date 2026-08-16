import { sans, mono } from "@/app/fonts";
import { WorkItemType } from "@/data/work";
import Image from "next/image";

export default function WorkItem({
  icon_path,
  employer,
  role,
  description,
  employment_dates,
}: WorkItemType) {
  return (
    <>
      <div className="col-span-2 flex gap-6 md:gap-8">
        <Image
          src={icon_path}
          alt=""
          className="col-span-1 h-20 w-20 rounded-lg shadow-lg md:h-28 md:w-28"
          width={12}
          height={12}
        />
        <div
          className={`text-ink flex h-full flex-col justify-between ${sans.className}`}
        >
          <div>
            <h3
              className={`${mono.className} text-md font-semibold text-[#F2EEEF] md:text-xl`}
            >
              {employer}
            </h3>
            <p className="font-light">{role}</p>
          </div>
          <p className="text-ink-muted italic">{employment_dates}</p>
        </div>
      </div>
      <p
        className={`col-span-2 ${sans.className} text-ink leading-relaxed font-light`}
      >
        {description}
      </p>
    </>
  );
}
