import React, { useEffect, useRef, useState } from 'react';

export const Biography = () => {
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

  return (
    <section
      id="biography"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
            <span className="border-b-4 border-orange-500 pb-2">Biography</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div 
            className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="sticky top-24">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://i2.wp.com/m.timesofindia.com/photo/104376768/104376768.jpg?strip=all"
                  alt="Rohit Sharma"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">About:</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium text-blue-800 w-32">Full Name:</span>
                    <span className="text-gray-700">Rohit Gurunath Sharma</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-blue-800 w-32">Born:</span>
                    <span className="text-gray-700">April 30, 1987</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-blue-800 w-32">Birthplace:</span>
                    <span className="text-gray-700">Nagpur, Maharashtra, India</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-blue-800 w-32">Height:</span>
                    <span className="text-gray-700">5'9" (175 cm)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-blue-800 w-32">Batting:</span>
                    <span className="text-gray-700">Right-handed</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-blue-800 w-32">Bowling:</span>
                    <span className="text-gray-700">Right-arm off break</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium text-blue-800 w-32">Role:</span>
                    <span className="text-gray-700">Opening batsman, Captain</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div 
            className={`lg:col-span-3 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">The Rise of "Hitman"</h3>
              <p className="text-gray-700">
                Rohit Gurunath Sharma, born on April 30, 1987, in Nagpur, Maharashtra, has emerged as one of cricket's 
                most formidable batsmen and a successful leader. His journey from Mumbai's local cricket circuits to 
                becoming the captain of the Indian cricket team is a testament to his extraordinary talent, 
                perseverance, and cricketing intelligence.
              </p>

              <h4 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Early Life & Beginnings</h4>
              <p className="text-gray-700">
                Raised in a middle-class family, Rohit's cricketing journey began at a young age. Financial constraints 
                initially limited his opportunities, but his undeniable talent caught the attention of his coach, who 
                suggested he focus on batting. This pivotal advice would later help shape one of cricket's most elegant 
                stroke-makers.
              </p>
              <p className="text-gray-700 mt-4">
                At just 20 years old, Rohit made his international debut for India in 2007 during the ICC World Twenty20, 
                where India emerged victorious. Despite this promising start, his early years in international cricket 
                were marked by inconsistency, leading to periods in and out of the national team.
              </p>

              <h4 className="text-xl font-semibold text-blue-700 mt-8 mb-4">The Transformation</h4>
              <p className="text-gray-700">
                The turning point in Rohit's career came in 2013 when then-captain MS Dhoni promoted him to open the 
                batting in ODIs. This strategic move transformed Rohit's career trajectory and changed the landscape of 
                limited-overs cricket. Freed from the constraints of middle-order batting, Rohit's natural timing, 
                elegant stroke play, and ability to accelerate made him one of the most feared openers in world cricket.
              </p>
              <p className="text-gray-700 mt-4">
                Soon after, Rohit became the only batter in history to score multiple double centuries in ODIs, including 
                the highest individual score of 264 against Sri Lanka – a record that stands to this day. His ability to 
                convert starts into massive scores earned him the nickname "Hitman" from fans and commentators alike.
              </p>

              <h4 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Leadership & Legacy</h4>
              <p className="text-gray-700">
                Beyond his batting prowess, Rohit has established himself as a tactical captain. Under his leadership, 
                Mumbai Indians became the most successful franchise in IPL history with five titles. His calm demeanor, 
                strategic acumen, and ability to nurture young talent made him the natural successor to Virat Kohli as 
                India's white-ball captain in 2021, and later Test captain.
              </p>
              <p className="text-gray-700 mt-4">
                Off the field, Rohit is known for his advocacy for wildlife conservation, particularly for rhinos. His 
                foundation works on various social causes, including education for underprivileged children and 
                environmental conservation.
              </p>
              <p className="text-gray-700 mt-4">
                As Rohit continues to lead India across formats, his legacy as one of cricket's greatest batsmen and 
                captains continues to grow. His journey from a talented but inconsistent young player to a record-breaking 
                opener and successful captain serves as an inspiration to aspiring cricketers worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};