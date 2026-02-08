import HeroImage from "/assets/foto_profile.webp";

const Image = {
  HeroImage,
};

export default Image;

import ReactJSImage from "/assets/tools/reactjs.png";
import TailwindImage from "/assets/tools/tailwind.png";
import JSImage from "/assets/tools/js.png";
import TSImage from "/assets/tools/typescript.png";
import GoImage from "/assets/tools/go.png";
import NodeJSImage from "/assets/tools/nodejs.png";
import GitImage from "/assets/tools/git.png";
import GithubImage from "/assets/tools/github.png";
import PHPImage from "/assets/tools/php.png";
import LaravelImage from "/assets/tools/laravel.png";
import PythonImage from "/assets/tools/python.png"
import SQLImage from "/assets/tools/database.png"
import ExcelImage from "/assets/tools/excel.png"
import PowerBIImage from "/assets/tools/power_bi.png"

export const listTools = [
  {
    id: 1,
    image: PythonImage,
    name: "Python",
  },
  {
    id: 2,
    image: SQLImage,
    name: "SQL",
  },
  {
    id: 3,
    image: ExcelImage,
    name: "Excel",
  },
  {
    id: 4,
    image: PowerBIImage,
    name: "Power BI",
  },
  {
    id: 5,
    image: JSImage,
    name: "Javascript",
  },
  {
    id: 6,
    image: TSImage,
    name: "TypeScript",
  },
  {
    id: 7,
    image: GoImage,
    name: "Go",
  },
  {
    id: 8,
    image: NodeJSImage,
    name: "Node JS",
  },
  {
    id: 9,
    image: GitImage,
    name: "Git",
  },
  {
    id: 10,
    image: GithubImage,
    name: "Github",
  },
  {
    id: 11,
    image: ReactJSImage,
    name: "ReactJS",
  },
  {
    id: 12,
    image: TailwindImage,
    name: "TailwindJS",
  },
  {
    id: 13,
    image: PHPImage,
    name: "PHP",
  },
  {
    id: 14,
    image: LaravelImage,
    name: "Laravel",
  },
];

import FixUImage from "/assets/proyek/fixu.png";
import TBPImage from "/assets/proyek/tbp-center.gif";
import MedyumImage from "/assets/proyek/not-medyum.png";
import EcommerceDashboard from "/assets/proyek/analytics-dashboard.png"


export const listProjects = [
  {
    id: 1,
    image: FixUImage,
    name: "FixU: Depression Detection App",
    description: "FixU is an innovative depression detection app that leverages the power of artificial neural network to accurately assess the user's mental state. With a focus on accessibility and personalization, this app provides tailored feedback to support users on their journey toward mental health.",
    tools: ["Android Studio", "Kotlin", "Firebase"],
    webLink: "https://github.com/7innovations/fixu-mobile-development/releases/tag/v1.0.1",
    codeLink: "https://github.com/7innovations/fixu-mobile-development"
  },
  {
    id: 2,
    image: TBPImage,
    name: "To Be Profesional Center",
    description: "To Be Professional Center is a consulting, training, and professional development service for both individuals and organizations. This website was built to introduce, explain, and manage the training schedule",
    tools: ["Laravel", "TailwinCSS", "MySQL", "AlpineJS"],
    webLink: "",
    codeLink: "https://github.com/farhanhr/tbp-center"
  },
  {
    id: 3,
    image: MedyumImage,
    name: "Not Medyum Rest API",
    description: "A minimalist content publishing rest API with Go. Built with Hexagonal Architecture and several services like supabase for database and imagekit for storage.",
    tools: ["Go", "Fiber", "Supabase", "ImageKit"],
    webLink: "",
    codeLink: "https://github.com/farhanhr/go-api-hex-architecture"
  },
  {
    id: 4,
    image: EcommerceDashboard,
    name: "Ecommerce Analytics Dashboard",
    description: "A minimalist content publishing rest API with Go. Built with Hexagonal Architecture and several services like supabase for database and imagekit for storage.",
    tools: ["Python", "Streamlit", "Pandas", "Matplotlib"],
    webLink: "https://e-commerce-dashboard-kstx6nvwsgenzs29m2kkme.streamlit.app/",
  },
];
