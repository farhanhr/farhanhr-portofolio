import HeroImage from "/assets/foto_profile.png";

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

export const listTools = [

  {
    id: 1,
    image: JSImage,
    name: "Javascript",
  },
  {
    id: 2,
    image: TSImage,
    name: "TypeScript",
  },
  {
    id: 3,
    image: GoImage,
    name: "Go",
  },
  {
    id: 4,
    image: NodeJSImage,
    name: "Node JS",
  },
  {
    id: 5,
    image: GitImage,
    name: "Git",
  },
  {
    id: 6,
    image: GithubImage,
    name: "Github",
  },
  {
    id: 7,
    image: ReactJSImage,
    name: "ReactJS",
  },
  {
    id: 8,
    image: TailwindImage,
    name: "TailwindJS",
  },
  {
    id: 9,
    image: PHPImage,
    name: "PHP",
  },
  {
    id: 10,
    image: LaravelImage,
    name: "Laravel",
  },
];

import FixUimage from "/assets/proyek/fixu.png";
import TBPimage from "/assets/proyek/tbp-center.gif";


export const listProjects = [
  {
    id: 1,
    image: FixUimage,
    name: "FixU: Depression Detection App",
    description: "FixU is an innovative depression detection app that leverages the power of artificial neural network to accurately assess the user's mental state. With a focus on accessibility and personalization, this app provides tailored feedback to support users on their journey toward mental health.",
    tools: ["Android Studio", "Kotlin", "Firebase"],
    webLink: "https://github.com/7innovations/fixu-mobile-development/releases/tag/v1.0.1",
    codeLink: "https://github.com/7innovations/fixu-mobile-development"
  },
  {
    id: 2,
    image: TBPimage,
    name: "To Be Profesional Center",
    description: "To Be Professional Center is a consulting, training, and professional development service for both individuals and organizations. This website was built to introduce, explain, and manage the training schedule",
    tools: ["Laravel", "TailwinCSS", "MySQL", "AlpineJS"],
    webLink: "",
    codeLink: ""
  },
];
