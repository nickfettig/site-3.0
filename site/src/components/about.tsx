import { sora, space } from "@/app/fonts";
import ContentDiv from "./content-div";
import ContentLink from "./contentlink";
import SectionHeader from "./section_header";
import Image from "next/image";

export default function About() {
    return (
    <div>
        <SectionHeader header="ABOUT ME"/>
        <div className="my-8 grid grid-cols-3 gap-12">
            <ContentDiv col = {2}>
                <div className = "flex flex-col text-[#DBE8E9] gap-4 text-lg">
                    <p>I'm a senior at <span><ContentLink text="Swarthmore College" link ="https://www.swarthmore.edu/" /></span> completing a B.A. in Computer Science and a B.S. in General Engineering. I'm currently applying to graduate programs with interests spanning Human-Computer Interaction, Robotics, Computational Mathematics, and AI Policy. </p>
                    <p>My background reflects the breadth and depth that come with a STEM-focused liberal arts education. I've taken a wide range of courses—from compilers and computer vision to mobile robotics, nonlinear dynamics, and numerical methods—using an equally diverse set of languages, including C, C++, OCaml, MATLAB, and Python.</p>
                    <p>Beyond the classroom, I serve as Vice President of the <span><ContentLink text="Swarthmore College Computer Society" link ="https://www.sccs.swarthmore.edu/" /></span>, a long-standing student-led organization that provides services to the broader student body. I've also been a teaching assistant for five semesters' worth of computer science and engineering courses, and I currently lead Swarthmore's rock climbing club as president. When I'm not working with computers, you can usually find me watching the Patriots, gaming with friends, or exploring new music!</p>
                </div>
            </ContentDiv>
            <ContentDiv col = {1}>
                <div className = "relative spotify-grad w-full h-full rounded-md flex flex-col items-center">
                    <Image src="/spotify_pfp.svg" alt="" className = "w-44 top-0 -translate-y-1/2 absolute left-1/2 -translate-x-1/2" width={48} height={48} />
                    <Image src="spotify.svg" alt="" className="w-8 h-8 absolute right-4 top-4" width={12} height={12} />
                    <p className={`mt-24 text-white text-2xl ${sora.className} font-light`}>@NickFet</p>
                    <div className="mt-4 flex justify-center gap-3 items-center">
                        <Image src="/music.svg" alt="" className="w-5 h-5" width={12} height={12} />
                        <p className={`text-[#B9B8B8] text-lg ${sora.className} font-light`}>Currently listening to:</p>
                    </div>
                    <div className = {`text-[#EFEEEE] text-center ${space.className} mt-2 text-lg`}>
                        <p className='font-medium'>Don't Stop</p>
                        <p className='font-light'>Red Hot Chili Peppers</p>
                    </div>
                    <p className="text-white mt-12">image here?</p>
                </div>
            </ContentDiv>
        </div>
    </div>
    );
}