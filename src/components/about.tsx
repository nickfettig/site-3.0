import { sans, mono } from "@/app/fonts";
import ContentDiv from "./common/content-div";
import ContentLink from "./common/contentlink";
import SectionHeader from "./common/section_header";
import WorkItem from "./common/work-item";
import { workItems } from '@/data/work';
import { Fragment } from "react";

export default function About() {
    return (
    <div id = "about" className="max-w-7xl mx-auto scroll-mt-8">
        <SectionHeader header="ABOUT ME"/>
        <div className="mt-8 md:mt-10 flex flex-col gap-8">
            <ContentDiv>
                <div className = {`${sans.className} flex flex-col text-ink gap-4 text-md md:text-lg font-light leading-relaxed`}>
                    <p>I'm a senior at <ContentLink text="Swarthmore College" link ="https://www.swarthmore.edu/" /> completing a B.A. in Computer Science and a B.S. in General Engineering. I'm currently applying to graduate programs with interests spanning Human-Computer Interaction, Robotics, Computational Mathematics, and Trustworthy AI. </p>
                    <p>My background reflects the breadth and depth that come with a STEM-focused liberal arts education. I've taken a wide range of courses—from compilers and computer vision to mobile robotics, nonlinear dynamics, and numerical methods—using an equally diverse set of languages, including C, C++, OCaml, MATLAB, and Python.</p>
                    <p>Beyond the classroom, I serve as Vice President of the <ContentLink text="Swarthmore College Computer Society" link ="https://www.sccs.swarthmore.edu/" />, a long-standing student-led organization that provides services to the broader student body. I've also been a teaching assistant for five semesters' worth of computer science and engineering courses, and I currently lead Swarthmore's rock climbing club as president. When I'm not working with computers, you can usually find me watching the Patriots, gaming with friends, or exploring new music!</p>
                </div>
            </ContentDiv>
            <ContentDiv>
                <h3 className={`${mono.className} text-white font-semibold text-lg md:text-2xl`}>Professional Work Experience</h3>
                <p className={`${sans.className} mb-8 font-light text-ink`}>Alternatively, download my resume <ContentLink text="here" link="resume" />.</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
                    {
                        workItems.map((item, idx) => {
                            const line = idx === workItems.length - 1 ? null : <div className="h-px col-span-full bg-white/10" />;
                            return (
                                <Fragment key = {idx}>
                                    <WorkItem {...item} />
                                    {line}
                                </Fragment>
                            )
                        })
                    }
                </div>
            </ContentDiv>
        </div>
    </div>
    );
}
