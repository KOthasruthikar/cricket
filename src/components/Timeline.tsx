import React, { useEffect, useRef, useState } from 'react';

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  isRight?: boolean;
  isVisible: boolean;
  delay: number;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  isRight = false,
  isVisible,
  delay,
}) => {
  return (
    <div className={`mb-8 flex justify-between items-center w-full ${
      isRight ? 'flex-row-reverse' : ''
    }`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{year.substring(2, 4)}</h1>
      </div>
      <div
        className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 transform transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <h3 className="font-bold text-blue-800 text-lg mb-1">{year}</h3>
        <h4 className="font-semibold text-blue-700">{title}</h4>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export const Timeline = () => {
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

  const timelineEvents = [
    {
      year: '2007',
      title: 'International Debut',
      description: 'Made his ODI debut against Ireland and T20I debut during the World T20, which India won.',
    },
    {
      year: '2013',
      title: 'Opening Breakthrough',
      description: 'Promoted to open in ODIs by MS Dhoni, scored his first double century against Australia (209).',
      isRight: true,
    },
    {
      year: '2014',
      title: 'Record-Breaking 264',
      description: 'Scored highest individual ODI score of 264 against Sri Lanka at Eden Gardens.',
    },
    {
      year: '2015',
      title: 'IPL Success',
      description: 'Led Mumbai Indians to their second IPL title as captain.',
      isRight: true,
    },
    {
      year: '2017',
      title: 'Champions Trophy',
      description: 'Named in the ICC Champions Trophy Team of the Tournament after impressive performances.',
    },
    {
      year: '2019',
      title: 'World Cup Heroics',
      description: 'Scored five centuries in a single World Cup, becoming the first batsman to achieve this feat.',
      isRight: true,
    },
    {
      year: '2021',
      title: 'India Captaincy',
      description: 'Appointed as India\'s full-time T20I and ODI captain, succeeding Virat Kohli.',
    },
    {
      year: '2023',
      title: 'World Cup Success',
      description: 'Led India to the ODI World Cup final with stellar performances throughout the tournament.',
      isRight: true,
    },
  ];

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            <span className="border-b-4 border-orange-500 pb-2">Career Timeline</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
            Follow the journey of Rohit Sharma from his international debut to becoming 
            one of cricket's most accomplished players and captains.
          </p>
        </div>

        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-blue-700 h-full border left-1/2"></div>
          
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              isRight={event.isRight}
              isVisible={isVisible}
              delay={200 + (index * 150)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};