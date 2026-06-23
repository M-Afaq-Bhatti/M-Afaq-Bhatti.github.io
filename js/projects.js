/**
 * ============================================================
 * projects.js — Single Source of Truth for All Projects
 * ============================================================
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy the object template below
 * 2. Paste it inside the `projects` array
 * 3. Fill in your details
 * 4. Save the file — your portfolio updates automatically!
 *
 * CATEGORIES available:
 *   "Full Stack" | "AI/ML" | "NLP" | "Computer Vision" | "Automation" | "Other"
 * ============================================================
 */

const projects = [
  {
    id: 1,
    title: "QuizFlow — AI-Powered Quiz & Assessment Platform",
    description:
     "Enterprise-grade AI assessment platform with real-time analytics, instant grading, and live performance dashboards. Built using React, Node.js, MongoDB, AWS EC2, and LLaMA 3.1 (70B).",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Context API",
      "JWT Auth",
      "AWS EC2",
      "LLaMA 3.1 (70B)",
      "REST APIs",
    ],
    category: "Full Stack",
    github: "https://github.com/M-Afaq-Bhatti/quizflow",
    liveDemo: null, // Set to URL string when available, e.g. "https://yourapp.com"
    image: "assets/images/quizflow.jpeg", // Path relative to index.html
    featured: true,
  },
{
  id: 2, // Change to your next id
  title: "HireFlow — Autonomous AI Recruitment Pipeline",
  description:
    "Distributed multi-agent AI hiring platform automating screening, assessments, evaluation, and voice interviews. Built with LLaMA 3 70B, Kafka, Redis, PostgreSQL, Socket.io, and AES-256 encryption.",
  techStack: [
    "Node.js",
    "Express.js",
    "Next.js 14",
    "TypeScript",
    "PostgreSQL",
    "Prisma ORM",
    "Redis",
    "Apache Kafka",
    "Socket.io",
    "Groq AI",
    "LLaMA 3 (70B)",
    "WebRTC",
    "JWT Auth",
    "Docker",
    "AES-256",
  ],
  category: "Full Stack",
  github: "https://github.com/M-Afaq-Bhatti/Hireflow-AI-Recruitment-Platform",
  liveDemo: null,
  image: "assets/images/hireflow.png",
  featured: true,
},

{
  id: 3, // Change to your next id
  title: "LightRAG — FinOps-Optimized GraphRAG Engine",
  description:
    "Production-grade GraphRAG system achieving 95% of Microsoft GraphRAG quality at ~1/6000th the indexing cost. Built with LightRAG, Gemini 2.5 Flash, NanoVectorDB, and GraphML knowledge graphs, supporting five intelligent retrieval modes.",
  techStack: [
    "Python",
    "LightRAG",
    "Gemini 2.5 Flash",
    "FastAPI",
    "React",
    "Vite",
    "NanoVectorDB",
    "NetworkX (GraphML)",
    "Docker",
    "Nginx",
    "AWS EC2",
  ],
  category: "AI/ML",
  github: "https://github.com/M-Afaq-Bhatti/FinOps-Optimized-GraphRAG",
  liveDemo: null,
  image: "assets/images/lightrag.jpeg",
  featured: true,
},


  // ── TEMPLATE — copy & fill in for new projects ──────────────────────────
  // {
  //   id: 2,
  //   title: "Your Project Title",
  //   description: "A short description of what this project does and why it matters.",
  //   techStack: ["Python", "TensorFlow", "FastAPI"],
  //   category: "AI/ML",   // Choose from the categories listed above
  //   github: "https://github.com/M-Afaq-Bhatti/your-repo",
  //   liveDemo: "https://your-live-demo.com",  // or null
  //   image: "assets/images/your-image.jpeg",  // or null for default placeholder
  //   featured: false,
  // },
  // ─────────────────────────────────────────────────────────────────────────
];
