import Image from 'next/image';

const PropertyCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
      {/* Image Section */}
      <div className="relative h-64 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          {project.status || 'Available'}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-semibold tracking-wider text-yellow-600 uppercase">
            {project.subtitle}
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
            {project.units}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <div className="flex items-center text-gray-800 font-medium mb-3">
            <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Key Features
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {project.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start text-gray-600 text-sm">
                <span className="text-yellow-500 mr-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div className="mb-6">
          <div className="flex items-center text-gray-800 font-medium mb-3">
            <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Nearby Locations
          </div>
          <ul className="space-y-1">
            {project.locationDetails.slice(0, 3).map((location, index) => (
              <li key={index} className="text-gray-600 text-sm flex">
                <span className="text-yellow-500 mr-1">•</span>
                {location}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Section Only */}
        <div className="pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500 block">Starting from</span>
          <p className="text-lg font-bold text-yellow-600">
            {project.price || 'Price on request'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;