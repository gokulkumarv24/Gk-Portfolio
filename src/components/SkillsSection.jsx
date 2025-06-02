import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95, category: "frontend" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90, category: "frontend" },
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90, category: "frontend" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 85, category: "frontend" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 90, category: "frontend" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 85, category: "frontend" },

  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 85, category: "backend" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 80, category: "backend" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80, category: "backend" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 75, category: "backend" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 80, category: "backend" },

  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 90, category: "programming" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 75, category: "programming" },
  { name: "C/C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 70, category: "programming" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", level: 70, category: "programming" },
  { name: "JavaScript (Node.js)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85, category: "programming" },

  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", level: 85, category: "ai-ml" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", level: 85, category: "ai-ml" },
  { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", level: 80, category: "ai-ml" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", level: 75, category: "ai-ml" },
  { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg", level: 70, category: "ai-ml" },
  { name: "Jupyter Notebook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", level: 85, category: "ai-ml" },

  { name: "CEH Fundamentals", logo: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-hacker-computer-security-flaticons-lineal-color-flat-icons.png", level: 80, category: "cybersecurity" },
  { name: "Network Security", logo: "https://img.icons8.com/color/48/network-security.png", level: 80, category: "cybersecurity" },
  { name: "Malware Analysis", logo: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-virus-computer-science-flaticons-lineal-color-flat-icons.png", level: 85, category: "cybersecurity" },
  { name: "Burp Suite", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Burp_Suite_Logo.png", level: 75, category: "cybersecurity" },
  { name: "Wireshark", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Wireshark_Logo.svg", level: 75, category: "cybersecurity" },
  { name: "Kali Linux", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kali-dragon-icon.svg", level: 80, category: "cybersecurity" },

  { name: "Git/GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90, category: "tools" },
  { name: "Postman", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg", level: 85, category: "tools" },
  { name: "Docker (Basics)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 65, category: "tools" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 95, category: "tools" },
  { name: "Netlify", logo: "https://www.netlify.com/v3/img/components/logomark.png", level: 85, category: "tools" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico", level: 85, category: "tools" },
  { name: "Heroku", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg", level: 80, category: "tools" },
  { name: "Google Cloud Platform (GCP)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", level: 70, category: "tools" }
];


const categories = [ 'frontend', 'backend', 'programming', 'ai-ml', 'cybersecurity', 'tools','all'];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    );
    return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredSkills.map((skill, key) => (
              <div key={key} className="bg-card p-6 rounded-3xl shadow-xs card-hover flex flex-col items-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 mb-3"
                  loading="lazy"
                />
                <h3 className="font-semibold text-lg text-glow text-center">{skill.name}</h3>
                <div className="w-full bg-secondary/50 rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-primary h-2 rounded-full test-glow origin-left"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right text-sm text-secondary mt-2 w-full">
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
