import { ProjectType } from "@/data/portfolio";
import { mono, sans } from "@/app/fonts";
import Image from "next/image";

export default function ProjectCard({ title, link, bg_image_src, skills, description }: ProjectType) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 text-ink shadow transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg"
        >
            <div className="relative h-52 w-full overflow-hidden">
                <Image
                    src={bg_image_src}
                    alt={`Screenshot of ${title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className={`${mono.className} text-lg font-semibold tracking-tight transition-colors group-hover:text-accent`}>
                    {title}
                </h3>
                <p className={`${sans.className} mt-2 text-sm font-light leading-relaxed text-ink/85`}>
                    {description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {skills.map((skill, id) => (
                        <span key={id} className={`${mono.className} rounded-full bg-white/10 px-3 py-1 text-xs text-ink/90`}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}
