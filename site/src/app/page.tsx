import About from "@/components/about";
import Contact from "@/components/contact";
import Landing from "@/components/landing";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="main-grad py-12 px-16 flex flex-col gap-12">
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
