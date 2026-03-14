import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

// Import Certificates
import certSDA from "@assets/WhatsApp_Image_2026-03-10_at_4.30.25_PM_(1)_1773155924176.jpeg";
import certWomenPhysio from "@assets/WhatsApp_Image_2026-03-10_at_4.30.25_PM_1773155924177.jpeg";
import certAllenora from "@assets/WhatsApp_Image_2026-03-10_at_4.30.35_PM_(1)_1773155924177.jpeg";
import certPDF1 from "@assets/ToniandGuy.png";
import certPDF2 from "@assets/srs.png";
import certi1 from "@assets/certi1.png";
import certi2 from "@assets/certi2.png";
import certi3 from "@assets/certi3.png";
import certi4 from "@assets/certi4.png";
import certi5 from "@assets/certi5.jpeg";
import certi6 from "@assets/certi6.jpeg";
import certi7 from "@assets/certi7.png";
import nab from "@assets/Nabeel.jpeg";

// Import Letters of Appreciation
import imgAppreciation1 from "@assets/WhatsApp_Image_2026-03-10_at_4.30.23_PM_1773155924175.jpeg";
import imgAppreciation2 from "@assets/WhatsApp_Image_2026-03-10_at_4.30.24_PM_(1)_1773155924175.jpeg";
import imgAppreciation3 from "@assets/WhatsApp_Image_2026-03-10_at_4.30.24_PM_1773155924176.jpeg";
import imgAppreciation4 from "@assets/Ielts.jpeg";

import portfolioImage1 from "@assets/Image1.jpeg";
import portfolioImage2 from "@assets/Image2.jpeg";
import portfolioImage3 from "@assets/Image3.jpeg";

export default function Portfolio() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* HEADER */}
      <section className="pt-24 pb-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-display text-foreground mb-6">Expertise & <span className="italic text-primary">Recognition</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sahar Saleem is a distinguished professional holding certifications in Aesthetic Skin Care, Facial Techniques, and advanced Makeup Styling. Her dedication to excellence has earned her widespread recognition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATES GALLERY */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12 border-b border-border pb-4">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-display text-foreground">Professional Certifications</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: certWomenPhysio, title: "Aesthetic Skin Care & Facial Techniques", subtitle: "Women Physiotherapy Hub" },
              {src: nab, title: "Collaboration with Nabeels" , subtitle: "Nabeel Photographic Moments"},
              { src: certSDA, title: "Certified Beautician - Grade A", subtitle: "Skill Development Association" },
              { src: certAllenora, title: "Professional Makeup Training", subtitle: "Alle'nora Multan" },
              { src: certPDF1, title: "Advanced Certification", subtitle: "Professional Training" },
              { src: certPDF2, title: "Specialized Skills Certificate", subtitle: "Professional Development" },
              { src: certi1, title: "Specialized Skills Certificate", subtitle: "Professional Development" },
              { src: certi2, title: "Specialized Skills Certificate", subtitle: "Professional Development" },
              { src: certi3, title: "Specialized Skills Certificate", subtitle: "Professional Development" },
              { src: certi4, title: "Specialized Skills Certificate", subtitle: "Professional Development" },
              { src: certi5, title: "Specialized Skills Certificate", subtitle: "Professional Development" },
              { src: certi6, title: "Specialized Skills Certificate", subtitle: "Professional Development" },
              { src: certi7, title: "Specialized Skills Certificate", subtitle: "Professional Development" }
            ].map((cert, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-border/50 mb-4 bg-white p-2">
                  <img 
                    src={cert.src} 
                    alt={cert.title} 
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Gallery</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground">
              A glimpse of my work and collaborations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[portfolioImage1, portfolioImage2, portfolioImage3].map((img, index) => (
              <motion.div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <img
                  src={img}
                  alt={`Portfolio image ${index + 1}`}
                  className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LETTERS OF APPRECIATION */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
            <Star className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-display text-white">Letters of Appreciation</h2>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12 text-center text-white/70">
            <p>
              Recognized by the Commissioner Office Dera Ghazi Khan for outstanding contribution to cultural events and exceptional styling coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[imgAppreciation4 ,imgAppreciation1, imgAppreciation2, imgAppreciation3 ].map((img, index) => (
              <motion.div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-2xl bg-white/5 p-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <img 
                  src={img} 
                  alt={`Letter of Appreciation ${index + 1}`} 
                  className="w-full aspect-[3/4] object-cover rounded-lg filter sepia-[0.2] group-hover:sepia-0 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl mb-6">Ready to transform your look?</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Experience the expertise firsthand. Book your personalized styling session today.
          </p>
          <a 
            href="/#booking" 
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </Layout>
  );
}
