export const gradients = {
  green: "bg-gradient-to-r from-emerald-400 via-emerald-400 to-green-400",
  blue: "bg-gradient-to-r from-blue-400 via-blue-400 to-cyan-400",
  purple: "bg-gradient-to-r from-purple-400 via-purple-400 to-violet-400",
  red: "bg-gradient-to-r from-orange-600 via-red-500 to-red-500",
  default: "bg-white/90",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  
  {
    startDate: "September 2024",
    endDate: "December 2024",
    company: "Chez you",
    title: "Software Development Intern",
    description:
      "Improved platform speed by 30% with Node.js optimizations for real-time updates. Led agile delivery to streamline processes and enhance customer satisfaction. Collaborated with React front-end to raise user engagement by 20%. Built Jest-based CI/CD tests reducing production bugs by 35%.",
  },
  {
    startDate: "May 2024",
    endDate: "July 2024",
    company: "Cyder mobile",
    title: "Software Developer Engineer Intern",
    description:
      "Built an Android MVP enabling secure data sharing for rewards, boosting engagement by 40%. Integrated direct bank linking, gamified rewards, and real-time security alerts using Kotlin and XML, laying groundwork for future iOS expansion.",
  },

] as const;

export const projectsData = [

  {
    subtitle: "Spring Boot • Spring Security • Spring Data JPA • PostgreSQL",
    title: "Full stack Employee Platform",
    description: "REST + GraphQL APIs for tasks, projects, and teams, Unit + integration tests using JUnit 5 / Testcontainers. CI/CD pipeline (GitHub Actions) deploying to staging + prod. ",
    gradient: "from-red-400 via-purple-400 to-blue-400",
    link: "https://devpost.com/software/meddibia",
  },

   
  {
  subtitle: "React • Tailwind CSS • Vite",
  title: "Law Firm Website",
  description: "Modern, responsive site with service pages, attorney profiles, and a streamlined contact flow for client inquiries.",
  gradient: "from-blue-400 via-slate-400 to-gray-400",
  link: "https://github.com/your-repo"
  },


  {
    subtitle: "Next.js • Node.js • Express • PostgreSQL",
    title: "Used Transportation E-commerce Platform",
    description: "Product catalog, user accounts, shopping cart, checkout flow, and order history. Admin tools for managing inventory and orders. Clean REST API powering all operations.",
    gradient: "from-blue-400 via-indigo-400 to-purple-400",
    link: "https://github.com/your-repo"
  },

  {
    subtitle: "Python • OpenCV • MediaPipe",
    title: "Gesture Control",
    description: "Your hands. Your commands.",
    gradient: "from-purple-400 via-pink-400 to-red-400",
    link: "https://devpost.com/software/gesture-ai",
  },

  {
  subtitle: "React • Tailwind • Vite • Firebase",
  title: "Housing Market Visualizer",
  description:
    "Interactive visualizer for property prices, trends, and neighborhood stats. Firebase handles auth, Firestore stores listings + regional data, and Cloud Functions preprocess datasets. Frontend renders maps, charts, and filters in real time.",
  gradient: "from-indigo-400 via-blue-400 to-slate-500",
  link: "https://github.com/your-housing-visualizer"
  },

  {
  subtitle: "React • Tailwind • Vite • FastAPI • PostgreSQL • SQLAlchemy • Redis",
  title: "Service Marketplace Platform",
  description:
    "Full marketplace with customer, provider, and admin accounts. FastAPI backend delivers role-based authentication, provider onboarding, service listings, bookings, reviews, messaging, and payments. PostgreSQL stores core data. ",
  gradient: "from-emerald-400 via-sky-400 to-slate-400",
  link: "https://github.com/your-service-marketplace"
  }

] as const;

export const skillsData = [
  {
    icon: "</>",
    title: "Programming Languages ",
    description:
      "including Java, JavaScript, Python,  SQL, and C and C++ ",
  },
  {
    icon: "💻",
    title: "Web & Mobile Development ",
    description:
      "with React.js, Next.js, Node.js, and APIs (REST & GraphQL)",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure ",
    description:
      "using Docker, AWS, Supabase, and Firebase for scalable cloud solutions.",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning ",
    description:
      "with LLMs, OpenCV",
  },
  {
    icon: "🧪",
    title: "Testing & Version Control ",
    description:
      "using Jest, Cypress, JUnit, and Git/GitHub for quality assurance.",
  },
  

] as const;
