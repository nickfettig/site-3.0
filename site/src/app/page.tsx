import About from "@/components/about";
import Contact from "@/components/contact";
import Landing from "@/components/landing";
import Portfolio from "@/components/portfolio";
import { space } from "./fonts";
import ContentLink from "@/components/common/contentlink";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="main-grad py-12 px-16 flex flex-col gap-20">
        <About />
        <Portfolio />
        <Contact />
      </div>
      <div className={`${space.className} text-center font-light text-sm text-[#DBE8E9] bg-[#5A6F80] border-t border-white/30 flex justify-center py-4`}>
          <p>© 2025 Nick Fettig | Developed with NextJS & TailwindCSS | Landing & boat pictures captured by my friend, Mudia Atekha!</p>
        </div>
    </>
  );
}
