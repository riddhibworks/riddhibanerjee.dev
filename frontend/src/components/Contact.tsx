import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2, MessageSquare, User, AtSign, Tag } from 'lucide-react';
import { portfolioApi } from '../services/api';
import { ToastMessage } from './Toast';
import { ProfileDto } from '../types/portfolio';

interface ContactProps {
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  profile?: ProfileDto | null;
}

export const Contact: React.FC<ContactProps> = ({ addToast, profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await portfolioApi.sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || undefined,
        message: formData.message.trim(),
      });

      setIsSuccess(true);
      addToast({
        type: 'success',
        title: 'Message Sent Successfully!',
        description: response.message || "Thank you! I'll get back to you shortly.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err: any) {
      console.error('Contact submission error:', err);
      const errMsg = err.message || 'Failed to submit form. Please try again.';
      addToast({
        type: 'error',
        title: 'Form Submission Failed',
        description: errMsg,
      });

      if (err.validationErrors) {
        setErrors(err.validationErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const userEmail = profile?.email || 'riddhib.works@gmail.com';
  const userLocation = profile?.location || 'Bengaluru, India';

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-[#D8CCC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#F7F2E9] border border-[#D8CCC0] text-accent-700 font-mono text-[11px] font-medium uppercase tracking-[0.2em] mb-3 shadow-xs">
            05 / Inquiry & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#3A1F1D]">
            Get In Touch & <span className="text-red-gradient italic font-medium">Collaborate</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#614B47] max-w-xl font-sans">
            Have an opportunity, architecture discussion, or project in mind? Drop me a message below.
          </p>
          <div className="w-12 h-0.5 bg-accent-600 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Info (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#F7F2E9] p-6 rounded-xl border border-[#E5DBD0] shadow-xs">
              <h3 className="font-serif text-2xl font-normal text-[#3A1F1D] mb-3">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-[#614B47] leading-relaxed mb-6 font-sans">
                I am currently open to full-time engineering roles, consulting engagements, and technical advisory.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${userEmail}`}
                  className="flex items-center gap-4 p-3.5 rounded-lg bg-[#F7F2E9] hover:bg-[#FAF7F2] border border-[#D8CCC0] shadow-xs transition-colors group"
                >
                  <div className="p-2.5 rounded-md bg-[#FAF7F2] text-accent-700 border border-[#D8CCC0] group-hover:scale-105 transition-transform shadow-xs">
                    <Mail className="w-4 h-4 text-accent-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-[#7E664F] uppercase tracking-wider">Direct Email</span>
                    <span className="text-sm font-semibold text-[#2E1E1C] group-hover:text-accent-700 transition-colors">
                      {userEmail}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-lg bg-[#F7F2E9] border border-[#D8CCC0] shadow-xs">
                  <div className="p-2.5 rounded-md bg-[#FAF7F2] text-accent-700 border border-[#D8CCC0] shadow-xs">
                    <MapPin className="w-4 h-4 text-accent-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-[#7E664F] uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-[#2E1E1C]">
                      {userLocation}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-[#F7F2E9] p-6 rounded-xl border border-[#D8CCC0] shadow-xs">
              <div className="flex items-center gap-2.5 text-accent-700 font-mono text-xs font-semibold mb-2 uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-accent-600" />
                Guaranteed Response Time
              </div>
              <p className="text-xs text-[#614B47] leading-relaxed font-sans">
                Messages submitted here are routed directly to my inbox ({userEmail}) and saved securely in the backend. You'll receive a response within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Interactive Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F7F2E9] p-6 sm:p-8 rounded-xl border border-[#D8CCC0] shadow-xs relative">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F7F2E9] border-2 border-accent-600 text-accent-700 mx-auto flex items-center justify-center shadow-xs">
                    <CheckCircle className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#2E1E1C]">
                    Thank You
                  </h3>
                  <p className="text-sm text-[#614B47] max-w-md mx-auto font-sans">
                    Your message has been delivered to Riddhi. I will respond to your email address shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-accent-600 text-white font-mono text-xs uppercase tracking-wider hover:bg-accent-700 transition-colors shadow-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-[#2E1E1C] mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-accent-600" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border text-sm text-[#2E1E1C] placeholder-[#A89482] focus:outline-none focus:ring-1 focus:ring-accent-600 focus:border-accent-600 transition-all font-sans shadow-xs ${
                          errors.name
                            ? 'border-accent-600'
                            : 'border-[#D8CCC0]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-accent-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-medium text-[#2E1E1C] mb-1.5 flex items-center gap-1.5">
                        <AtSign className="w-3.5 h-3.5 text-accent-600" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border text-sm text-[#2E1E1C] placeholder-[#A89482] focus:outline-none focus:ring-1 focus:ring-accent-600 focus:border-accent-600 transition-all font-sans shadow-xs ${
                          errors.email
                            ? 'border-accent-600'
                            : 'border-[#D8CCC0]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-accent-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#2E1E1C] mb-1.5 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-accent-600" />
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Engineering Role / Project Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#D8CCC0] text-sm text-[#2E1E1C] placeholder-[#A89482] focus:outline-none focus:ring-1 focus:ring-accent-600 focus:border-accent-600 transition-all font-sans shadow-xs"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#2E1E1C] mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-accent-600" />
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Hi Riddhi, we loved your portfolio and would like to connect..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border text-sm text-[#2E1E1C] placeholder-[#A89482] focus:outline-none focus:ring-1 focus:ring-accent-600 focus:border-accent-600 transition-all resize-none font-sans shadow-xs ${
                        errors.message
                          ? 'border-accent-600'
                          : 'border-[#D8CCC0]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-accent-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg bg-accent-600 hover:bg-accent-700 disabled:opacity-50 text-white font-mono text-xs uppercase tracking-wider font-medium shadow-xs flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
