import { sans, mono } from "@/app/fonts";
import ContentDiv from "./common/content-div";
import ContentLink from "./common/contentlink";
import SectionHeader from "./common/section_header";
import WorkItem from "./common/work-item";
import { workItems } from "@/data/work";
import { blurDataURLs } from "@/data/images";
import Image from "next/image";
import { Fragment } from "react";

export default function About() {
  return (
    <div id="about" className="mx-auto max-w-7xl scroll-mt-8">
      <SectionHeader header="ABOUT ME" />
      <div className="mt-8 flex flex-col gap-8 md:mt-10">
        <ContentDiv>
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-sm shrink-0 overflow-hidden rounded-lg shadow-lg ring-1 ring-white/10 md:mx-0 md:w-2/5 md:max-w-none">
              <Image
                src="/scenery/hitl.webp"
                alt="Nick soldering wiring on a robotics rig, surrounded by orange cabling"
                fill
                placeholder="blur"
                blurDataURL={blurDataURLs.hitl}
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover object-[50%_42%]"
              />
            </div>
            <div
              className={`${sans.className} text-ink text-md flex flex-col gap-4 leading-relaxed font-light md:justify-center md:text-lg`}
            >
              <p>
                I'm a recent graduate of{" "}
                <ContentLink
                  text="Swarthmore College"
                  link="https://www.swarthmore.edu/"
                />
                , having completed a B.A. in Computer Science and a B.S. in
                General Engineering. I will be starting my M.S. in Robotics at
                the{" "}
                <ContentLink
                  text="University of Michigan"
                  link="https://robotics.umich.edu/"
                />{" "}
                in the Fall of 2026. I'm currently looking for research
                opportunities in controls, RL, sim-to-real, or mobile robotics
                to get a feel for what I'd like to study for a PhD. If your lab
                has any opportunities in one of these areas, please reach out!
              </p>
              <p>
                My background reflects the breadth and depth that come with a
                STEM-focused liberal arts education. I've taken a wide range of
                courses -- from compilers and computer vision to mobile
                robotics, nonlinear dynamics, and numerical methods -- using an
                equally diverse set of languages, including C, C++, OCaml,
                MATLAB, and Python. I've had the opportunity to complete
                robotics internships at{" "}
                <ContentLink
                  text="Reliable Robotics"
                  link="https://reliable.co/"
                />{" "}
                and{" "}
                <ContentLink
                  text="Shinkei Systems"
                  link="https://shinkei.systems/"
                />
                , which have helped to hone my focus on mechatronics and
                human-machine interaction. I'm most motivated by problems that
                target societal inefficiencies and drive innovation for good.
              </p>
              <p>
                When I'm not working with robots and computers, you can usually
                find me watching the Patriots, playing{" "}
                <ContentLink
                  text="chess"
                  link="https://www.chess.com/member/nickfet"
                />
                , or exploring new music!
              </p>
            </div>
          </div>
        </ContentDiv>
        <ContentDiv>
          <h3
            className={`${mono.className} text-lg font-semibold text-white md:text-2xl`}
          >
            Professional Work Experience
          </h3>
          <p className={`${sans.className} text-ink mb-8 font-light`}>
            Alternatively, download my resume{" "}
            <ContentLink text="here" link="resume" />.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            {workItems.map((item, idx) => {
              const line =
                idx === workItems.length - 1 ? null : (
                  <div className="col-span-full h-px bg-white/10" />
                );
              return (
                <Fragment key={idx}>
                  <WorkItem {...item} />
                  {line}
                </Fragment>
              );
            })}
          </div>
        </ContentDiv>
      </div>
    </div>
  );
}
