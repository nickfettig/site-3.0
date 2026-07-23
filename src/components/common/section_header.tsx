import { mono } from "@/app/fonts";

export default function SectionHeader({ header }: { header: string }) {
  return (
    <div className="w-full flex justify-center xl:justify-start">
      <div className="flex flex-col w-fit">
        <h2 className={`${mono.className} text-2xl md:text-4xl font-semibold tracking-tight text-white inline-block`}>
          {header}
        </h2>
        <div className="h-0.5 md:h-1 w-full header-grad rounded-full mt-2"></div>
      </div>
    </div>
  );
}