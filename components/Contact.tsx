import React, { useState } from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import { AiIcon } from './icons/AiIcon';
import { CodeIcon } from './icons/CodeIcon';
import { CloudIcon } from './icons/CloudIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';
type FormStep = 'service' | 'details' | 'contact';
type ServiceType = 'AI' | 'Software' | 'Cloud' | 'General';

const FormInput = ({ id, label, type = 'text', required = true }: { id: string; label: string; type?: string; required?: boolean; }) => (
    <div className="relative">
        <input 
            required={required}
            type={type} 
            id={id} 
            name={id} 
            className="peer block w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 placeholder-transparent"
            placeholder={label}
        />
        <label 
            htmlFor={id} 
            className="absolute left-4 -top-2.5 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-[#0a0a0a] px-1 transition-all
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400
                       peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent
                       peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 dark:peer-focus:text-purple-400 peer-focus:bg-gray-50 dark:peer-focus:bg-[#0a0a0a]"
        >
            {label}
        </label>
    </div>
);

const FormTextarea = ({ id, label, required = true }: { id: string; label: string; required?: boolean; }) => (
    <div className="relative">
        <textarea 
            required={required}
            id={id} 
            name={id} 
            rows={4} 
            className="peer block w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 placeholder-transparent"
            placeholder={label}
        ></textarea>
        <label 
            htmlFor={id} 
            className="absolute left-4 -top-2.5 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-[#0a0a0a] px-1 transition-all
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400
                       peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent
                       peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 dark:peer-focus:text-purple-400 peer-focus:bg-gray-50 dark:peer-focus:bg-[#0a0a0a]"
        >
            {label}
        </label>
    </div>
);

const ServiceButton = ({ icon, label, onClick, selected }: { icon: React.ReactNode; label: string; onClick: () => void; selected: boolean }) => (
    <button type="button" onClick={onClick} className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 w-full transition-all duration-300 ${selected ? 'border-purple-500 bg-purple-500/10 shadow-lg' : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/50 hover:border-purple-400 hover:bg-purple-500/5'}`}>
        <div className={`mb-2 ${selected ? 'text-purple-500' : 'text-gray-600 dark:text-gray-400'}`}>{icon}</div>
        <span className={`font-semibold ${selected ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>{label}</span>
    </button>
);


const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [step, setStep] = useState<FormStep>('service');
  const [service, setService] = useState<ServiceType | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  const handleServiceSelect = (selectedService: ServiceType) => {
    setService(selectedService);
    setStep('details');
  };
  
  const renderStep = () => {
    switch (step) {
      case 'service':
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">What can we help you with?</h3>
            <div className="grid grid-cols-2 gap-4">
              <ServiceButton icon={<AiIcon />} label="AI & ML" onClick={() => handleServiceSelect('AI')} selected={service === 'AI'} />
              <ServiceButton icon={<CodeIcon />} label="Software" onClick={() => handleServiceSelect('Software')} selected={service === 'Software'} />
              <ServiceButton icon={<CloudIcon />} label="Cloud/DevOps" onClick={() => handleServiceSelect('Cloud')} selected={service === 'Cloud'} />
              <ServiceButton icon={<BriefcaseIcon />} label="General" onClick={() => handleServiceSelect('General')} selected={service === 'General'} />
            </div>
          </div>
        );
      case 'details':
        return (
            <div className="space-y-8 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Tell us about your project</h3>
                <FormInput id="name" label="Full Name" />
                <FormInput id="email" label="Email Address" type="email" />
                <FormTextarea id="message" label="Your Message" />
                <div className="flex justify-between pt-2">
                    <button type="button" onClick={() => setStep('service')} className="text-gray-600 dark:text-gray-400 hover:text-purple-500">
                        &larr; Back
                    </button>
                    <button 
                        type="submit" 
                        disabled={status === 'sending'}
                        className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:bg-purple-400 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </div>
        );
      default: return null;
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Let's Build Something Amazing Together</p>
          </div>
          <div className="max-w-xl mx-auto">
            {status === 'success' ? (
                <div className="text-center p-8 bg-green-100 dark:bg-green-900/50 border border-green-300 dark:border-green-700 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Thank You!</h3>
                    <p className="text-green-700 dark:text-green-300 mt-2">Your message has been sent. We'll get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-lg">
                    {renderStep()}
                </form>
            )}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Contact;