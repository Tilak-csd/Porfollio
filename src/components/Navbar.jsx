import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold tracking-tighter text-blue-600">
        TILAK.G
      </Link>
      <div className="space-x-8 font-medium text-slate-600">
        <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
        <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Contact
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;