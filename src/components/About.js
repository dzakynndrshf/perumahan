import Image from 'next/image';

const About = () => {
  return (
    <section id="tentang" className="py-28 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bahan.jpeg" // Replace with your high-quality background image
          alt="Luxury property background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gray-900/30"></div>
      </div>
      
      {/* Gold Accent Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-yellow-600/20 text-yellow-400 text-sm font-light tracking-widest rounded-full mb-4">
              ABOUT OUR COMPANY
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Crafting <span className="text-yellow-400">Exclusive</span> Living Spaces
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Content */}
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                Nagara Property is a premier property development firm based in Bandung, specializing in creating 
                exceptional living experiences through impeccable design aesthetics and unparalleled craftsmanship.
              </p>
              <p className="text-lg text-gray-100 mb-10 leading-relaxed">
                With our primary focus on Bandung and Jatinangor, we transform visions into reality, 
                crafting residences that embody sophistication and timeless elegance.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all">
                  <span className="block text-5xl font-serif font-bold text-yellow-400 mb-2">3+</span>
                  <p className="text-gray-100 uppercase text-sm tracking-wider">Luxury Residential Projects</p>
                </div>
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all">
                  <span className="block text-5xl font-serif font-bold text-yellow-400 mb-2">1</span>
                  <p className="text-gray-100 uppercase text-sm tracking-wider">Premium Commercial Development</p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/heroatas.jpeg" // Replace with your company/project image
                  alt="Nagara Property headquarters"
                  fill
                  className="object-cover transform hover:scale-105 transition duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-serif mb-2">Bandung Headquarters</h3>
                  <p className="text-yellow-300">Since 2015</p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-yellow-500 opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;