import { space, sora } from "@/app/fonts";
import NavLink from "./navlink";

export default function Landing() {
  return (
    <div className = 'w-screen h-screen landing py-8 px-12 overflow-hidden relative'>
      <div className={`text-landing-nav ${space.className} text-2xl flex items-start justify-between font-light`}>
        <NavLink text = "fettig.dev" link = "https://fettig.dev" />
        <div className="flex flex-col gap-4 text-right">
            <NavLink text = "Portfolio" link = "" />
            <NavLink text = "Contact" link = "" />
            <NavLink text = "Blog" link = "" />
        </div>
      </div>
      <div className="bg-white/10 rounded-full width-custom absolute top-5/6 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className={`text-center ${sora.className} text-[#516765] text-5xl font-light mt-10`}>NICK FETTIG</p>
        <p className = {`text-center ${space.className} text-[#598282] text-2xl font-light`}>Student & Developer</p>
      </div>
    </div>
  );
}
