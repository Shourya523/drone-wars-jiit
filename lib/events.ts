export interface Event {
    slug: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    color: string;
    category: "TECHNICAL" | "ENTREPRENEURIAL" | "MISCELLANEOUS";
}

export const events: Event[] = [
    {
        slug: "robogames",
        title: "ROBOGAMES",
        date: "March 20, 2026",
        location: "Neo Tokyo Arena",
        description: "Robogames is Techkriti's flagship robotics basket, featuring autonomous and manual drone challenges.",
        image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1000&auto=format&fit=crop",
        color: "primary",
        category: "TECHNICAL",
    },
    {
        slug: "takeoff",
        title: "TAKEOFF",
        date: "April 05, 2026",
        location: "Cyber City Heights",
        description: "This arena celebrates flight, control, and futuristic aerial maneuvers in a high-stakes environment.",
        image: "https://images.unsplash.com/photo-1508614589041-895b9cb92736?q=80&w=1000&auto=format&fit=crop",
        color: "secondary",
        category: "TECHNICAL",
    },
    {
        slug: "software-corner",
        title: "SOFTWARE CORNER",
        date: "April 22, 2026",
        location: "Grand Citadel",
        description: "From rapid quantitative problem-solving to team-based software architecture challenges.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
        color: "accent",
        category: "TECHNICAL",
    },
    {
        slug: "startup-expo",
        title: "STARTUP EXPO",
        date: "May 10, 2026",
        location: "Innovation Hub",
        description: "Showcase your entrepreneurial spirit and pitch to world-class investors.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop",
        color: "yellow",
        category: "ENTREPRENEURIAL",
    },
    {
        slug: "misc-jam",
        title: "DIVERSITY JAM",
        date: "June 15, 2026",
        location: "Common Grounds",
        description: "A celebration of various non-technical talents and creative expressions.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
        color: "cyan",
        category: "MISCELLANEOUS",
    },
];
