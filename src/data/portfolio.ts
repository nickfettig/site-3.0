export type ProjectType = {title: string, link: string, bg_image_src: string, skills: string[], description: string};

export const projects: ProjectType[] = [
    {
        title: "MoCoVax",
        link: "https://www.youtube.com/watch?v=0RwvzJ4OUs8",
        bg_image_src: "/portfolio_bg/mocovax.png",
        skills: ["HTML5", "TailwindCSS", "ExpressJS", "NodeJS"],
        description: "A website created in March 2021 to monitor where vaccines were available in Montgomery County, MD. Over the two and a half months the website was active, it recieved 120k+ visits and helped hundreds of people recieve vaccinations."
    },
    {
        title: "SCCS Mailing Lists",
        link: "https://www.sccs.swarthmore.edu/docs",
        bg_image_src: "/portfolio_bg/lists.png",
        skills: ["NextJS", "TailwindCSS", "PostgreSQL", "Prisma", "Docker", "Figma"],
        description: "I'm the project lead for Mailing Lists, building a frontend for GNU Mailman with features for organization management, list filtering, and extended settings stored in a linked database."
    },
    {
        title: "SCCS Cygnet",
        link: "https://www.sccs.swarthmore.edu/docs",
        bg_image_src: "/portfolio_bg/cygnet.png",
        skills: ["NextJS", "TailwindCSS", "MariaDB", "Prisma", "Docker", "Figma"],
        description: "Student directory for Swarthmore College developed and hosted by the Swarthmore College Computer Society. I migrated the 11-year old Django version to NextJS with increased customizability, faster image-load speeds, and new database access controls."
    },
    {
        title: "ComplyVue",
        link: "https://www.threewiresys.com/complyvue",
        bg_image_src: "/portfolio_bg/complyvue.png",
        skills: ["NextJS", "TailwindCSS", "ExpressJS", "NodeJS", "Docker", "Kubernetes", "Skaffold"],
        description: "I interned at Graphicient LLC, contributing to ComplyVue, a cybersecurity dashboard for Three Wire Systems that aggregates DoD-secured data sources like Tenable to streamline compliance monitoring."
    },
    {
        title: "Swift Music (Hackathon Winner)",
        link: "https://showcase.codeday.org/project/ckpt58ak133245210quu8kuml3b",
        bg_image_src: "/portfolio_bg/swift.png",
        skills: ["HTML5", "TailwindCSS", "ElectronJS", "ExpressJS", "NodeJS"],
        description: "Swift Music was created as a replacement for youtube music to bypass advertisements and organize youtube videos and songs. The project won the Audience's Choice award."
    },
    {
        title: "Pandemic Assistant (Hackathon Winner)",
        link: "https://devpost.com/software/pandemic-assistant",
        bg_image_src: "/portfolio_bg/pandemic.jpeg",
        skills: ["HTML5", "TailwindCSS", "Python", "Flask", "React Native", "Expo"],
        description: "A webapp that uses pandemic data to visualize it's spread. We created a website using HTML/CSS and an application using Expo/React-Native. The project won the Best Health Tech award."
    }
]