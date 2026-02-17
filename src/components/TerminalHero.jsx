import { AnimatedText } from './AnimatedText';

const TerminalHero = () => (
  <section className="pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto bg-[#0d1117] rounded-lg border border-slate-800 shadow-2xl overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-[#161b22] px-4 py-2 flex gap-2 border-b border-slate-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      {/* Terminal Content */}
      <div className="p-8 font-mono">
        <div className="flex gap-2 text-green-400 mb-2">
          <span>➜</span>
          <span className="text-blue-400">~/tilak-gubhaju</span>
          <span className="text-white">whoami</span>
        </div>
        <AnimatedText 
          text="Full-Stack Developer. Master in React, Node, and Python. Building the future one line at a time."
          className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-6"
        />
        <div className="flex gap-2 text-green-400">
          <span>➜</span>
          <span className="animate-pulse w-2 h-6 bg-green-400" />
        </div>
      </div>
    </div>
  </section>
);

export default TerminalHero;