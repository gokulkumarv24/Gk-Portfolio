export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tech Company",
      role: "Software Engineer",
      period: "Jan 2023 - Present",
      description:
        "Developed scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality products.",
      skills: ["React", "Node.js", "Agile", "REST APIs"],
    },
    {
      company: "Startup Inc.",
      role: "Frontend Developer Intern",
      period: "Jun 2022 - Dec 2022",
      description:
        "Built responsive UI components and improved website performance. Worked closely with designers and backend developers.",
      skills: ["React", "Tailwind CSS", "Figma"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work{" "}
          <span className="text-primary">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-3xl shadow-xs card-hover"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground mb-2">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};