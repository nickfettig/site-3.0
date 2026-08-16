import { mono } from "@/app/fonts";

export default function SectionHeader({ header }: { header: string }) {
  return (
    <div className="flex w-full justify-center xl:justify-start">
      <div className="flex w-fit flex-col">
        <h2
          className={`${mono.className} inline-block text-2xl font-semibold tracking-tight text-white md:text-4xl`}
        >
          {header}
        </h2>
        <div className="header-grad mt-2 h-0.5 w-full rounded-full md:h-1"></div>
      </div>
    </div>
  );
}
