import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Clock, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const stats = statsRef.current;

    if (!section || !content || !image || !stats) return;

    const ctx = gsap.context(() => {
      // Content reveal
      gsap.fromTo(content.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Image reveal
      gsap.fromTo(image,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Stats counter animation
      const statNumbers = stats.querySelectorAll('.stat-number');
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.fromTo(stat,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stats,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Award, text: 'Award-winning dental care' },
    { icon: Users, text: 'Patient-centered approach' },
    { icon: Clock, text: 'Flexible scheduling' },
    { icon: Shield, text: 'Sterilization protocols' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <span className="text-[#00A3E0] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Committed To Dental Excellence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
              Changing the Face of Dentistry with{' '}
              <span className="text-[#00A3E0]">Modern Technology</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Led by Dr. Rahul, our clinic is a state-of-the-art dental center specializing in 
              Invisalign, cosmetic dentistry, and pediatric care. From our humble beginnings, we 
              have grown into a modern facility offering world-class dental treatments.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our facilities include advanced dental equipment, fully equipped treatment rooms, 
              wheelchair-friendly access, and dedicated parking for patient convenience. Soothing 
              music and ambience provides a relaxing environment for your dental treatment.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00A3E0]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#00A3E0]" />
                  </div>
                  <span className="text-sm font-medium text-[#0A2540]">{feature.text}</span>
                </div>
              ))}
            </div>

            <a href="#services" className="btn-primary inline-flex items-center gap-2">
              Know More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/dr-rahul-portrait.jpg"
                alt="Dr. Rahul - Dental Specialist"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00A3E0] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A2540]">Certified</p>
                    <p className="text-sm text-gray-500">Invisalign Provider</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00A3E0]/10 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#00E5FF]/10 rounded-full -z-10" />
          </div>
        </div>

        {/* Stats Bar */}
        <div 
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-[#0A2540] to-[#00A3E0] rounded-2xl p-8 md:p-12"
        >
          {[
            { number: 15, suffix: '+', label: 'Years Experience' },
            { number: 10000, suffix: '+', label: 'Happy Patients' },
            { number: 50, suffix: '+', label: 'Awards Won' },
            { number: 99, suffix: '%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span className="stat-number" data-target={stat.number}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
