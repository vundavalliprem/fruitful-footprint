import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - AGROVITAL EXPORTS";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate form submission with timeout
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setSending(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-agro-leaf/90 to-agro-leaf">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="contact-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#contact-grid)" />
          </svg>
        </div>
        <div className="container-custom relative">
          <ScrollReveal animation="fadeIn" threshold={0.1}>
            <SectionHeading
              title="Contact Us"
              subtitle="We'd love to hear from you. Let's discuss how we can work together."
              light={true}
              center={true}
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal animation="fadeIn" delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center">
                <div className="rounded-full bg-agro-leaf/10 w-16 h-16 flex items-center justify-center mb-4">
                  <Phone className="text-agro-leaf h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
                <p className="text-gray-600 mb-4">We're available during business hours</p>
                <a href="tel:+919989899966" className="text-agro-leaf hover:underline mt-auto font-medium">
                  +91 99898 99966
                </a>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeIn" delay={200}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center">
                <div className="rounded-full bg-agro-leaf/10 w-16 h-16 flex items-center justify-center mb-4">
                  <Mail className="text-agro-leaf h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600 mb-4">Send us an email anytime</p>
                <a href="mailto:vundavalliprem@gmail.com" className="text-agro-leaf hover:underline mt-auto font-medium">
                  vundavalliprem@gmail.com
                </a>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeIn" delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center">
                <div className="rounded-full bg-agro-leaf/10 w-16 h-16 flex items-center justify-center mb-4">
                  <MapPin className="text-agro-leaf h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Address</h3>
                <p className="text-gray-600 mb-4">Our headquarters</p>
                <address className="text-gray-700 not-italic mt-auto font-medium text-center">
                  HAPPY HOMES APARTMENT FLAT NO 506<br />
                  JAMMALAPALE, JALADANKI MANDALAM<br />
                  NELLORE DISTRICT, ANDHRA PRADESH<br />
                  PIN: 524223
                </address>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeIn" delay={400}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center">
                <div className="rounded-full bg-agro-leaf/10 w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="text-agro-leaf h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Business Hours</h3>
                <p className="text-gray-600 mb-4">When we're available</p>
                <div className="text-gray-700 mt-auto">
                  <p className="font-medium">Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal animation="slideInLeft">
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/30 focus:border-agro-leaf"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/30 focus:border-agro-leaf"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/30 focus:border-agro-leaf"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/30 focus:border-agro-leaf"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/30 focus:border-agro-leaf"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Price Quote">Price Quote</option>
                      <option value="Shipping Information">Shipping Information</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/30 focus:border-agro-leaf"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-agro-leaf hover:bg-agro-leaf/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slideInRight">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                
                <div className="flex-grow rounded-xl overflow-hidden shadow-md border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622704574231!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="AGROVITAL EXPORTS Location"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <ScrollReveal animation="fadeIn">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find quick answers to common questions about our export services"
              center={true}
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <ScrollReveal animation="fadeIn" delay={100}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-800">What are your minimum order quantities?</h3>
                <p className="text-gray-700">
                  Our minimum order quantities vary by product. For premium mangoes and fruits, we typically require a minimum order of one pallet. For grains, pulses, and spices, our minimum orders start at 500kg. Please contact us for specific product MOQs.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeIn" delay={200}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-800">What payment methods do you accept?</h3>
                <p className="text-gray-700">
                  We accept standard international payment methods including wire transfers, letters of credit (L/C), and documentary collections. For long-term partners, we can discuss flexible payment arrangements.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeIn" delay={300}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-800">How do you ensure product quality?</h3>
                <p className="text-gray-700">
                  We implement a multi-stage quality control process that includes farm inspections, cleaning, grading, and final quality checks before packaging. Our products comply with international food safety standards and certifications.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeIn" delay={400}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-800">What are your shipping terms?</h3>
                <p className="text-gray-700">
                  We offer flexible shipping terms including FOB, CIF, and CFR depending on your requirements. We work with reliable freight forwarders to ensure timely delivery with proper documentation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
