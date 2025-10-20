import Image from "next/image";
import SectionHeader from "./section_header";
import ContentDiv from "./content-div";
import ContentLink from "./contentlink";
import { sora, space } from "@/app/fonts";
import SocialIcon from "./social-icon";

export default function Contact() {
    return (
    <div id = "contact">
        <SectionHeader header="CONTACT"/>
        <div className = "my-8 grid grid-cols-4 gap-12">
            <Image src='/boat.svg' alt={"boat"} className="w-full h-full shadow-lg rounded-lg" width={20} height={20}/>
            <ContentDiv col={3}>
                <div className={`${sora.className} text-[#DBE8E9] text-lg flex flex-col font-light h-full`}>
                    <p>
                        I always love meeting new people and talking about tech. Shoot me a message at my email address, <ContentLink text="nicholasfettig63@gmail.com" link="mailto:nicholasfettig63@gmail.com"/>, or check out any of my socials below! 
                    </p>
                    <div className="grow flex justify-center gap-12 items-center">
                        <SocialIcon color = "#CE4881" link = "https://instagram.com/fett1g" svg_path = "/instagram.svg"/>
                        <SocialIcon color = "#2298B7" link = "https://linkedin.com/in/nick-fettig" svg_path = "/linkedin.svg"/>
                        <SocialIcon color = "#784686" link = "https://github.com/nickfettig" svg_path = "/github.svg"/>
                        <SocialIcon color = "#EB7E3F" link = "mailto:nicholasfettig63@gmail.com" svg_path = "/mail.svg"/>
                        <SocialIcon color = "#D23D3D" link = "https://discord.com/users/177916233532833794" svg_path = "/discord.svg"/>
                    </div>
                </div>
            </ContentDiv>
        </div>
        <p className={`${space.className} text-center font-light text-lg text-[#DBE8E9] mt-12 mb-4`}>All pictures used on my site were captured by my good friend, Mudia. Check out his instgram at <ContentLink text="@mudiaethereal" link="https://instagram.com/mudiaethereal"/>!</p>
    </div>
    );
}