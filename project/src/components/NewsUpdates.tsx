import React, { useEffect, useRef, useState } from 'react';

type NewsCardProps = {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  isVisible: boolean;
  delay: number;
};

const NewsCard: React.FC<NewsCardProps> = ({
  date,
  title,
  excerpt,
  image,
  isVisible,
  delay,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-orange-600">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <a
          href="#"
          className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors duration-300"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
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
  );
};

export const NewsUpdates = () => {
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

  const newsItems = [
    {
      date: "June 12, 2023",
      title: "Rohit Leads India to Victory in Thrilling Match",
      excerpt: "Captain Rohit Sharma's century helps India secure a dramatic win against Australia in the series opener.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZL4PmrTsmiwJQPyp__AkPEQvs2MVTDWTqQ&s"
    },
    {
      date: "May 29, 2023",
      title: "Sharma to Lead India in Upcoming World Championship",
      excerpt: "Rohit Sharma has been confirmed as India's captain for the ICC World Championship next month.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SpRVA1xDPeRHId2BnorzWI_haeOic-IoTQ&s"
    },
    {
      date: "April 14, 2023",
      title: "Rohit Climbs to Second Position in ICC Rankings",
      excerpt: "After consistent performances, Rohit Sharma has moved up to second position in the ICC ODI Rankings.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bkX-Ojc2VBPLFdv6DCgM753VNUSCwkb4dg&s"
    },
  ];

  return (
    <section
      id="news"
      ref={sectionRef}
      className="py-20 bg-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            <span className="border-b-4 border-orange-500 pb-2">Latest News & Updates</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
            Stay updated with the latest news, match reports, and updates about Rohit Sharma's 
            cricket career and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard
              key={index}
              date={news.date}
              title={news.title}
              excerpt={news.excerpt}
              image={news.image}
              isVisible={isVisible}
              delay={200 + (index * 200)}
            />
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="#"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            View All News
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