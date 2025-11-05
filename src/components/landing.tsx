import { space, sora } from "@/app/fonts";
import NavLink from "./common/navlink";

export default function Landing() {
  return (
    <div className = 'w-full h-screen landing py-8 px-12 overflow-hidden relative mx-auto'>
      <div className={`text-[#382E47]/60 ${space.className}  text-xl md:text-2xl 2xl:text-3xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-between font-light max-w-7xl mx-auto`}>
        <NavLink text = "fettig.dev" link = "https://fettig.dev" />
        <div>
          <p className={`text-center ${sora.className} text-[#382E47]/90 text-4xl md:text-5xl font-light`}>NICK FETTIG</p>
          <p className = {`text-center ${space.className} text-[#382E47]/60 text-lg md:text-2xl font-light`}>Student & Developer</p>
        </div>
        <div className="flex-col gap-4 text-right hidden lg:flex z-10">
            <NavLink text = "Portfolio" link = "id:portfolio" />
            <NavLink text = "About" link = "id:about" />
            <NavLink text = "Contact" link = "id:contact" />
            <NavLink text = "Blog" link = "blog" />
        </div>
      </div>
    </div>
  );
}
