import { sora, space } from "@/app/fonts";
import ContentDiv from "./common/content-div";
import ContentLink from "./common/contentlink";
import SectionHeader from "./common/section_header";
import Image from "next/image";
import WorkItem from "./common/work-item";
import { workItems } from '@/data/work';
import { Fragment } from "react";

export default function About() {
    return (
    <div id = "about" className="max-w-7xl mx-auto">
        <SectionHeader header="ABOUT ME"/>
        <div className="my-8 flex flex-col xl:grid grid-cols-3 gap-20 xl:gap-8">
            <ContentDiv col = {2}>
                <div className = {`${sora.className} flex flex-col text-[#DBE8E9] gap-4 text-md md:text-lg font-light`}>
                    <p>I'm a senior at <ContentLink text="Swarthmore College" link ="https://www.swarthmore.edu/" /> completing a B.A. in Computer Science and a B.S. in General Engineering. I'm currently applying to graduate programs with interests spanning Human-Computer Interaction, Robotics, Computational Mathematics, and AI Policy. </p>
                    <p>My background reflects the breadth and depth that come with a STEM-focused liberal arts education. I've taken a wide range of courses—from compilers and computer vision to mobile robotics, nonlinear dynamics, and numerical methods—using an equally diverse set of languages, including C, C++, OCaml, MATLAB, and Python.</p>
                    <p>Beyond the classroom, I serve as Vice President of the <ContentLink text="Swarthmore College Computer Society" link ="https://www.sccs.swarthmore.edu/" />, a long-standing student-led organization that provides services to the broader student body. I've also been a teaching assistant for five semesters' worth of computer science and engineering courses, and I currently lead Swarthmore's rock climbing club as president. When I'm not working with computers, you can usually find me watching the Patriots, gaming with friends, or exploring new music!</p>
                </div>
            </ContentDiv>
            <ContentDiv col = {1}>
                <div className = "relative spotify-grad w-full h-full rounded-md flex flex-col items-center max-w-sm mx-auto pb-8">
                    <Image src="/about_icons/spotify_pfp.svg" alt="" className = "w-44 top-0 -translate-y-1/2 absolute left-1/2 -translate-x-1/2" width={48} height={48} />
                    <Image src="/about_icons/spotify.svg" alt="" className="w-8 h-8 absolute right-4 top-4" width={12} height={12} />
                    <p className={`mt-24 text-white text-lg md:text-2xl ${sora.className} font-light`}>@NickFet</p>
                    <div className="mt-4 flex justify-center gap-3 items-center">
                        <Image src="/about_icons/music.svg" alt="" className="w-5 h-5" width={12} height={12} />
                        <p className={`text-[#B9B8B8] text-md md:text-lg ${sora.className} font-light`}>Favorite song right now:</p>
                    </div>
                    <div className = {`text-[#EFEEEE] text-center ${space.className} mt-2 mb-5 text-lg`}>
                        <p className='font-medium'>Don't Stop</p>
                        <p className='font-light'>Red Hot Chili Peppers</p>
                    </div>
                    <Image src="/will_delete/rhcp.png" alt = "RHCP" className = "w-2/5" width={1000} height={1000}/>
                </div>
            </ContentDiv>
        </div>
        <ContentDiv>
            <h1 className={`${space.className} text-white font-medium text-lg md:text-2xl`}>Professional Work Experience</h1>
            <p className={`${sora.className} mb-8 font-light text-[#DBE8E9]`}>Alternatively, download my resume <ContentLink text="here" link="resume" />.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
                {
                    workItems.map((item, idx) => {
                        // gotta be a better way to do this!
                        let lines = idx === workItems.length -1 ? <></> : <div className="h-px col-span-full bg-white/10 text-sm md:text-md" />;
                        
                        return (
                            <Fragment key = {idx}>
                                <WorkItem {...item} />
                                {lines}
                            </Fragment>
                        )
                    })
                }
            </div>
        </ContentDiv>
    </div>
    );
}