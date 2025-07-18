'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Property data with ALL properties including Senopati
  const propertyData = [
    {
      id: 'tarumanagara',
      title: 'Tarumanagara Jatinangor',
      subtitle: 'LUXURY RESIDENCE',
      description: 'Perumahan eksklusif di Jatinangor dekat kampus UNPAD, ITB, dan IPDN',
      coverImage: {
        src: '/tarumanagara/tarumanagara1.png',
        alt: 'Tampak depan Tarumanagara'
      },
      images: [
        { id: 'img-1', src: '/tarumanagara/tarumanagara1.png', alt: 'Tampak depan Tarumanagara' },
        { id: 'img-2', src: '/tarumanagara/living_room.png', alt: 'Ruang tamu elegan' },
        { id: 'img-3', src: '/tarumanagara/kamar_utama.jpeg', alt: 'Kamar utama' },
        { id: 'img-4', src: '/tarumanagara/dapur.png', alt: 'Dapur modern' }
      ],
      details: {
        location: 'Jatinangor, Sumedang',
        luas: '60m² - 120m²',
        kamar: '2-4 Kamar Tidur',
        harga: 'Rp 800jt - Rp 1.5M'
      }
    },
    {
      id: 'v-residence',
      title: 'V Residence Baleendah',
      subtitle: 'PREMIUM LIVING',
      description: 'Perumahan premium di Baleendah dengan fasilitas lengkap',
      coverImage: {
        src: '/v_residence/rumah.jpeg',
        alt: 'Tampak luar V Residence'
      },
      images: [
        { id: 'img-5', src: '/v_residence/keluarga.jpeg', alt: 'Tampak luar V Residence' },
        { id: 'img-6', src: '/v_residence/kamar.jpeg', alt: 'Area ruang tamu' },
        { id: 'img-7', src: '/v_residence/dapur.jpg', alt: 'Kamar tidur nyaman' },
        { id: 'img-8', src: '/v_residence/rumah.jpeg', alt: 'Rumah yang nyaman' }
      ],
      details: {
        location: 'Baleendah, Bandung',
        luas: '45m² - 90m²',
        kamar: '1-3 Kamar Tidur',
        harga: 'Rp 500jt - Rp 900jt'
      }
    },
    {
      id: 'senopati',
      title: 'Senopati Estate',
      subtitle: 'ELITE ENCLAVE',
      description: 'Kawasan perumahan mewah di Banjaran dengan fasilitas resort',
      coverImage: {
        src: '/senopati/rumah.jpg',
        alt: 'Pintu masuk utama'
      },
      images: [
        { id: 'img-9', src: '/senopati/rumah.jpg', alt: 'Pintu masuk utama' },
        { id: 'img-10', src: '/senopati/dapur.jpg', alt: 'Dapur mewah' },
        { id: 'img-11', src: '/senopati/kamar.jpg', alt: 'Kamar tidur utama' },
        { id: 'img-12', src: '/senopati/keluarga.jpg', alt: 'Ruang keluarga luas' }
      ],
      details: {
        location: 'Banjaran, Bandung Selatan',
        luas: '80m² - 150m²',
        kamar: '3-5 Kamar Tidur',
        harga: 'Rp 1.2M - Rp 2.5M'
      }
    }
  ];

  // Handle scroll locking
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalOpen]);

  const openModal = useCallback((property) => {
    setSelectedProperty(property);
    setActiveIndex(0);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const navigateSlide = useCallback((direction) => {
    setActiveIndex(prev => {
      if (direction === 'next') {
        return prev === selectedProperty.images.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? selectedProperty.images.length - 1 : prev - 1;
      }
    });
  }, [selectedProperty]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'ArrowRight') navigateSlide('next');
      if (e.key === 'ArrowLeft') navigateSlide('prev');
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, navigateSlide, closeModal]);

  return (
    <section className="relative py-20 bg-gray-950">
      {/* Modal/Popup */}
      <AnimatePresence>
        {isModalOpen && selectedProperty && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/90 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div 
                className="relative bg-gray-900 border border-gray-700 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Gallery */}
                  <div className="relative aspect-square md:aspect-video bg-gray-950">
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse">Loading...</div>
                      </div>
                    )}
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`modal-image-${activeIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={selectedProperty.images[activeIndex].src}
                          alt={selectedProperty.images[activeIndex].alt}
                          fill
                          className="object-contain"
                          onLoadingComplete={() => setIsLoading(false)}
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Navigation Arrows */}
                    <button 
                      onClick={() => navigateSlide('prev')}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => navigateSlide('next')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Property Details */}
                  <div className="p-6">
                    <div className="mb-6">
                      <span className="text-yellow-400 text-sm font-medium">
                        {selectedProperty.subtitle}
                      </span>
                      <h2 className="text-3xl font-bold text-white mt-2">{selectedProperty.title}</h2>
                      <p className="text-gray-300 mt-4">{selectedProperty.description}</p>
                      
                      {/* Detail Specifications */}
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-gray-400 text-sm">Lokasi</h4>
                          <p className="text-white">{selectedProperty.details.location}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400 text-sm">Luas Bangunan</h4>
                          <p className="text-white">{selectedProperty.details.luas}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400 text-sm">Jumlah Kamar</h4>
                          <p className="text-white">{selectedProperty.details.kamar}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400 text-sm">Harga</h4>
                          <p className="text-white">{selectedProperty.details.harga}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Thumbnail Gallery */}
                    <div className="mt-8">
                      <h4 className="text-white font-medium mb-4">Gallery</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {selectedProperty.images.map((image, index) => (
                          <button
                            key={image.id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                              activeIndex === index ? 'border-yellow-500' : 'border-transparent'
                            }`}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact Button */}
                    <button className="mt-8 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg font-medium transition">
                      Hubungi Marketing
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Property Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyData.map((property) => (
            <div 
              key={property.id}
              className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition"
              onClick={() => openModal(property)}
            >
              <div className="relative h-64">
                <Image
                  src={property.coverImage.src}
                  alt={property.coverImage.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{property.title}</h3>
                  <p className="text-gray-300">{property.images.length} photos</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{property.description}</p>
                <button className="text-yellow-400 hover:text-yellow-300 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;