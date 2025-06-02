import{ GithubIcon, Linkedin, LinkedinIcon, LinkIcon, Mail, MapPin, PhoneCall, PhoneCallIcon, Send } from "lucide-react";


import { cn } from "@/lib/utils";

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {

    const { toast } = useToast();
    
    const[isSubmitting, setIsSubmitting] = useState(false);

     
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setTimeout(() => {
            setIsSubmitting(true);
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you soon.",
                variant: "default",
            });
              setIsSubmitting(false);
        }, 1000);
        
      
    };

    return <section className="py-24 px-4 bg-background relative" id="contact">
        <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In<sapan className="text-primary"> Touch</sapan></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                 I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out! 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="sapace-y-2">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className=" mt-5h-6 w-6 text-primary"/>
                            </div>
                            <div className="space-y-1 container">
                                <h4 className="font-medium text-left">Email</h4>
                                <a href="mailto:gokulkumarv2024@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" >gokulkumarv2024@gmial.com</a>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-4 space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <PhoneCall className=" mt-5h-6 w-6 text-primary"/>
                            </div>
                            <div className=" text-left space-y-1 container">
                                <h4 className="font-medium text-left">Phone</h4>
                                <a href="tel:+919600920121" className="text-muted-foreground hover:text-primary transition-colors" >+91 96009 20121 </a>
                            </div>
                        </div>
                    </div>
                    
                                    <div className=" mt-4 space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className=" mt-5h-6 w-6 text-primary"/>
                            </div>
                            <div className=" text-left space-y-1 container">
                                <h4 className="font-medium text-left">Location</h4>
                                <a  className="text-muted-foreground hover:text-primary transition-colors" >Chennai,Tamilnadu </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4  className="font-medium mb-4">Connect With <span className="text-primary">Me</span></h4>
                        <div className="flex space-x-4 justify-center mt-4">
                            <a href="https://www.linkedin.com/in/gokul-kumar-v-236a24217/" target="_blank" >
                                <Linkedin/>
                            </a>

                            <a href="https://github.com/gokulkumarv24" target="_blank" >
                                <GithubIcon/>
                            </a>
                        </div>

                    </div>
                    
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs"
                    onSubmit={handleSubmit} >
                    <h3 className="text-2xl font-semibold mb-6" >
                        Send Me a <span className="text-primary">Message</span>
                    </h3>

                    <form>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors" placeholder="Gokul Kumar V"/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors" placeholder="Gokulkumarv2024@gmail.com"/>
                        </div>

                        <div>
                            <label htmlFor="message " className="block text-sm font-medium mb-2">Your message </label>
                            <textarea id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none" placeholder="Your message For Me"/>
                        </div>

                        <button type="submit"
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2 mt-4")}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={15} />
                        </button>
                    </form>

                </div>

            </div>
        </div> 
    </section>

}