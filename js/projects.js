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
      "A full-stack intelligent quiz platform designed for seamless assessment and real-time performance tracking. Admins can create, manage, and publish quizzes while students attempt exams with instant results and live dashboard insights. Deployed on AWS EC2 for scalable access, integrating LLaMA 3.1 (70B) for AI-driven capabilities and future-ready enhancements.",
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
