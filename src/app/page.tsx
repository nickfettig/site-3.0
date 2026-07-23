import About from "@/components/about";
import Contact from "@/components/contact";
import Landing from "@/components/landing";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Landing />
      <main className="main-grad flex flex-col gap-20 px-4 py-16 md:gap-24 md:px-16 md:py-20">
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
