import { Bot, Briefcase, Code, MonitorCog, Shield,} from "lucide-react";
export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About<span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        This is ,<span className="text-primary">GOKUL KUMAR  </span> .V
                    </h3>
                    <p className=" text-muted-foreground">
                        I am a Software Engineer with a specialization in Cyber Security offering hands-on experience in developing, deploying, and optimizing
                        scalable software solutions. Skilled in full-stack development, object-oriented programming, cloud services, and system-level
                        debugging. Proven ability to apply structured software engineering methods ,collaborate across teams, and deliver efficient,
                        maintainable code. Proficient in Agile methodologies and passionate about creating impactful applications aligned with modern
                        software engineering practices.
                    </p>
                    <p className="text-muted-foreground">
                        A passionate B.Tech Computer Science and Engineering student specializing in Cyber Security. I build innovative tech solutions across AI, full-stack development, and ethical hacking. From developing advanced malware detection systems to designing real-time analytics dashboards and OTT platforms, I enjoy creating impactful, secure, and user-centric digital experiences. I’m always exploring new technologies and love turning ideas into functional, scalable products.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>
                        <a href="" className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Dowload CV
                        </a>

                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software Developer Engineer</h4>
                                    <p className="text-muted-foreground">Python, JavaScript, Java, C/C++, SQL</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    < Shield className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Cybersecurity</h4>
                                    <p className="text-muted-foreground">CEH Fundamentals, Network Security, Malware Analysis, Vulnerability Assessment, Kali Linux, Burp Suite, Wireshark</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <MonitorCog className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development:</h4>
                                    <p className="text-muted-foreground">HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, Tailwind CSS, Bootstrap, MongoDB, Firebase</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    < Bot className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">AI/ML & Data Science</h4>
                                    <p className="text-muted-foreground">Pandas, NumPy, Scikit-learn, TensorFlow, OpenCV, Jupyter Notebook, Data Preprocessing, Model Deployment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};