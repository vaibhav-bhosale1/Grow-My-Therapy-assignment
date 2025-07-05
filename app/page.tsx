'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Mail, MapPin, Check, Plus } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Please tell us what brings you here';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'Please agree to be contacted';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agreeToContact: false
      });
    }, 1000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Serena Blake, Psy.D</div>
                <div className="text-xs text-gray-500">Psychological Services</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Ocean waves" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Psychological Care for
          </h1>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
            Change, Insight, and Well-Being
          </h2>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Offering individual psychotherapy for adults understanding of the human condition of life's challenges through PSYPACT participation
          </p>
          <Button 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-base font-normal rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            SCHEDULE A CONSULTATION
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-gray-900 mb-8">
                About Dr. Serena Blake
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-base font-light">
                  Finding time and opportunities to care for ourselves can be incredibly 
                  challenging in today's busy and demanding world. I believe therapy 
                  offers a dedicated space for self-care, providing the support and tools 
                  needed to improve the essential practice. Therapy can help 
                  clients identify and clarify their goals, values, and the various 
                  elements that contribute to their well-being, recognizing that these 
                  aspects vary from person to person.
                </p>
                <p className="text-base font-light">
                  I am dedicated to supporting this journey by offering active listening, 
                  psychological knowledge, empathy, compassion, and insight into 
                  behavioral patterns and tendencies. I hold a master's degree in Clinical 
                  Psychology from the Michigan School of Psychology (2015) and a 
                  Doctorate in Counseling Psychology from Western Michigan University 
                  (2019). My experience spans therapy and psychological assessment in 
                  psychiatric inpatient units, academic medical centers, universities, and 
                  outpatient practice settings.
                </p>
                <p className="text-base font-light">
                  My therapeutic approach is primarily psychodynamic and humanistic, 
                  influenced by influences from positive psychology, existentialism, family 
                  systems theory, acceptance and commitment concepts, and 
                  mindfulness practices.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" 
                  alt="Dr. Serena Blake" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              How I Help
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-teal-50 p-8 rounded-lg">
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Individual Counseling"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Anxiety & Stress Management</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                Discover Peace, Purpose, and God's Truth in your life. Find healing and hope through evidence-based therapy.
              </p>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Learn More
              </Button>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg">
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Couples Counseling"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Relationship Counseling</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                Heal Your Relationship, Grow Closer to God Together in Richmond, VA and online therapy sessions.
              </p>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 64 64" className="w-full h-full text-teal-600">
                  <path fill="currentColor" d="M32 8c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zm0 44c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20z"/>
                  <path fill="currentColor" d="M32 16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm0 28c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-gray-900 mb-8">Therapy</h3>
            
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="insurance" className="bg-white border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-base font-normal text-gray-900">
                    Do you take insurance?
                  </span>
                  <Plus className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 font-light leading-relaxed">
                  I don't work directly with insurance companies, but I'll give you a detailed receipt 
                  (called a superbill) that you can submit for reimbursement. Many of my clients get 
                  some money back this way.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="children" className="bg-white border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-base font-normal text-gray-900">
                    Do you treat children or adolescents?
                  </span>
                  <Plus className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 font-light leading-relaxed">
                  My practice focuses on adults. I can provide referrals to qualified therapists who specialize in working with children and adolescents.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="regions" className="bg-white border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-base font-normal text-gray-900">
                    Which geographic regions do you serve?
                  </span>
                  <Plus className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 font-light leading-relaxed">
                  I serve clients in Los Angeles and throughout California through in-person and telehealth sessions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="in-person" className="bg-white border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-base font-normal text-gray-900">
                    Do you offer in-person sessions?
                  </span>
                  <Plus className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 font-light leading-relaxed">
                  Yes, I offer in-person sessions at my Los Angeles office on Tuesdays and Thursdays from 10 AM to 6 PM.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="technology" className="bg-white border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-base font-normal text-gray-900">
                    What technology do you use for virtual sessions?
                  </span>
                  <Plus className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 font-light leading-relaxed">
                  I use secure, HIPAA-compliant video conferencing platforms for all virtual sessions to ensure your privacy and confidentiality.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="hours" className="bg-white border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-base font-normal text-gray-900">
                    What are your hours?
                  </span>
                  <Plus className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 font-light leading-relaxed">
                  In-person sessions: Tuesday & Thursday, 10 AM–6 PM. Virtual sessions: Monday, Wednesday & Friday, 1 PM–5 PM.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cost" className="bg-white border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-base font-normal text-gray-900">
                    What is the cost of therapy?
                  </span>
                  <Plus className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 font-light leading-relaxed">
                  Individual sessions are $200 and couples sessions are $240. Payment is due at the time of service.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="benefits" className="bg-white border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-base font-normal text-gray-900">
                    What are the benefits of private pay therapy?
                  </span>
                  <Plus className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 font-light leading-relaxed">
                  Private pay therapy offers greater privacy, flexibility in treatment approach, and no insurance company limitations on the number of sessions or treatment methods.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 font-light">
              Simply fill out the brief fields below and Dr. Blake will be in 
              touch with you soon, usually within one business day. This form is 
              safe, private, and completely free.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-teal-600 rounded-full p-4 inline-block mb-6">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Thank you!</h3>
                <p className="text-gray-600 font-light">I'll be in touch with you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-900 mb-2 block">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`border-gray-300 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-2 block">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`border-gray-300 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-2 block">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`border-gray-300 ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="(555) 555-5555"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-2 block">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`border-gray-300 ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="How can I help you?"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <div>
                  <Label htmlFor="preferredTime" className="text-sm font-medium text-gray-900 mb-2 block">Preferred Contact Time</Label>
                  <Input
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className={`border-gray-300 ${errors.preferredTime ? 'border-red-500' : ''}`}
                    placeholder="e.g. Mornings, Afternoons, Evenings, Weekends"
                  />
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                </div>
                
                <div className="text-sm text-gray-600 font-light">
                  Let us know when you're typically available for a call or consultation
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-gray-900 mb-2 block">Preferred Contact Method</Label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                    <option>Select preferred method</option>
                    <option>Phone</option>
                    <option>Email</option>
                    <option>Text</option>
                  </select>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToContact"
                    checked={formData.agreeToContact}
                    onCheckedChange={(checked) => handleInputChange('agreeToContact', checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="agreeToContact" className="text-sm text-gray-600 font-light leading-relaxed">
                    I'm not a robot
                  </Label>
                </div>
                {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact}</p>}
                
                <Button 
                  type="submit" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
                
                <div className="text-xs text-gray-500 font-light text-center">
                  By clicking submit you consent to receive texts and emails from 
                  Dr. Serena Blake
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
            </div>
            <div>
              <div className="text-sm font-medium">Serena Blake, Psy.D</div>
              <div className="text-xs text-gray-400">Psychological Services</div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-400">
            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <p>(323) 555-0192 • serena@blakepsychology.com</p>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            © 2024 Dr. Serena Blake Psychology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}