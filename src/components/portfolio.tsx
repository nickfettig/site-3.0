"use client";

import { useState } from "react";
import { mono } from "@/app/fonts";
import SectionHeader from "./common/section_header";
import { projects, categoryOrder, projectCategories, type Category } from "@/data/portfolio";
import ProjectCard from "./common/project-card";

type Filter = (typeof categoryOrder)[number];

export default function Portfolio() {
    const [active, setActive] = useState<Filter>("All");

    const filtered = active === "All" ? projects : projects.filter((p) => projectCategories(p).has(active as Category));

    return (
        <div id="portfolio" className="max-w-7xl mx-auto scroll-mt-8">
            <SectionHeader header="PROJECT PORTFOLIO" />

            <div className={`${mono.className} mt-6 flex flex-wrap gap-2`}>
                {categoryOrder.map((cat) => {
                    const isActive = cat === active;
                    return (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            aria-pressed={isActive}
                            className={`rounded-full border px-4 py-1.5 text-xs md:text-sm transition-colors ${
                                isActive
                                    ? "border-accent bg-accent text-[#1B2A2B]"
                                    : "border-white/15 bg-white/5 text-ink/80 hover:border-white/30 hover:text-ink"
                            }`}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>

            <div key={active} className="fade-in mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filtered.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
}
