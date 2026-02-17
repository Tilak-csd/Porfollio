import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  
  // FIXED TARGET DATE: This ensures everyone sees the same countdown.
  // Format: YYYY-MM-DDTHH:mm:ss (Year, Month, Day, Time)
  const TARGET_DATE = "2026-03-05T00:00:00"; 

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, mins: 0, secs: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      let res = { days: 0, hours: 0, mins: 0, secs: 0 };

      if (difference > 0) {
        res = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        };
      }
      return res;
    };

    // Initial call
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-auto bg-white text-slate-900 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <main className="max-w-4xl w-full text-center flex flex-col items-center z-10">
        {/* Logo Section */}
        <div className="mb-6">
          <img 
            src="/logo.png" 
            alt="Tilak Gubhaju Logo" 
            className="h-36 w-36 md:h-48 md:w-48 object-contain drop-shadow-sm"
          />
        </div>

        {/* Heading Section */}
        <div className="space-y-4 mb-10">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Something <span className="text-slate-400 italic font-serif">great</span> is cooking.
          </h1>
          <p className="text-base md:text-xl text-slate-500 max-w-xl mx-auto px-4">
            I'm currently refining my full-stack portfolio to showcase new projects and technical experiments. Stay tuned!
          </p>
        </div>

        {/* Constant Countdown Grid */}
        <div className="flex gap-4 md:gap-10 justify-center mb-12">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center min-w-[65px] md:min-w-[100px]">
              <span className="text-3xl md:text-6xl font-black text-slate-800 tabular-nums tracking-tighter">
                {String(value).padStart(2, '0')}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mt-2">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Email Subscription - Balanced Alignment */}
        <form 
          className="flex flex-col sm:flex-row w-full max-w-lg group rounded-2xl overflow-hidden border border-slate-200 shadow-sm focus-within:border-slate-400 focus-within:ring-1 focus-within:ring-slate-400 transition-all bg-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-6 py-4 text-slate-900 focus:outline-none bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="px-10 py-4 bg-slate-900 text-white font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors active:scale-95 whitespace-nowrap">
            Notify Me
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-8 mt-16">
          {[Github, Linkedin, Twitter, Mail].map((Icon, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="text-slate-300 hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="mt-20 md:mt-0 text-center w-full md:flex">
        <div className="inline-block border-t border-slate-100 text-center w-full pt-6 px-8">
          <p className="text-slate-600 font-semibold text-sm tracking-wide">
            © 2024 Tilak Man Gubhaju
          </p>
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.4em] mt-1.5 font-black">
            Full-Stack Developer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;