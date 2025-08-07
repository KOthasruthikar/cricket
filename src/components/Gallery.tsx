import React, { useEffect, useRef, useState } from 'react';

type GalleryItemProps = {
  src: string;
  alt: string;
  isVisible: boolean;
  delay: number;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, isVisible, delay }) => {
  return (
    <div
      className={`overflow-hidden rounded-lg shadow-lg transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
};

export const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const galleryImages = [
    {
      src: "https://img.theweek.in/content/dam/week/magazine/theweek/sports/images/2023/11/25/56-Rohit-Sharma.jpg",
      alt: "Cricket Match Action"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4sH5w5FOiE33MY6mYmOYYbMRCsQR53U-Nw&s",
      alt: "Cricket Stadium"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDX5ZHC54p0P5D2cmiRIc8lI-QheNlwxV1w&s",
      alt: "Cricket Celebration"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCafSZFbWWGOQbU-I8r8RbTXTaKz_JtySnwA&s",
      alt: "Cricket Team"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUzoCWvtbNQsyhgvlYFaz0950_ZjNiRpvOg&s",
      alt: "Cricket Trophy"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SpRVA1xDPeRHId2BnorzWI_haeOic-IoTQ&s",
      alt: "Cricket Fans"
    },
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-blue-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            <span className="border-b-4 border-orange-500 pb-2">Photo Gallery</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
            Memorable moments from Rohit Sharma's illustrious cricket career across formats and tournaments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={index}
              src={image.src}
              alt={image.alt}
              isVisible={isVisible}
              delay={200 + (index * 100)}
            />
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="#"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            View More Photos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};