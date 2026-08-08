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
  { value: 8.87, suffix: "", decimals: 2, label: "CGPA / 10" },
  { value: 650, suffix: "+", decimals: 0, label: "DSA Problems Solved" },
  { value: 100, suffix: "+", decimals: 0, label: "Extension Users" },
  { value: 1, suffix: "st", decimals: 0, label: "CodeFOT DSA Competition" },
];

export const skillGroups = [
  { title: "Programming Languages", items: ["C", "C++", "JavaScript", "TypeScript", "Python"] },
  { title: "Frontend", items: ["React.js", "Redux", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "microservices",
      "JWT",
      "WebSocket",
      "WebRTC",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "PyTorch",
      "CNNs",
      "RNN",
      "Transformers",
      "KNN",
      "Decision Trees",
      "Neural Networks",
      "NLP",
      "LangChain",
      "LangGraph",
    ],
  },
  { title: "Databases", items: ["SQL", "MongoDB", "SQLAlchemy", "Mongoose", "Supabase"] },
  { title: "Cloud & Tools", items: ["AWS", "S3", "Lambda", "EC2", "Git", "GitHub"] },
  {
    title: "Other",
    items: ["Data Structures & Algorithms", "OOP", "Chrome Extension Development"],
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
    category: "Full-Stack • Microservices",
    short:
      "A microservices grievance platform with 90%+ complaint classification accuracy and 70% faster routing.",
    problem:
      "Grievances pile up in shared inboxes and get routed by hand, delaying resolution and losing accountability.",
    solution:
      "Built an AI-driven grievance management platform using Microservices Architecture, achieving 90%+ complaint classification accuracy and 70% faster grievance routing through NLP-based automation.",
    approach: [
      "Microservices architecture separating intake, classification and routing concerns.",
      "NLP classification model mapping complaints to the right department.",
      "Flask services backed by SQL for persistence and auditability.",
    ],
    results: ["90%+ complaint classification accuracy.", "70% faster grievance routing."],
    tech: ["Python", "Flask", "NLP", "Microservices", "SQL", "AI/ML"],
    github: "https://github.com/suzain9084/AI-Based-Grivance-Management-System",
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
    title: "650+ LeetCode Problems",
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
    cgpa: "8.87",
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
