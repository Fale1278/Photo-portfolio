"use client"

import { Navbar } from "@/components/navbar";

import { Gallery } from "@/components/gallery";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover filter brightness-50 dark:brightness-[0.3] transition-all"
            poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-pictures-of-a-landscape-at-sunset-34545-large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-outfit font-black text-white mb-6 tracking-tighter"
          >
            CAPTURING <br />
            <span className="text-primary dark:text-white/40">THE ESSENCE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            Professional photography that bridges the gap between vision and reality. 
            Preserving moments that matter most since 2012.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#gallery" className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all group">
              View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="backdrop-blur-md bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
              Book a Shoot
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      <Gallery />

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=800" 
                alt="Photographer at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary rounded-[2rem] -z-10 hidden md:block"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-8">The Eye Behind <br /><span className="text-primary italic">The Lens</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Founded by visual storyteller Alex Lumière, our studio specializes in capturing the unseen beauty of everyday life. With over a decade of experience, we've traveled to over 40 countries documenting the intersection of culture and landscape.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe every frame should tell a story, every shadow should hold a secret, and every light should reveal a truth. Our approach is minimal yet impactful, focusing on authenticity and emotional resonance.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold">12+</p>
                <p className="text-sm text-muted-foreground">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold">45</p>
                <p className="text-sm text-muted-foreground">Awards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-outfit font-bold mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Tailored photography services for every vision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Editorial", desc: "High-end fashion and magazine style photography for brands and publications.", icon: "📸" },
              { title: "Landscape", desc: "Stunning natural visualizations for interior decoration and art prints.", icon: "🏔️" },
              { title: "Commercial", desc: "Product and brand-centric photography that drives engagement and sales.", icon: "💼" }
            ].map((s, i) => (
              <div key={i} className="p-10 glass rounded-3xl hover:-translate-y-2 transition-transform">
                <div className="text-4xl mb-6">{s.icon}</div>
                <h3 className="text-2xl font-outfit font-bold mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center border-primary/20 bg-primary/5">
          <h2 className="text-5xl font-outfit font-extrabold mb-6">Let's create something <br/><span className="text-primary italic">beautiful</span> together.</h2>
          <p className="text-xl text-muted-foreground mb-10">Available for worldwide commissions. Ready to tell your story?</p>
          <form className="max-w-md mx-auto space-y-4">
            <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <button className="w-full bg-primary text-primary-foreground py-4 rounded-full font-bold hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50 text-center opacity-50 text-sm">
        <p>&copy; 2026 LUMINA STUDIOS. ALL RIGHTS RESERVED. CAPTURED WITH PASSION.</p>
      </footer>
    </main>
  );
}
