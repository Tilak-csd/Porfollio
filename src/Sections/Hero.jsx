// src/sections/Hero.jsx
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-brandBlack text-white flex items-center px-12 md:px-24 overflow-hidden">
      
      {/* Left Content */}
      <div className="z-10 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-brandGrey" />
          <span className="text-brandGrey uppercase tracking-widest text-sm">Hello</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          I'm <span className="text-white">Joseph Lawrence</span>
        </h1>
        
        <p className="text-brandGrey text-lg mb-8">
          A full stack developer based in Toronto.
        </p>
        
        <button className="bg-brandOrange hover:bg-orange-600 px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105">
          Learn more
        </button>
      </div>

      {/* Floating 3D Character (Placeholder for the image) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 flex justify-center">
        <img 
          src="/path-to-your-character.png" 
          alt="3D Character" 
          className="w-full max-w-lg object-contain animate-pulse-slow" 
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-10 flex flex-col items-center gap-4">
        <span className="rotate-90 text-[10px] uppercase tracking-[0.2em] text-brandGrey origin-left">
          scroll down
        </span>
        <div className="w-[1px] h-12 bg-brandGrey/30" />
      </div>

    </section>
  );
};

export default Hero;