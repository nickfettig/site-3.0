export type WorkItemType = {icon_path: string, employer: string, role: string, employment_dates: string, description: string}

export const workItems: WorkItemType[] = [
    {
        icon_path: "/about_icons/swarthmore.svg", 
        employer: "Swarthmore College", 
        role: "Teacher's Assistant", 
        employment_dates: "August 2023 - Current",
        description: "I TA for intro to intermediate level computer science and engineering courses for both the Computer Science and Engineering departments. I work directly with students to assist with homework, labwork, and test preperation. I also had a short stint as a live model for an art class!"
    },
    {
        icon_path: "/about_icons/reliable.svg", 
        employer: "Reliable Robotics", 
        role: "Software Engineering Intern", 
        employment_dates: "May - August 2025",
        description: "I designed, developed, and tested mission-critical display systems for remote operation of automated aircraft. I primarily worked on “big board,” a large-scale mission-critical display, primarily developed in LitJS and deployed on an AWS EC2 instance. I worked with ADSB flight data and set up the foundation for integration of telemetered aircraft data into big board."
    },
    {
        icon_path: "/about_icons/cmu.svg", 
        employer: "Carnegie Mellon University School of Computer Science", 
        role: "Undergraduate Research Assistant", 
        employment_dates: "May - August 2024",
        description: "I research deployment challenges for Reinforcement Learning-based Traffic Signal Control (TSC). I have organized 200+ works in the RL-based TSC field into a novel deployment challenge classification taxonomy. I have continued to work for CMU's AI for Social Good lab remotely since the conclusion of my summer REU program."
    },
]