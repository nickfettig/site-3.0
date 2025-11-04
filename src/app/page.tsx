import About from "@/components/about";
import Contact from "@/components/contact";
import Landing from "@/components/landing";
import Portfolio from "@/components/portfolio";
import { space } from "./fonts";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="main-grad py-12 px-4 md:px-16 flex flex-col gap-16">
        <Portfolio />
        <About />
        <Contact />
      </div>
      <div className={`${space.className} text-center font-light text-xs md:text-sm text-[#DBE8E9] bg-[#5A6F80] border-t border-white/30 flex justify-center py-4 `}>
          <p>&copy; 2025 Nick Fettig | Made from scratch using NextJS & TailwindCSS | Landing & boat pictures captured by my friend, Mudia Atekha!</p>
        </div>
    </>
  );
}
