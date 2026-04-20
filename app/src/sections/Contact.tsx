import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    reason: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (!section || !form || !info) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(form,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(info,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 555 019 6042',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@novapearldental.example',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '72 Maple Harbor Lane, Brookfield 430118',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Sat: 9:00 AM - 8:00 PM',
      subContent: 'Sun: 10:00 AM - 2:00 PM',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00A3E0] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Book Appointment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            Schedule Your Visit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to take the first step towards a healthier smile? 
            Booking your appointment is quick and easy!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#F4F7F9] rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Book a Consultation</h3>
            
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Appointment Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Visit (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    placeholder="Tell us about your dental concerns"
                    rows={3}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 cursor-default"
              >
                <Send className="w-5 h-5" />
                Submit Appointment Request
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            {/* Quick Contact Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[#F4F7F9] rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A3E0] transition-colors">
                  <info.icon className="w-6 h-6 text-[#00A3E0] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2540] mb-1">{info.title}</h4>
                  <p className="text-gray-600">{info.content}</p>
                  {info.subContent && <p className="text-gray-500 text-sm">{info.subContent}</p>}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-[#F4F7F9] rounded-xl overflow-hidden h-64 relative">
              <img
                src="/clinic-interior.jpg"
                alt="Clinic Location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-semibold">Visit Our Clinic</p>
                  <p className="text-sm text-white/80">Ground floor, wheelchair accessible</p>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-gradient-to-r from-[#0A2540] to-[#00A3E0] rounded-xl p-6 text-white text-center">
              <h4 className="font-bold text-lg mb-2">Dental Emergency?</h4>
              <p className="text-white/80 text-sm mb-4">We offer same-day emergency appointments</p>
              <span className="inline-flex items-center gap-2 bg-white text-[#0A2540] px-6 py-3 rounded-full font-semibold hover:bg-[#00E5FF] transition-colors cursor-default">
                <Phone className="w-5 h-5" />
                Call Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
