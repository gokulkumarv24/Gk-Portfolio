import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {

 
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-5"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    {/* Profile Image */}
                    <div className="opacity-0 animate-fade-in mb- flex justify-center">
                        <img
                            src="/profile.jpeg"
                            alt="Gokul Kumar V"
                            className="w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-xl animate-float"
                        />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">GOKUL KUMAR </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">V</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Software Developer Engineer | Web Developer | Cybersecurity Analyst | AI/ML Enthusiast
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-shadow-indigo-600 text-muted-foreground mb-2">Scroll Down</span>
                <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
            </div>
        </section>
    );
};