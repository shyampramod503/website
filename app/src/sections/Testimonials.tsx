import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ThumbsUp, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;
    const marquee = marqueeRef.current;

    if (!section || !header || !cards || !marquee) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(header.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Cards animation
      const cardElements = cards.querySelectorAll('.testimonial-card');
      gsap.fromTo(cardElements,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const featuredReviews = [
    {
      name: 'Leena Morris',
      reviews: 3,
      time: '4 months ago',
      rating: 5,
      text: "The dentist was very patient and took time to explain the procedure. The clear aligner care was excellent, and the clinic was also great for kids. My 5 yr old son was very comfortable getting his tooth cleaned.",
      tags: ['invisalign', 'cleanliness', 'caring doctor'],
    },
    {
      name: 'Nolan Pierce',
      reviews: 2,
      time: '4 months ago',
      rating: 5,
      text: "Highly recommend this clinic. I always had dental anxiety, which completely changed after my first visit. Had an awesome Invisalign journey with my 10 year old. Excellent and prompt communication via telehealth and email.",
      tags: ['invisalign', 'experienced doctor'],
    },
    {
      name: 'Maya Kannan',
      reviews: 2,
      time: '4 months ago',
      rating: 5,
      text: "Highly recommend NovaPearl Dental Studio. The dentist was experienced and resolved issues other clinics were not able to treat. The team is friendly, available for patients, and truly caring.",
      tags: ['experienced doctor', 'dental care'],
    },
  ];

  const quickTags = [
    { name: 'invisalign', count: 3 },
    { name: 'modern facilities', count: 2 },
    { name: 'experienced doctor', count: 2 },
    { name: 'cleanliness', count: 2 },
    { name: 'caring doctor', count: 2 },
    { name: 'dental care', count: 3 },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-[#F4F7F9]"
    >
      <div className="container-custom">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="text-[#00A3E0] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            What Our Patients Say
          </h2>
          
          {/* Rating Summary */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-3xl font-bold text-[#0A2540]">5.0</span>
            </div>
            <p className="text-gray-600">12 reviews</p>
            
            {/* Quick Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {quickTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm"
                >
                  {tag.name} <span className="text-[#00A3E0] font-medium">{tag.count}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Reviews */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredReviews.map((review, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#00A3E0]/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {review.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#00A3E0]/10 text-[#00A3E0] text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-[#0A2540]">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.reviews} reviews • {review.time}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ThumbsUp className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Share2 className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Quotes Marquee */}
        <div ref={marqueeRef} className="relative overflow-hidden py-8 bg-gradient-to-r from-[#0A2540] to-[#00A3E0] rounded-2xl">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-8 text-white text-lg font-medium">
                "Great Experience - clean clinic & excellent service" •
                "Impressed with the state of the art facility" •
                "My 5 yr old son was very comfortable getting his tooth cleaned" •
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
