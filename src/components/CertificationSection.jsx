import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export const CertificationSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      image: "/certifications/aws.png",
      issuer: "Amazon Web Services",
      date: "2024",
    },
    {
      title: "Google Data Analytics",
      image: "/certifications/google-data.png",
      issuer: "Google",
      date: "2023",
    },
    {
      title: "Microsoft Azure Fundamentals",
      image: "/certifications/azure.png",
      issuer: "Microsoft",
      date: "2023",
    },
    {
      title: "Microsoft Azure Fundamentals",
      image: "/certifications/azure.png",
      issuer: "Microsoft",
      date: "2023",
    },
  ];

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
    <section id="certifications" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Certifications
        </h2>
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
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="snap-center shrink-0 bg-card rounded-2xl shadow-md p-6 flex flex-col items-center min-w-[260px] max-w-xs"
                >
                  <div className="w-full h-40 mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-background">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{cert.issuer}</p>
                  <span className="text-xs text-primary mt-2">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};