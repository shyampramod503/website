import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
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

  const faqs = [
    {
      question: 'What treatments do you offer at Dr. Rahul\'s Dental Clinic?',
      answer: 'We provide a complete range of dental treatments including: General Dentistry, Invisalign/Clear Aligners, Dental Implants, Root Canal Treatment, Orthodontics (Braces), Teeth Whitening (Zoom), Smile Design and Cosmetic Dentistry, Pediatric Dentistry, Full Mouth Rehabilitation, Wisdom Tooth Extraction, Crowns and Bridges, Gum Disease Treatment, Dentures, and Preventive Dentistry.',
    },
    {
      question: 'Is Dr. Rahul an experienced Invisalign provider?',
      answer: 'Yes, Dr. Rahul is a certified Invisalign provider with extensive experience in clear aligner therapy. He has successfully treated hundreds of patients with Invisalign, including children and adults. Patients consistently praise his expertise in Invisalign treatment in their reviews.',
    },
    {
      question: 'Do you offer same-day appointments or emergency dental care?',
      answer: 'Yes, we accommodate emergency dental cases and offer same-day appointments based on availability. Please call us ahead at +91 98765 43210 for emergency situations. We reserve specific time slots for walk-in emergencies.',
    },
    {
      question: 'Is the clinic child-friendly?',
      answer: 'Absolutely! Our clinic is specially designed to be comfortable for children. As one of our patients mentioned, "My 5 yr old son was very comfortable getting his tooth cleaned." We have a dedicated pediatric dentistry approach and create a welcoming environment for kids.',
    },
    {
      question: 'Are the treatments affordable?',
      answer: 'Yes, we believe in transparent, affordable pricing and offer EMI options on advanced procedures. We provide detailed cost estimates before starting any treatment and work with you to find the best solution within your budget.',
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment by calling us directly at +91 98765 43210, sending a WhatsApp message, or using our online booking form. We offer flexible scheduling including evening and weekend appointments.',
    },
    {
      question: 'What safety and sterilization protocols do you follow?',
      answer: 'We follow strict sterilization protocols using B-class Autoclave sterilization. Our clinic maintains the highest standards of hygiene and cleanliness. All instruments are thoroughly sterilized, and we use disposable items wherever possible.',
    },
    {
      question: 'Do you have parking facilities?',
      answer: 'Yes, we have ample parking space available for our patients. Our clinic is wheelchair accessible and located on the ground floor for easy access.',
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding bg-[#F4F7F9]"
    >
      <div className="container-custom">
        <div ref={contentRef}>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-[#00A3E0] font-semibold text-sm tracking-wider uppercase mb-4 block">
              FAQ's
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our dental services and treatments.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-[#0A2540] pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#00A3E0] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
