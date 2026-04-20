import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Stethoscope, 
  Accessibility, 
  CalendarCheck, 
  Car, 
  Microscope, 
  CreditCard 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      const cardElements = cards.querySelectorAll('.feature-card');
      
      gsap.fromTo(cardElements,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Stethoscope,
      title: 'Multiple Specialists',
      description: 'Best diagnosis and treatments under one roof. Our team covers all dental specialties.',
    },
    {
      icon: Accessibility,
      title: 'Wheelchair Friendly',
      description: 'Ground floor clinic - easy access for geriatric and differently abled patients.',
    },
    {
      icon: CalendarCheck,
      title: 'Emergency Appointments',
      description: 'Reserved operatory to handle dental emergencies and walk-in appointments.',
    },
    {
      icon: Car,
      title: 'Ample Parking Space',
      description: 'Peace of mind with dedicated parking area for patients and visitors.',
    },
    {
      icon: Microscope,
      title: 'World Class Equipment',
      description: 'Intra oral scanner, Full mouth X-ray, OPG, B-class Autoclave sterilization.',
    },
    {
      icon: CreditCard,
      title: 'EMI Facilities',
      description: 'Affordable care for all with flexible EMI options on advanced procedures.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#F4F7F9]"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00A3E0] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            BrightWave Dental Studio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine expert care, advanced technology, and personalized service 
            to give you a confident smile.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-[#00A3E0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00A3E0] transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-[#00A3E0] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
