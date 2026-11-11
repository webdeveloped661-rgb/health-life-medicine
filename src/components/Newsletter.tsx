import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. name@example.com).');
      return;
    }

    // Success simulation
    setStatus('success');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <section className="py-16 bg-[#B9EDF3]/50 border-b border-[#20B9D2]/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="w-12 h-12 rounded-2xl bg-white shadow-xs text-[#20B9D2] flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#243746] tracking-tight">
          Stay Connected With Our Health Updates
        </h2>

        <p className="mt-2 text-sm sm:text-base text-[#546E7A] max-w-xl mx-auto">
          Receive updates about healthcare information, new products, and wellness resources. We respect your privacy and never share your email.
        </p>

        {status === 'success' ? (
          <div className="mt-6 p-4 rounded-2xl bg-[#DCFCE7] border border-[#bbf7d0] text-xs text-[#166534] font-semibold max-w-md mx-auto flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Thank you for subscribing! You will receive our monthly clinical wellness updates.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address..."
                className="flex-grow px-4 py-3 rounded-xl bg-white text-xs text-[#263238] placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#20B9D2] shadow-xs"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {status === 'error' && (
              <div className="mt-2 text-xs text-[#991B1B] flex items-center justify-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>
        )}

      </div>
    </section>
  );
};
