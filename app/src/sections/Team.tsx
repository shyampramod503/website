import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
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

  const teamMembers = [
    {
      name: 'Dr. Mira Ellis',
      role: 'Lead Dentist & Invisalign Specialist',
      qualifications: 'BDS, MDS Orthodontics',
      image: '/lead-dentist-portrait.jpg',
      specialties: ['Invisalign', 'Cosmetic Dentistry', 'Smile Design'],
    },
    {
      name: 'Dr. Arjun Vale',
      role: 'Pediatric Dentist',
      qualifications: 'BDS, MDS Pediatric Dentistry',
      image: '/pediatric-dental.jpg',
      specialties: ['Child Dental Care', 'Preventive Dentistry'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div ref={contentRef}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#00A3E0] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
              Meet Our Dental Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Skilled and compassionate dentists committed to providing you with 
              the best possible dental care.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-white/90 text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-[#00A3E0]" />
                    <span className="text-gray-600 text-sm">{member.qualifications}</span>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#00A3E0]/10 text-[#00A3E0] text-sm rounded-full flex items-center gap-1"
                      >
                        <Award className="w-3 h-3" />
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <div>
                <p className="font-semibold text-[#0A2540]">Certified Invisalign Provider</p>
                <p className="text-sm text-gray-500">Gold Level Provider</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <div>
                <p className="font-semibold text-[#0A2540]">15+ Years Experience</p>
                <p className="text-sm text-gray-500">Advanced Dental Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
