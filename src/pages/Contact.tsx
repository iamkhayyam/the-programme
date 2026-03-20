import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Globe, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-8 py-16 bg-paper-bg min-h-[calc(100vh-56px)]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-stix font-semibold text-[1.8rem] text-ink mb-2">Contact</h1>
        <p className="font-plex-sans text-[0.9rem] text-light mb-12 uppercase tracking-widest">The ARC Institute of Knowware</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-stix font-semibold text-[1.1rem] text-ink mb-6">Inquiries</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1" size={18} />
                <div>
                  <div className="font-plex-sans text-[0.7rem] uppercase tracking-widest text-light mb-1">Email</div>
                  <a href="mailto:programme@knowware.institute" className="font-plex-mono text-[0.85rem] text-ink hover:text-accent transition-colors">programme@knowware.institute</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Github className="text-accent mt-1" size={18} />
                <div>
                  <div className="font-plex-sans text-[0.7rem] uppercase tracking-widest text-light mb-1">GitHub</div>
                  <a href="https://github.com/iamkhayyam/wakil-programme" className="font-plex-mono text-[0.85rem] text-ink hover:text-accent transition-colors">@iamkhayyam/wakil-programme</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="text-accent mt-1" size={18} />
                <div>
                  <div className="font-plex-sans text-[0.7rem] uppercase tracking-widest text-light mb-1">Web</div>
                  <a href="https://knowware.institute" className="font-plex-mono text-[0.85rem] text-ink hover:text-accent transition-colors">knowware.institute</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-stix font-semibold text-[1.1rem] text-ink mb-6">Location</h2>
            <div className="flex items-start gap-4">
              <MapPin className="text-accent mt-1" size={18} />
              <div>
                <div className="font-plex-sans text-[0.7rem] uppercase tracking-widest text-light mb-1">Headquarters</div>
                <p className="font-stix text-[1rem] text-ink leading-relaxed">
                  The ARC Institute of Knowware<br />
                  Calgary, Alberta<br />
                  Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
