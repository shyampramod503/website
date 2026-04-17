import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      const cardElements = cards.querySelectorAll('.service-card');
      
      gsap.fromTo(cardElements,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      image: '/invisalign-service.jpg',
      title: 'Invisalign / Clear Aligners',
      description: 'Forget about broken wires and flossing nightmares! Clear aligners are a proven way to achieve healthy tooth movement with ease of brushing and flossing, without the unsightly appearance of metal brackets.',
      link: '#contact',
    },
    {
      image: '/checkup-service.jpg',
      title: 'Dental Checkups & Cleanings',
      description: 'Regular cleanings will rid the mouth of harmful bacteria and ensure you enjoy a lifetime of good oral health. Prevent problems like gingivitis, tooth decay, and bad breath.',
      link: '#contact',
    },
    {
      image: '/veneers-service.jpg',
      title: 'Laminate Veneers',
      description: 'Your smile should always make you feel confident. Porcelain Veneers can change the colour, shape and length of your teeth and completely transform your smile in just 7 days.',
      link: '#contact',
    },
    {
      image: '/rootcanal-service.jpg',
      title: 'Root Canal Treatment',
      description: 'For successful root canal treatment, peace of mind of the patient is as important as the process. Our expert team can help save a tooth that has become severely infected or decayed.',
      link: '#contact',
    },
    {
      image: '/implants-service.jpg',
      title: 'Dental Implants',
      description: 'Permanent solutions for missing teeth. Our implant specialists use advanced technology to provide natural-looking, long-lasting dental implants that restore your smile and confidence.',
      link: '#contact',
    },
    {
      image: '/whitening-service.jpg',
      title: 'Zoom Teeth Whitening',
      description: 'Get a brighter, whiter smile with our professional Zoom whitening treatment. Safe, effective, and long-lasting results that will boost your confidence.',
      link: '#contact',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00A3E0] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Dental Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From routine checkups to advanced procedures, we offer a complete range 
            of dental treatments using the latest technology.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2540] mb-3 group-hover:text-[#00A3E0] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#00A3E0] font-medium text-sm hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
