export type ProjectType = {
  title: string;
  link: string;
  bg_image_src: string;
  skills: string[];
  description: string;
};

export const projects: ProjectType[] = [
  {
    title: "SEPTA Train Station Display",
    link: "https://blog.fettig.dev/building-a-train-station-display/",
    bg_image_src: "/portfolio_bg/septa.png",
    skills: ["Python", "Raspberry Pi", "Embedded Systems", "CAD", "Linux"],
    description:
      "Senior capstone project at Swarthmore: a real-time SEPTA transit display built with Raspberry Pi-driven LED panels, a custom CAD-designed enclosure, and Python software polling live arrival data from SEPTA's transit API.",
  },
  {
    title: "MoCoVax",
    link: "https://www.youtube.com/watch?v=0RwvzJ4OUs8",
    bg_image_src: "/portfolio_bg/mocovax.png",
    skills: ["HTML5", "TailwindCSS", "ExpressJS", "NodeJS"],
    description:
      "A website created in March 2021 to monitor where vaccines were available in Montgomery County, MD. Over the two and a half months the website was active, it received 120k+ visits and helped hundreds of people receive vaccinations.",
  },
  {
    title: "ResNet Fish Classifier",
    link: "/resnet_fish.pdf",
    bg_image_src: "/portfolio_bg/fish_with_mask.png",
    skills: ["Python", "TensorFlow", "Machine Learning", "Computer Vision"],
    description:
      "Co-authored a CS63 course paper building two ResNet50-based fish classifiers: one using ImageNet transfer learning, one using early fusion with segmentation masks. The early fusion model reached 97.22% accuracy classifying 9 fish species.",
  },
  {
    title: "Home Server",
    link: "https://blog.fettig.dev/new-build-home-server/",
    bg_image_src: "/portfolio_bg/homeserver.png",
    skills: [
      "Linux Administration",
      "Docker",
      "Networking",
      "Security",
      "Cloudflare Tunneling",
    ],
    description:
      "I run an Ubuntu server at home to host containerized services like my personal site and Jellyfin, securely exposed using Cloudflare Tunnels.",
  },
  {
    title: "SCCS Mailing Lists",
    link: "https://www.sccs.swarthmore.edu/docs",
    bg_image_src: "/portfolio_bg/lists.png",
    skills: [
      "NextJS",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Figma",
    ],
    description:
      "I served as the project lead for Mailing Lists, building a frontend for GNU Mailman with features for student organization management, list filtering, and extended settings stored in a SQL database.",
  },
  {
    title: "SCCS Cygnet",
    link: "https://www.sccs.swarthmore.edu/docs",
    bg_image_src: "/portfolio_bg/cygnet.png",
    skills: ["NextJS", "TailwindCSS", "MariaDB", "Prisma", "Docker", "Figma"],
    description:
      "Student directory for Swarthmore College developed and hosted by the Swarthmore College Computer Society. I migrated the 11-year-old Django version to NextJS with increased customizability, faster image-load speeds, and new database access controls.",
  },
  {
    title: "ComplyVue",
    link: "https://www.threewiresys.com/complyvue",
    bg_image_src: "/portfolio_bg/complyvue.png",
    skills: [
      "NextJS",
      "TailwindCSS",
      "ExpressJS",
      "NodeJS",
      "Docker",
      "Kubernetes",
      "Skaffold",
    ],
    description:
      "I interned at Graphicient LLC, contributing to ComplyVue, a cybersecurity dashboard for Three Wire Systems that aggregates DoD-secured data sources like Tenable to streamline compliance monitoring.",
  },
  {
    title: "Swift Music (Hackathon Winner)",
    link: "https://showcase.codeday.org/project/ckpt58ak133245210quu8kuml3b",
    bg_image_src: "/portfolio_bg/swift.png",
    skills: ["HTML5", "TailwindCSS", "ElectronJS", "ExpressJS", "NodeJS"],
    description:
      "Swift Music was created as a replacement for YouTube Music to bypass advertisements and organize YouTube videos and songs. The project won the Audience's Choice award.",
  },
  {
    title: "Pandemic Assistant (Hackathon Winner)",
    link: "https://devpost.com/software/pandemic-assistant",
    bg_image_src: "/portfolio_bg/pandemic.jpeg",
    skills: ["HTML5", "TailwindCSS", "Python", "Flask", "React Native", "Expo"],
    description:
      "A webapp that uses pandemic data to visualize its spread, created at the height of the COVID-19 pandemic. The project won the Best Health Tech award.",
  },
];

export type Category =
  | "Frontend"
  | "Backend"
  | "Systems"
  | "Hardware"
  | "Machine Learning"
  | "Database";

// Order of the portfolio filter buttons.
export const categoryOrder = [
  "All",
  "Frontend",
  "Backend",
  "Systems",
  "Hardware",
  "Machine Learning",
  "Database",
] as const;

// Which higher-level bucket each skill belongs to. A project belongs to a
// category if any of its skills map to it. Skills not listed here (if added
// later) simply don't affect filtering until mapped.
export const skillCategories: Record<string, Category> = {
  HTML5: "Frontend",
  TailwindCSS: "Frontend",
  NextJS: "Frontend",
  ElectronJS: "Frontend",
  Expo: "Frontend",
  "React Native": "Frontend",
  Figma: "Frontend",
  ExpressJS: "Backend",
  NodeJS: "Backend",
  Flask: "Backend",
  Python: "Backend",
  "Linux Administration": "Systems",
  Linux: "Systems",
  Docker: "Systems",
  Networking: "Systems",
  Security: "Systems",
  "Cloudflare Tunneling": "Systems",
  Kubernetes: "Systems",
  Skaffold: "Systems",
  "Raspberry Pi": "Hardware",
  "Embedded Systems": "Hardware",
  CAD: "Hardware",
  TensorFlow: "Machine Learning",
  "Machine Learning": "Machine Learning",
  "Computer Vision": "Machine Learning",
  PostgreSQL: "Database",
  MariaDB: "Database",
  Prisma: "Database",
};

export function projectCategories(project: ProjectType): Set<Category> {
  const cats = new Set<Category>();
  for (const skill of project.skills) {
    const cat = skillCategories[skill];
    if (cat) cats.add(cat);
  }
  return cats;
}
