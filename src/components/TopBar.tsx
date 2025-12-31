import { Phone, Mail, Clock, Instagram, Linkedin, Youtube } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left - Contact Info */}
        <div className="flex items-center gap-6">
          <a 
            href="tel:+918019942233" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 8019942233</span>
          </a>
          <a 
            href="mailto:Info@aotms.com" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Info@aotms.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon - Sat: 8:00 - 06:00</span>
          </div>
        </div>

        {/* Right - Login/Register & Social */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <a href="#login" className="hover:text-accent transition-colors">Login</a>
            <span>/</span>
            <a href="#register" className="hover:text-accent transition-colors">Register</a>
          </div>
          
          <div className="flex items-center gap-1">
            <span className="mr-2">Follow us:</span>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
