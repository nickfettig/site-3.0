import { space } from "@/app/fonts";

export default function SectionHeader({ header }: { header: string }) {
  return (
    <div className="w-full flex justify-center xl:justify-start">
      <div className="flex flex-col w-fit">
        <h1 className={`${space.className} text-2xl md:text-4xl text-white inline-block`}>
          {header}
        </h1>
        <div className="h-0.5 md:h-1 w-full header-grad rounded-full mt-1"></div>
      </div>
    </div>
  );
}