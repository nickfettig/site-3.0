export type WorkItemType = {
  icon_path: string;
  employer: string;
  role: string;
  employment_dates: string;
  description: string;
};

export const workItems: WorkItemType[] = [
  {
    icon_path: "/about_icons/spacex.svg",
    employer: "SpaceX",
    role: "Incoming Software Engineering Intern",
    employment_dates: "Starting January 2027",
    description: "Incoming role for Spring 2027.",
  },
  {
    icon_path: "/about_icons/umich.svg",
    employer: "University of Michigan Robotics Department",
    role: "Graduate Researcher",
    employment_dates: "September 2026 - Current",
    description:
      "I research digital twin synchronization in the U-M SMART Lab, part of the NSF Center for Digital Twins in Manufacturing, currently focusing on syncing actuator currents between a machine and its twin.",
  },
  {
    icon_path: "/about_icons/shinkei.svg",
    employer: "Shinkei Systems",
    role: "Software Engineering Intern",
    employment_dates: "May - August 2026",
    description:
      "I worked across the robotics stack for automated seafood processing. My main focus was in-motion weight estimation: reading load-cell data over EtherCAT and building a per-fish weight-extraction pipeline.",
  },
  {
    icon_path: "/about_icons/reliable.svg",
    employer: "Reliable Robotics",
    role: "Software Engineering Intern",
    employment_dates: "May - August 2025",
    description:
      "I developed “Big Board,” a mission-critical display for remote pilots operating automated aircraft, built in LitJS on AWS EC2. I integrated live ADS-B flight data and laid the groundwork for aircraft telemetry.",
  },
  {
    icon_path: "/about_icons/cmu.svg",
    employer: "Carnegie Mellon University School of Computer Science",
    role: "Undergraduate Research Assistant",
    employment_dates: "May - August 2024",
    description:
      "I researched deployment challenges for RL-based traffic signal control in CMU's AI for Social Good lab, organizing 200+ works into a novel taxonomy of deployment challenges.",
  },
  {
    icon_path: "/about_icons/swarthmore.svg",
    employer: "Swarthmore College",
    role: "Teaching Assistant",
    employment_dates: "August 2023 - May 2026",
    description:
      "I was a TA for introductory and intermediate-level CS and Engineering courses, helping students with homework, labs, and test prep. I also had a short stint as a live model for an art class!",
  },
];
