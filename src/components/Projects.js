import PropertyCard from './PropertyCard';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "TARUMANAGARA JATINANGOR",
    subtitle: "LUXURY RESIDENCE",
    description: "An exclusive modern minimalist residential complex in Jatinangor, surrounded by 4 prestigious universities (UNPAD, ITB, IPDN & IKOPIN) with convenient access to healthcare facilities, tourist destinations, toll roads, KAI station, and other transportation modes.",
    features: [
      "Serene mountain city views",
      "Comprehensive facilities: Mosque, Playground, Club House",
      "Swimming Pool, Kids Pool, BBQ Grill Pod",
      "One gate system with access card",
      "24/7 CCTV surveillance and security"
    ],
    units: "400 Exclusive Units",
    image: "/Tarumanagara.png",
    locationDetails: [
      "Jaya Glass Chiyu",
      "Lane Park",
      "Padjadjaran University",
      "TB Jatinangor Mosque",
      "Tarumanagara Jatinangor"
    ]
  },
  {
    id: 2,
    title: "V RESIDENCE",
    subtitle: "PREMIUM LIVING",
    description: "A premium residential development in Baleendah offering modern comfort and sophisticated family living.",
    features: [
      "24/7 Professional Security",
      "Prime Strategic Location",
      "Exclusive One Gate System",
      "Landscaped Thematic Park",
      "Competitive Value Pricing"
    ],
    units: "10 Limited Edition Units",
    image: "/v_residence.jpeg",
    locationDetails: [
      "Al Hasan Hospital",
      "Promni Jawa Basri",
      "V Residence Baleendah",
      "Cipatahunan Lake"
    ]
  },
  {
    id: 3,
    title: "SENOPATI ESTATE",
    subtitle: "ELITE ENCLAVE",
    description: "A fully-equipped residential community in Banjaran, Bandung, designed for discerning homeowners.",
    features: [
      "Round-the-clock Security",
      "Premium Jogging Track",
      "Resort-style Swimming Pool",
      "Children's Playground",
      "Community Mosque"
    ],
    units: "10 Signature Units",
    image: "/senopati.jpg",
    locationDetails: [
      "Ndansa Ciherang",
      "Panti Amanat Umat",
      "Mufian Residence",
      "Senopati Banjaran"
    ]
  }
];

const Projects = () => {
  return (
    <section id="proyek" className="relative py-28 bg-gray-900 overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/luxury-pattern.png')] bg-repeat bg-[length:300px]"></div>
      </div>
      
      {/* Gold Accent Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 bg-yellow-600/20 text-yellow-400 text-sm font-light tracking-widest rounded-full mb-4">
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Exclusive <span className="text-yellow-400">Properties</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our curated collection of premium residential developments, each crafted with meticulous attention to detail and uncompromising quality.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`relative group ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-yellow-500 opacity-30"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-yellow-500 opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-yellow-500 opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-yellow-500 opacity-30"></div>
              
              <PropertyCard 
                project={project} 
                isFeatured={index === 0}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;