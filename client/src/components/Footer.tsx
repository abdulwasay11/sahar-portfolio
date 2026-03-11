import { Sparkles, Instagram, Facebook, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-white/10 text-primary">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">
                  Sahar Saleem
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Beauty Studio
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              Enhancing natural beauty through expert makeup styling, aesthetic skincare, and sophisticated facial techniques.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio & About</Link></li>
              {/* <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#booking" className="hover:text-primary transition-colors">Book Appointment</a></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="mailto:contact@saharsaleem.com" className="p-2 rounded-full bg-white/5 hover:bg-primary transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-white/60 mb-2">
              Dera Ghazi Khan, Pakistan
            </p>
            <p className="text-sm text-white/60">
              <a href="tel:+923317313883" className="hover:text-primary transition-colors">+92 331 7313883</a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>&copy; 2023 Sahar Saleem Beauty Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
