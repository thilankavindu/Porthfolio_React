import React from 'react';
import { FOOTER_SOCIAL_LINKS, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // height of the header (h-20)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <div className="flex justify-center space-x-6 mb-6">
          {FOOTER_SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-3xl text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-125"
            >
              <link.icon />
            </a>
          ))}
        </div>
        <ul className="flex flex-wrap justify-center space-x-6 mb-6">
          {NAV_LINKS.map((link) => (
             <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
          ))}
        </ul>
        <p className="copyright">
          © {new Date().getFullYear()} Kavindu Thilan | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;