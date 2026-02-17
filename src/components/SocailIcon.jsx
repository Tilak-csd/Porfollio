// src/components/SocialIcon.jsx
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

const socials = [
  { Icon: FaInstagram, link: '#' },
  { Icon: FaTwitter, link: '#' },
  { Icon: FaFacebookF, link: '#' },
  { Icon: FaYoutube, link: '#' },
];

export const SocialSidebar = () => (
  <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-white/70">
    {socials.map((item, index) => (
      <a key={index} href={item.link} className="hover:text-brandOrange transition-colors">
        <item.Icon size={20} />
      </a>
    ))}
  </div>
);