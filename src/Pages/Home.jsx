import TerminalHero from '../components/TerminalHero';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    { title: "Manifest Education", tech: "PERN", url: "https://manifestedu.com.np", description: "Education consultancy platform built with Postgres and React." },
    { title: "Shrestha Cafe", tech: "PERN", url: "https://shresthacafe.vercel.app", description: "Digital menu and ordering system for local cafes." },
    { title: "Spices E-commerce", tech: "WordPress", url: "https://uttam.kodebymanish.xyz", description: "Fully integrated spice marketplace." },
  ];

  return (
    <div className="bg-[#010409] text-white min-h-screen selection:bg-blue-500/30">
      <TerminalHero />
      
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-blue-500">01.</span> Selected Works
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      <footer className="py-10 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>All Rights Reserved © {new Date().getFullYear()} Tilak M. Gubhaju</p>
      </footer>
    </div>
  );
};

export default Home;