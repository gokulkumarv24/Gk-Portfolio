import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },

  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Firebase", level: 75, category: "backend" },
  { name: "SQL", level: 80, category: "backend" },

  { name: "Python", level: 90, category: "programming" },
  { name: "Java", level: 75, category: "programming" },
    { name: "C/C++", level: 70, category: "programming" },
    { name: "C#", level: 70, category: "programming" },
    { name: "JavaScript (Node.js)", level: 85, category: "programming" },

  { name: "Pandas", level: 85, category: "ai-ml" },
  { name: "NumPy", level: 85, category: "ai-ml" },
  { name: "Scikit-learn", level: 80, category: "ai-ml" },
  { name: "TensorFlow", level: 75, category: "ai-ml" },
  { name: "OpenCV", level: 70, category: "ai-ml" },
  { name: "Jupyter Notebook", level: 85, category: "ai-ml" },

  { name: "CEH Fundamentals", level: 80, category: "cybersecurity" },
  { name: "Network Security", level: 80, category: "cybersecurity" },
  { name: "Malware Analysis", level: 85, category: "cybersecurity" },
  { name: "Burp Suite", level: 75, category: "cybersecurity" },
  { name: "Wireshark", level: 75, category: "cybersecurity" },
  { name: "Kali Linux", level: 80, category: "cybersecurity" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Docker (Basics)", level: 65, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Netlify", level: 85, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
  { name: "Heroku", level: 80, category: "tools" },
  { name: "Google Cloud Platform (GCP)", level: 70, category: "tools" }
];

const categories = [ 'frontend', 'backend', 'programming', 'ai-ml', 'cybersecurity', 'tools','all'];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    );
    return <section
        id="skills"
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className=" flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize"
                            ,activeCategory === category ?"bg-primary text-primary-foreground": "bg-secondary/70 text-foreground hover:bg-secondary/80"
                        )}
                    >{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSkills.map((skill, key) =>(
                    <div key={key} className="bg-card p-6 rounded-3xl shadow-xs  card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg text-glow">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                            <div
                                className="bg-primary h-2 rounded-full test-glow origin-left animate-[grow_1.5s_ease-"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                        <div className="text-right text-sm text-secondary mt-2">
                            <span>{skill.level }%</span>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    </section>
 }
