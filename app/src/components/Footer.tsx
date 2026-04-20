import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Invisalign / Clear Aligners',
    'Dental Implants',
    'Root Canal Therapy',
    'Cosmetic Dentistry',
    'Teeth Whitening',
    'Pediatric Dentistry',
    'Dental Veneers',
    'Dental Checkups',
  ];

  return (
    <footer className="bg-[#0A2540] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#00A3E0] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.5 1 3.5.5 1 1 2 1 3.5 0 2.5 1 5 2 5.5.5.3 1 .5 1.5.5h1c.5 0 1-.2 1.5-.5 1-.5 2-3 2-5.5 0-1.5.5-2.5 1-3.5.5-1 1-2 1-3.5 0-2.5-2.5-5-6-5zm-2 5c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm4 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold block leading-tight">NOVAPEARL</span>
                <span className="text-xs tracking-widest text-white/70">DENTAL STUDIO</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              NovaPearl Dental Studio is your trusted destination for expert dental care 
              in a warm and welcoming environment. We ensure every visit is comfortable 
              and stress-free.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, index) => (
                <span
                  key={index}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A3E0] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <span className="text-white/70 hover:text-[#00E5FF] transition-colors text-sm">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 hover:text-[#00E5FF] transition-colors text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  72 Maple Harbor Lane, Brookfield 430118
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00A3E0] flex-shrink-0" />
                <span className="text-white/70 text-sm hover:text-[#00E5FF]">
                  +1 555 019 6042
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00A3E0] flex-shrink-0" />
                <span className="text-white/70 text-sm hover:text-[#00E5FF]">
                  hello@novapearldental.example
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00A3E0] flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            Copyright © 2026 NovaPearl Dental Studio | All Rights Reserved
          </p>
          <div className="flex gap-6">
            <span className="text-white/60 text-sm hover:text-white transition-colors">
              Privacy Policy
            </span>
            <span className="text-white/60 text-sm hover:text-white transition-colors">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
