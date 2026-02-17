import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  // Optional: Add a countdown logic here if you have a launch date
  const [timeLeft, setTimeLeft] = useState({
    days: 12, hours: 0, mins: 45, secs: 30
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 font-sans">
      {/* Background Subtle Gradient/Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <main className="max-w-3xl w-full text-center space-y-8">
        {/* Logo/Name */}
        <h2 className="text-xl font-bold tracking-tighter uppercase mb-12">
          Tilak Gubhaju
        </h2>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            Something <span className="text-slate-400 italic">great</span> is cooking.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto">
            I'm currently refining my full-stack portfolio to showcase new projects and technical experiments. Stay tuned!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto py-8">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-800">{value}</span>
              <span className="text-xs uppercase tracking-widest text-slate-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-64 px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors group">
            Notify Me
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-12">
          {[
            { Icon: Github, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Mail, href: "#" }
          ].map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <item.Icon size={24} />
            </a>
          ))}
        </div>
      </main>

      <footer className="absolute bottom-8 text-slate-400 text-sm">
        © 2024 Tilak Man Gubhaju — Full-Stack Developer
      </footer>
    </div>
  );
};

export default ComingSoon;