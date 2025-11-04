import { space, sora } from "@/app/fonts";
import NavLink from "./common/navlink";

export default function Landing() {
  return (
    <div className = 'w-full h-screen landing py-8 px-12 overflow-hidden relative mx-auto'>
      <div className={`text-landing-nav ${space.className}  text-xl md:text-2xl 2xl:text-3xl flex items-start justify-center lg:justify-between font-light max-w-7xl mx-auto`}>
        <NavLink text = "fettig.dev" link = "https://fettig.dev" />
        <div className="flex-col gap-4 text-right hidden lg:flex z-10">
            <NavLink text = "Portfolio" link = "id:portfolio" />
            <NavLink text = "About" link = "id:about" />
            <NavLink text = "Contact" link = "id:contact" />
            <NavLink text = "Blog" link = "blog" />
        </div>
      </div>
      <div className="xl:bg-white/10 rounded-full text-center width-custom absolute top-1/12 xl:top-5/6 2xl:top-5/6 left-1/2 -translate-x-1/2 xl:-translate-y-1/2">
        <p className={`text-center ${sora.className} text-[#516765] text-4xl md:text-5xl font-light mt-10`}>NICK FETTIG</p>
        <p className = {`text-center ${space.className} text-[#598282] text-lg md:text-2xl font-light`}>Student & Developer</p>
      </div>
    </div>
  );
}
