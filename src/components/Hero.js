import Image from 'next/image';

const Hero = () => {
  return (
    <section id="beranda" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/heroatas.jpeg" 
          alt="Luxury Home Background"
          fill
          className="object-cover z-0 transform scale-105"
          priority
          quality={100}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
      
      {/* Konten Teks dengan Animasi */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Luxury Badge */}
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
            <span className="text-gold-400 font-light tracking-widest">LUXURY LIVING</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight animate-slide-up">
            <span className="text-gold-400">Your Dream</span> Home<br />
            Awaits You
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-12 animate-fade-in delay-100">
            Discover exquisite properties crafted for the discerning few who appreciate true elegance.
          </p>
          
          {/* CTA Button */}
          <button className="px-12 py-4 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-sm transition-all duration-300 transform hover:scale-105 animate-fade-in delay-200">
            Explore Properties
          </button>
        </div>
        
        {/* Scrolling Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
        {/* Gold Accent Lines */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-400 to-transparent opacity-20"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-gold-400 to-transparent opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;