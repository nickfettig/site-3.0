import { mono } from "@/app/fonts";
import Image from "next/image";
import NavLink from "./common/navlink";
import { blurDataURLs } from "@/data/images";

export default function Landing() {
  return (
    <div className="relative h-screen w-full overflow-hidden px-6 py-8 md:px-12">
      {/* Progressive hero: the inlined blur renders instantly, the WebP streams
          in and swaps once decoded (no priority so it stays lazy/async). */}
      <Image
        src="/scenery/hero.webp"
        alt="A colorful sailboat coming ashore on a beach"
        fill
        placeholder="blur"
        blurDataURL={blurDataURLs.hero}
        sizes="100vw"
        className="-z-20 object-cover object-[left_bottom]"
      />
      <div className="hero-scrim absolute inset-0 -z-10" />

      <div
        className={`${mono.className} mx-auto flex max-w-7xl flex-col items-center text-xl font-light text-[#3E3A35] md:text-2xl lg:flex-row lg:items-start lg:justify-between 2xl:text-3xl`}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/about_icons/avatar.webp"
            alt="Nick Fettig"
            width={56}
            height={56}
            placeholder="blur"
            blurDataURL={blurDataURLs.avatar}
            className="h-12 w-12 rounded-full object-cover object-[50%_30%] shadow-sm ring-2 ring-white/50 md:h-14 md:w-14"
          />
          <NavLink text="fettig.dev" link="https://fettig.dev" />
        </div>
        <div className="mt-4 text-center lg:mt-0">
          <p className="text-4xl font-medium [text-shadow:_0_1px_10px_rgba(245,244,240,0.4)] md:text-5xl">
            NICK FETTIG
          </p>
          <p className="text-lg font-light tracking-wide text-[#5A544B] md:text-2xl">
            Aspiring Roboticist
          </p>
        </div>
        <div className="z-10 hidden flex-col gap-3 text-right lg:flex">
          <NavLink text="Portfolio" link="id:portfolio" />
          <NavLink text="About" link="id:about" />
          <NavLink text="Contact" link="id:contact" />
          <NavLink text="Resume" link="resume" />
          <NavLink text="Blog" link="https://blog.fettig.dev" />
        </div>
      </div>

      {/* Cue that there's content below */}
      <a
        href="#portfolio"
        aria-label="Scroll to content"
        className="scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 text-[#3E3A35] transition-colors hover:text-[#1B2A2B]"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </div>
  );
}
