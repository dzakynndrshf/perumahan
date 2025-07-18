'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Location = () => {
  const [activeMap, setActiveMap] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const locations = [
    {
      id: 'tarumanagara',
      name: "Tarumanagara Jatinangor",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6260386516697!2d107.78814207429282!3d-6.93522006788603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c5e776c1309b%3A0x13a6310b8e933e88!2sTarumanagara%20Jatinangor!5e0!3m2!1sid!2sid!4v1752721372654!5m2!1sid!2sid",
      placeUrl: "https://www.google.com/maps/place/Tarumanagara+Jatinangor",
      description: "Exclusive modern residence in Jatinangor near UNPAD, ITB, and IPDN campuses",
      highlights: ["Prestigious university area", "Comprehensive facilities", "24/7 security"],
      brochureUrl: "/brochures/tarumanagara.pdf"
    },
    {
      id: 'v-residence',
      name: "V Residence Baleendah",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0363480215165!2d107.61842247429392!3d-7.005002868610501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e978aede2929%3A0xba4213d928d00112!2sV%20Residence%20Baleendah!5e0!3m2!1sid!2sid!4v1752722027284!5m2!1sid!2sid",
      placeUrl: "https://www.google.com/maps/place/V+Residence+Baleendah",
      description: "Premium residential area in Baleendah with complete facilities",
      highlights: ["Strategic location", "Thematic park", "One gate system"],
      brochureUrl: "/brochures/v-residence.pdf"
    },
    {
      id: 'senopati',
      name: "Senopati Banjaran",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7656185016276!2d107.5800448591323!3d-7.036809815927034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eb041f85ca3d%3A0xdfa6d5c6d206d4b8!2sSenopati%20Banjaran!5e0!3m2!1sid!2sid!4v1752721981644!5m2!1sid!2sid",
      placeUrl: "https://www.google.com/maps/place/Senopati+Banjaran",
      description: "Serene residential area in Banjaran with modern concept",
      highlights: ["Resort-style amenities", "Landscaped gardens", "Family-friendly environment"],
      brochureUrl: "/brochures/senopati.pdf"
    }
  ];

  const handleMapClick = (locationId, e) => {
    if (isMobile) {
      // Prevent the click from propagating to parent elements
      e.stopPropagation();
      setActiveMap(activeMap === locationId ? null : locationId);
    }
  };

  return (
    <section id="lokasi" className="relative py-28 bg-gray-900 overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/luxury-pattern.png')] bg-repeat bg-[length:300px]"></div>
      </div>
      
      {/* Gold Accent Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-yellow-600/20 text-yellow-400 text-sm font-light tracking-widest rounded-full mb-4">
            PRIME LOCATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Strategic <span className="text-yellow-400">Property</span> Locations
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our premium developments in Bandung's most sought-after neighborhoods
          </p>
        </div>
        
        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
              whileHover={{ y: isMobile ? 0 : -5 }}
            >
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-500 opacity-30"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-500 opacity-30"></div>
              
              {/* Map - Interactive on mobile */}
              <div 
                className="relative h-64 w-full overflow-hidden cursor-pointer"
                onClick={(e) => handleMapClick(location.id, e)}
              >
                {activeMap === location.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                    <a
                      href={location.placeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                )}
                <iframe
                  src={location.mapUrl}
                  className="w-full h-full pointer-events-none"
                  style={{border:0}}
                  allowFullScreen
                  loading="lazy"
                  title={`Map of ${location.name}`}
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{location.name}</h3>
                <p className="text-gray-300 mb-4">{location.description}</p>
                
                {/* Highlights */}
                <div className="mb-5">
                  <h4 className="flex items-center text-yellow-400 text-sm font-medium mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    KEY HIGHLIGHTS
                  </h4>
                  <ul className="space-y-1">
                    {location.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <span className="text-yellow-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Button */}
                <a
                  href={location.placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-4 border border-yellow-600 text-yellow-400 rounded-md hover:bg-yellow-600/10 transition-colors duration-300 text-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  View on Map
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6">
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Need Help Finding a Location?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our property consultants are ready to assist you in finding your perfect home
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6282116000100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-medium rounded-md hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.51c.545 1.37 1.677 2.506 3.054 3.044l.359-1.107c.109-.337.525-.494.84-.327l1.226.629c.314.166.43.603.26.922l-.599.997c-.17.319-.514.42-.82.273a7.604 7.604 0 01-2.93-2.945.752.752 0 01.06-.916l.786-.788a.75.75 0 00.112-.876l-.54-.975zM12 2.163c-5.338 0-9.663 4.325-9.663 9.663 0 5.338 4.325 9.663 9.663 9.663 5.338 0 9.663-4.325 9.663-9.663 0-5.338-4.325-9.663-9.663-9.663z" />
                </svg>
                WhatsApp Consultation
              </a>
              <a
                href="https://drive.google.com/drive/folders/1vXRH1v6cm2KJEi9-YopnSuRt98H9IVo8?usp=sharing"
                download
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-md hover:bg-white/20 transition-all duration-300"
              >
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;