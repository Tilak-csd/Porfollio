const ProjectCard = ({ title, tech, url, description }) => (
  <a 
    href={url} 
    target="_blank" 
    className="group block p-8 bg-[#161b22] border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
  >
    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{tech}</p>
    <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-slate-400 mt-4 text-sm leading-relaxed">{description}</p>
    <div className="mt-6 flex items-center text-sm font-medium text-slate-500 group-hover:translate-x-2 transition-transform">
      Visit Website <span className="ml-2">→</span>
    </div>
  </a>
);

export default ProjectCard