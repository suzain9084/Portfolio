/**
 * Single source of truth for portfolio content.
 * Edit this file to update the site — components read from here.
 * NOTE: replace the *_URL_HERE placeholders with real links.
 */

import resumeAsset from "@/assets/suzain-resume.pdf";

export const resumeUrl = resumeAsset;

export const profile = {
  name: "Suzain",
  email: "suzain@ce.du.ac.in",
  phone: "(+91) 9084357325",
  eyebrow: "Computer Science • AI/ML • Software Engineering",
  headline:
    "Building intelligent systems, scalable applications, and meaningful developer experiences.",
  status: "Open to opportunities",
  links: {
    github: "https://github.com/suzain9084",
    linkedin: "https://www.linkedin.com/in/suzain18/",
    leetcode: "https://leetcode.com/u/suzain123/",
  },
};

export const stats = [
  { value: 8.9, suffix: "", decimals: 2, label: "CGPA / 10" },
  { value: 700, suffix: "+", decimals: 0, label: "DSA Problems Solved" },
  { value: 100, suffix: "+", decimals: 0, label: "Extension Users" },
  { value: 1, suffix: "st", decimals: 0, label: "CodeFOT DSA Competition" },
];

export const skillGroups = [
  { title: "Programming Languages", items: ["C++", "C", "JavaScript", "TypeScript", "Python"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Redux", "HTML", "CSS", "Tailwind CSS"] },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "RabbitMQ",
      "JWT",
      "WebSocket",
      "WebRTC",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "Neural Network",
      "PyTorch",
      "FFNs",
      "CNNs",
      "RNNs",
      "Transformers",
      "NLP",
      "Agentic AI",
      "Langchain",
      "LangGraph",
    ],
  },
  { title: "Databases", items: ["SQL", "MongoDB", "SQLAlchemy", "Mongoose", "Supabase"] },
  { title: "Cloud & Tools", items: ["AWS", "S3", "Lambda", "EC2", "Git", "GitHub"] },
  {
    title: "Core concepts",
    items: [
      "Data Structures & Algorithms",
      "Object Oriented Programming",
      "DBMS",
      "Computer Networks",
      "System Design",
    ],
  },
];

export const experience = [
  {
    role: "React Developer Intern",
    company: "Appeneure Technologies",
    location: "Noida",
    period: "June 2025 – May 2026",
    summary:
      'Worked on "Note In Tabs", a Chrome extension for seamless note-taking across browser tabs, reaching over 100 users.',
    points: [
      "Built and shipped features for a Chrome extension enabling seamless note-taking across browser tabs.",
      "Grew adoption to 100+ users while maintaining a fast, distraction-free note-taking experience.",
      "Worked across the React component architecture, extension APIs and persistent local state.",
    ],
    tech: ["React.js", "JavaScript", "Chrome Extension APIs", "CSS"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  short: string;
  problem: string;
  solution: string;
  approach: string[];
  results: string[];
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "grievance-management",

    title: "AI-Based Grievance Management System",

    category: "Full-Stack • Microservices • AI/ML",

    short:
      "An AI-powered microservices grievance platform that automates complaint classification, routing, and real-time notifications.",

    problem:
      "Grievances in educational institutions are often handled through manual processes, making it difficult to route complaints efficiently, track their status, and maintain accountability.",

    solution:
      "Built an AI-driven grievance management platform using Microservices Architecture, with NLP-based committee classification, multilingual speech-to-text, centralized API routing, and real-time notifications to automate the grievance lifecycle.",

    approach: [
      "Designed a microservices architecture with dedicated User, Grievance, Admin, ML, and Notification services behind a centralized API Gateway.",
      "Implemented NLP-based zero-shot classification using BART-large-MNLI to automatically route grievances to the appropriate committee.",
      "Integrated multilingual speech-to-text and Gemini-based translation to support voice and non-English grievance submissions.",
      "Implemented JWT-based authentication, role-based access control, and API rate limiting across services.",
      "Integrated RabbitMQ for asynchronous notification processing and WebSockets for real-time grievance updates.",
      "Used MySQL with SQLAlchemy for persistent grievance data, user management, analytics, and auditability.",
    ],

    results: [
      "Automated grievance classification and committee routing.",
      "Enabled multilingual voice-based grievance submission.",
      "Real-time grievance notifications through RabbitMQ and WebSockets.",
      "Centralized authentication, routing, and rate limiting through an API Gateway.",
    ],

    tech: [
      "Python",
      "Flask",
      "React",
      "NLP",
      "BART-large-MNLI",
      "Google Gemini",
      "Microservices",
      "RabbitMQ",
      "WebSockets",
      "MySQL",
      "JWT",
      "Docker",
    ],

    github:
      "https://github.com/suzain9084/AI-Based-Grivance-Management-System/tree/micro-service-architecture",
  },

  {
    slug: "playdeck",

    title: "PlayDeck — Browser-Based Multiplayer Party Gaming Platform",

    category: "Full-Stack • Real-Time WebSockets",

    short:
      "A browser-based party gaming platform that turns phones into wireless controllers for real-time multiplayer gaming.",

    problem:
      "Traditional local multiplayer gaming often requires dedicated consoles, controllers, app downloads, or account setup, creating unnecessary friction for casual group gaming.",

    solution:
      "Built PlayDeck, a browser-based multiplayer gaming platform where a TV or laptop acts as the shared screen and players use their phones as wireless controllers, joining instantly through an 8-character room code or QR scan.",

    approach: [
      "Built a FastAPI WebSocket server with room management for real-time player connections, host assignment, lifecycle management, and message broadcasting.",

      "Implemented a React + TypeScript frontend with Redux Toolkit to manage room state, connected players, host navigation, game phases, and active games.",

      "Designed a reusable game architecture separating screen-side game components from mobile controller components, allowing new games to be added through a component mapping system.",

      "Implemented QR-based room joining and an event-driven WebSocket protocol to relay controller inputs between phones and the shared screen.",

      "Deployed the frontend on Vercel and the backend on Render with separate development and production WebSocket configurations.",
    ],

    results: [
      "Enabled real-time multiplayer gaming using phones as wireless controllers without app installation or user accounts.",

      "Created an extensible architecture where new games can be integrated through independent game and controller modules.",
    ],

    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "WebSockets",
      "Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Vitest",
      "Vercel",
      "Render",
    ],

    github: "https://github.com/suzain9084/playdeck",
  },
  {
    slug: "ai-email-agent",
    title: "AI-Email-Agent-LangGraph-Gmail-Google-Calendar-LLM",
    category: "AI Agents",
    short:
      "An AI-powered email agent that analyzes incoming mail, drafts context-aware replies and schedules work — with a human approval step.",
    problem:
      "Email triage and scheduling consume hours of focus time, and fully automated replies are risky without human oversight.",
    solution:
      "Built an AI-powered Email Agent using LangGraph, LangChain and an LLM with Gmail, Google Calendar and web search integration. The agent analyzes emails, generates context-aware replies and supports human approval through a modular workflow.",
    approach: [
      "Modular LangGraph workflow with discrete nodes for classification, retrieval, drafting and approval.",
      "Tool integrations for Gmail, Google Calendar and web search to ground replies in real context.",
      "Human-in-the-loop approval gate before any outbound action is committed.",
    ],
    results: [
      "Context-aware reply drafting across varied email intents.",
      "Calendar-aware scheduling suggestions from email content.",
      "Human approval keeps the agent safe for real inboxes.",
    ],
    tech: ["LangGraph", "LangChain", "LLM", "Gmail", "Google Calendar", "Web Search"],
    github:
      "https://github.com/suzain9084/AI-Email-Assistant-Agent-LangGraph-Gmail-Google-Calendar-LLM",
  },
  {
    slug: "image-captioning",
    title: "Attention-Based Image Captioning",
    category: "Deep Learning",
    short:
      "A CNN + Attention image captioning model that generates context-aware captions with 85%+ semantic accuracy.",
    problem:
      "Plain encoder–decoder captioning models describe images generically and miss the salient regions of a scene.",
    solution:
      "Implemented a deep learning image captioning system using CNN and Attention mechanisms, generating context-aware captions with 85%+ semantic accuracy.",
    approach: [
      "CNN encoder for visual feature extraction, sequence decoder for caption generation.",
      "Attention mechanism aligning generated tokens with relevant image regions.",
      "Training and evaluation pipeline built in PyTorch.",
    ],
    results: [
      "85%+ semantic accuracy on generated captions.",
      "Context-aware, region-grounded descriptions.",
    ],
    tech: ["Python", "PyTorch", "CNN", "Attention", "Deep Learning"],
    github: "https://github.com/suzain9084/image-caption-model",
  },
  {
    slug: "legal-doc-automation",
    title: "Legal Document Automation System",
    category: "NLP • Automation",
    short:
      "End-to-end legal document processing that cuts manual workload by 80% and runs 5× faster than traditional workflows.",
    problem:
      "Legal document workflows are heavily manual, slow to turn around and error-prone at scale.",
    solution:
      "Automated end-to-end legal document processing, reducing manual workload by 80% and processing documents 5× faster than traditional workflows.",
    approach: [
      "Automated ingestion and parsing of legal documents.",
      "NLP-driven extraction and structuring of key clauses and fields.",
      "Pipeline orchestration replacing manual review handoffs.",
    ],
    results: ["80% reduction in manual workload.", "5× faster document processing."],
    tech: ["AI/ML", "NLP", "Document Processing", "Automation"],
    github: "https://github.com/suzain9084/filling-manager",
  },
  {
    slug: "photo-gallery-app",

    title: "Secure Photo Gallery",

    category: "Full-Stack • MERN",

    short:
      "A secure photo management platform for creating accounts, uploading photos, and accessing personal collections.",

    problem:
      "Managing personal photos requires a simple and secure platform where users can store and access their collections without exposing their data to other users.",

    solution:
      "Built a full-stack photo gallery application with user authentication, secure photo uploads, and personal photo management using React.js, Node.js, Express, and MongoDB.",

    approach: [
      "Built a responsive React.js interface for user authentication and seamless photo collection management.",

      "Developed a Node.js and Express backend to handle user accounts, photo uploads, and protected access to personal collections.",

      "Used MongoDB with Mongoose for structured persistence of user and photo-related data.",

      "Implemented user-specific access controls to keep personal photo collections isolated and secure.",
    ],

    results: [
      "Enabled users to securely upload and access their personal photo collections.",

      "Delivered a seamless full-stack experience for managing photos through a user-friendly web interface.",
    ],

    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],

    github: "https://github.com/suzain9084/Photo-Gallery-App",
  },
];

export const achievements = [
  {
    icon: "trophy" as const,
    title: "1st Place — CodeFOT DSA Competition",
    detail:
      "Secured 1st place in the CodeFOT Data Structures & Algorithms Competition conducted by IEEE.",
    tag: "IEEE",
  },
  {
    icon: "medal" as const,
    title: "DTU Execute 4.0 Hackathon",
    detail:
      "Achieved a top 10% ranking among 1,000+ teams at DTU Execute 4.0 Hackathon through the development of a practical and scalable technology solution.",
    tag: "Top 10%",
  },
  {
    icon: "code" as const,
    title: "700+ LeetCode Problems",
    detail:
      "Solved 650+ Data Structures and Algorithms problems on LeetCode using C++, strengthening expertise in algorithms, data structures and problem solving.",
    tag: "C++",
  },
];

export const education = [
  {
    degree: "B.Tech. Computer Science and Engineering (AI & ML)",
    school: "Faculty of Technology, University of Delhi",
    period: "2023 – 2027",
    cgpa: "8.9",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
