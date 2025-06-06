import {  AboutSection } from "../components/AboutSection"
import { CertificationSection } from "../components/CertificationSection"
import { ContactSection } from "../components/ContactSection"
import { ExperienceSection } from "../components/ExperienceSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

// export home page component
export const Home = () => { 
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme for the home page*/}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/*Navbar */}
        <Navbar />

        {/* main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectSection />
            <CertificationSection />
            <ContactSection />
        

        </main>

        {/* Footer */}
        <Footer/>

    </div>
        

}
