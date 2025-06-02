import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const projects = [
	{
		id: 1,
		title: "SaaS Landing Page",
		description: "A beautiful landing page app using React and Tailwind.",
		image: "/projects/project1.png",
		tags: ["React", "TailwindCSS", "Supabase"],
		demoUrl: "#",
		githubUrl: "#",
	},
	{
		id: 2,
		title: "Orbit Analytics Dashboard",
		description:
			"Interactive analytics dashboard with data visualization and filtering capabilities.",
		image: "/projects/project2.png",
		tags: ["TypeScript", "D3.js", "Next.js"],
		demoUrl: "#",
		githubUrl: "#",
	},
	{
		id: 3,
		title: "E-commerce Platform",
		description:
			"Full-featured e-commerce platform with user authentication and payment processing.",
		image: "/projects/project3.png",
		tags: ["React", "Node.js", "Stripe"],
		demoUrl: "#",
		githubUrl: "#",
	},
];

export const ProjectSection = () => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		const container = scrollRef.current;
		if (!container) return;
		const card = container.querySelector("div.snap-center");
		const scrollAmount = card ? card.offsetWidth + 32 : 300; // 32 = gap-8
		container.scrollBy({
			left: direction === "right" ? scrollAmount : -scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Featured <span className="text-primary">Projects</span>
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my recent projects. Each project was carefully crafted
					with attention to detail, performance, and user experience.
				</p>
				<div className="relative">
					{/* Left Arrow */}
					<button
						aria-label="Scroll left"
						onClick={() => scroll("left")}
						className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card p-2 rounded-full shadow transition"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>
					{/* Right Arrow */}
					<button
						aria-label="Scroll right"
						onClick={() => scroll("right")}
						className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card p-2 rounded-full shadow transition"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
					<div
						ref={scrollRef}
						className="overflow-x-auto scrollbar-hide"
					>
						<div className="flex gap-8 snap-x snap-mandatory pb-4">
							{projects.map((project) => (
								<div
									key={project.id}
									className="snap-center shrink-0 group bg-card rounded-lg overflow-hidden shadow-xs card-hover min-w-[320px] max-w-xs"
								>
									<div className="relative w-full aspect-video overflow-hidden">
										<img
											src={project.image}
											alt={project.title}
											className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
									</div>
									<div className="p-6">
										<div className="flex flex-wrap gap-2 mb-4">
											{project.tags.map((tag, idx) => (
												<span
													key={idx}
													className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
												>
													{tag}
												</span>
											))}
										</div>
										<h3 className="text-xl font-semibold mb-1">{project.title}</h3>
										<p className="text-muted-foreground text-sm mb-4">
											{project.description}
										</p>
										<div className="flex justify-between items-center">
											<div className="flex space-x-3">
												<a
													href={project.demoUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="text-foreground/80 hover:text-primary transition-colors duration-300"
												>
													<ExternalLink size={20} />
												</a>
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="text-foreground/80 hover:text-primary transition-colors duration-300"
												>
													<Github size={20} />
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="text-center mt-12">
					<a
						href="https://github.com/gokulkumarv24"
						target="_blank"
						rel="noopener noreferrer"
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};