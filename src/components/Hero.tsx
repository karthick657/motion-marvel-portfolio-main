import { useEffect, useState } from 'react';
import heroBg from '../assets/hero-bg.jpg';
import profileImg from '../assets/karthick raja.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2c]/90 to-[#6e59a5]/90" />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <img 
              src={profileImg} 
              alt="Karthick Raja Suresh" 
              className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover
                       hover:scale-105 transition-transform duration-300
                       animate-bounce-slow"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-pulse" />
          </div>

          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
            Hello, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Karthick Raja Suresh</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 animate-slide-up">
            Frontend Developer at Centizen
          </p>
          
          <p className="text-md text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Looking for perfect usage and a company to win my skills to the future. I am eager to develop the stack of the company with my skills
          </p>
          
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold 
                           hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50
                           animate-bounce-slow">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
