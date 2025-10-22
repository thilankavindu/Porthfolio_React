import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';


const roles = ['Web Developer', 'UI/UX Designer', 'Front-End Developer'];

const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[roleIndex];
      setCurrentRole(
        isDeleting
          ? fullRole.substring(0, currentRole.length - 1)
          : fullRole.substring(0, currentRole.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && currentRole === fullRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentRole, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="home-content text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Hi, I'm <span className="text-cyan-400">Kavindu Thilan</span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-bold my-4 text-white">
              I'm a <span className="text-cyan-400">{currentRole}</span>
              <span className="animate-ping">|</span>
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
              Welcome to my portfolio! As a dedicated developer, I specialize in building modern and user-friendly web applications with React and Node.js. With a strong focus on simplicity and functionality, I craft intuitive interfaces and efficient backend solutions.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 my-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-12 h-12 bg-slate-800 text-cyan-400 rounded-full flex items-center justify-center text-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-110"
                >
                  <link.icon />
                </a>
              ))}
            </div>

            {/* FIX: Replaced <style jsx> with Tailwind CSS utility classes to fix compilation error. */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="mailto:kavinduthilan4@gmail.com" className="inline-block py-3 px-8 rounded-full font-semibold text-center transition-all duration-300 border-2 border-cyan-400 bg-cyan-400 text-slate-900 hover:bg-transparent hover:text-cyan-400">
                Hire Me
              </a>
              <a href="#contact" className="inline-block py-3 px-8 rounded-full font-semibold text-center transition-all duration-300 border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                Contact
              </a>
            </div>
          </div>

          <div className="home-img flex justify-center">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-cyan-400/50 shadow-lg shadow-cyan-400/20">
              <img src="asset/WhatsApp.jpeg" alt="Kavindu Thilan" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;