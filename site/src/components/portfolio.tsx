import { sora } from "@/app/fonts";
import SectionHeader from "./common/section_header";
import { projects } from "@/data/portfolio";
import Project from "./common/skills";

export default function Portfolio() {
    return (
    <div id = "portfolio">
        <SectionHeader header="PROJECT PORTFOLIO"/>
        <div className={`${sora.className} w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-8 transition duration-300`}>
            {projects.map((project, id) => {
                return (
                    <Project key = {id} {...project}/>
                )
            })}
        </div>
    </div>
    );
}