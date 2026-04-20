import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const toothRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const cta = ctaRef.current;
    const scrollHint = scrollHintRef.current;
    const tooth = toothRef.current;

    if (!section || !heading || !subheading || !cta || !scrollHint || !tooth) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ delay: 0.5 });
      
      loadTl
        .fromTo(tooth, 
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
        )
        .fromTo(heading,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(subheading,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(cta,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(scrollHint,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        );

      // Scroll-triggered exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 1,
        }
      });

      scrollTl
        .to(heading, { y: -100, opacity: 0, ease: 'none' }, 0.2)
        .to(subheading, { y: -80, opacity: 0, ease: 'none' }, 0.25)
        .to(cta, { y: -60, opacity: 0, ease: 'none' }, 0.3)
        .to(tooth, { scale: 1.2, rotation: 15, ease: 'none' }, 0)
        .to(scrollHint, { opacity: 0, ease: 'none' }, 0);

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0D3A5C] to-[#00A3E0]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A3E0]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-32">
        {/* 3D Tooth Animation */}
        <div ref={toothRef} className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 bg-[#00A3E0]/30 rounded-full blur-2xl animate-pulse" />
            <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 drop-shadow-2xl">
              <defs>
                <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#E8F4F8" />
                  <stop offset="100%" stopColor="#D0E8F0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Tooth Shape */}
              <path
                d="M100 20 C130 20, 150 40, 150 70 C150 90, 145 110, 140 130 C135 150, 130 170, 125 180 C120 190, 110 185, 105 170 C102 160, 100 150, 100 150 C100 150, 98 160, 95 170 C90 185, 80 190, 75 180 C70 170, 65 150, 60 130 C55 110, 50 90, 50 70 C50 40, 70 20, 100 20Z"
                fill="url(#toothGrad)"
                filter="url(#glow)"
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              {/* Shine Effect */}
              <ellipse cx="85" cy="60" rx="15" ry="25" fill="white" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Experience Highest Quality
          <br />
          <span className="text-[#00E5FF]">Dental Care</span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          Invisalign | Root Canals | Laminate Veneers | Dental Implants | 
          Zoom Whitening | Paediatric Treatments
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary flex items-center justify-center gap-2 text-lg">
            <Phone className="w-5 h-5" />
            Book Appointment
          </a>
          <a href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-[#0A2540]">
            Our Services
          </a>
        </div>

        {/* Scroll Hint */}
        <div ref={scrollHintRef} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
