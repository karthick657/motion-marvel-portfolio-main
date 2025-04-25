
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    "Creativity", "Communication", "Adaptability", "Computer Skills",
    "Microsoft Office", "TeamViewer", "JavaScript", "node.js",
    "Web Design", "vegas editing"
  ];

  const languages = ["Tamil", "English"];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#1a1f2c] to-[#2a2f3c]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className={`transform transition-all duration-1000 delay-200 
                         bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20
                         hover:border-purple-500/40 transition-all
                         ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Education</h3>
            <div className="space-y-4 text-gray-300">
              <div className="hover:translate-x-2 transition-transform">
                <p className="font-semibold">BE, Mepco Schlenk Engineering College, Sivakasi</p>
                <p className="text-gray-400">August 2019 - May 2023</p>
              </div>
              <div className="hover:translate-x-2 transition-transform">
                <p className="font-semibold">12th, vedic vidyashram cbse school, Tirunveli</p>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-400
                         bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20
                         hover:border-purple-500/40 transition-all
                         ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Skills & Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-300">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-purple-500/10 px-3 py-1 rounded-full text-sm text-purple-300
                               hover:bg-purple-500/20 transition-colors hover:scale-105 transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-300">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, index) => (
                    <span 
                      key={index} 
                      className="bg-pink-500/10 px-3 py-1 rounded-full text-sm text-pink-300
                               hover:bg-pink-500/20 transition-colors hover:scale-105 transform"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
