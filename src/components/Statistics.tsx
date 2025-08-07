import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

type StatCardProps = {
  title: string;
  matches: string;
  runs: string;
  average: string;
  centuries: string;
  highScore: string;
  format: string;
  delay: number;
  isVisible: boolean;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  matches,
  runs,
  average,
  centuries,
  highScore,
  format,
  delay,
  isVisible,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-bold mb-4 text-blue-900 border-b border-gray-200 pb-2">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 text-sm">Matches</p>
          <p className="text-2xl font-bold text-blue-700">{matches}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Runs</p>
          <p className="text-2xl font-bold text-blue-700">{runs}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Average</p>
          <p className="text-2xl font-bold text-blue-700">{average}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Centuries</p>
          <p className="text-2xl font-bold text-blue-700">{centuries}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">Highest Score</p>
            <p className="text-xl font-bold text-blue-700">{highScore}</p>
          </div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {format}
          </div>
        </div>
      </div>
    </div>
  );
};

type RecentMatchProps = {
  date: string;
  tournament: string;
  opponent: string;
  score: string;
  result: string;
  isVisible: boolean;
  delay: number;
};

const RecentMatch: React.FC<RecentMatchProps> = ({
  date,
  tournament,
  opponent,
  score,
  result,
  isVisible,
  delay,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm text-gray-500">{date}</span>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{tournament}</span>
      </div>
      <h4 className="font-semibold text-blue-900 mb-1">vs {opponent}</h4>
      <p className="text-lg font-bold text-blue-700">{score}</p>
      <p className={`text-sm mt-1 ${
        result.includes('Won') ? 'text-green-600' : result.includes('Lost') ? 'text-red-600' : 'text-gray-600'
      }`}>{result}</p>
    </div>
  );
};

export const Statistics = () => {
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

  const careerRunsData = {
    labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        fill: true,
        label: 'Career Runs',
        data: [220, 310, 280, 210, 180, 520, 920, 100, 520, 600],
        borderColor: 'rgb(219, 39, 119)',
        backgroundColor: 'rgba(219, 39, 119, 0.1)',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: 'rgb(219, 39, 119)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'CAREER RUNS',
        color: '#1e3a8a',
        font: {
          size: 20,
          weight: 'bold'
        },
        padding: {
          bottom: 30
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const recentInternationalMatches = [
    {
      date: "Mar 14, 2024",
      tournament: "Test Series",
      opponent: "England",
      score: "103 (162)",
      result: "Won by 5 wickets"
    },
    {
      date: "Mar 7, 2024",
      tournament: "Test Series",
      opponent: "England",
      score: "87 (147)",
      result: "Won by 4 wickets"
    },
    {
      date: "Feb 25, 2024",
      tournament: "Test Series",
      opponent: "England",
      score: "131 (196)",
      result: "Won by innings and 64 runs"
    }
  ];

  const recentIPLMatches = [
    {
      date: "Apr 2, 2024",
      tournament: "IPL 2024",
      opponent: "Chennai Super Kings",
      score: "74 (43)",
      result: "Won by 6 wickets"
    },
    {
      date: "Mar 29, 2024",
      tournament: "IPL 2024",
      opponent: "Gujarat Titans",
      score: "43 (29)",
      result: "Lost by 3 wickets"
    },
    {
      date: "Mar 25, 2024",
      tournament: "IPL 2024",
      opponent: "Rajasthan Royals",
      score: "89 (54)",
      result: "Won by 5 wickets"
    }
  ];

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-blue-50 to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            <span className="border-b-4 border-orange-500 pb-2">Career Statistics</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
            Rohit Sharma has established himself as one of cricket's most prolific run-scorers,
            with impressive records across all formats of the game.
          </p>
        </div>

        <div className={`bg-white rounded-xl shadow-lg p-8 mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Line data={careerRunsData} options={chartOptions} className="w-full h-[400px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            title="Test Cricket"
            matches="56"
            runs="4,004"
            average="46.2"
            centuries="10"
            highScore="212"
            format="Test"
            delay={200}
            isVisible={isVisible}
          />
          <StatCard
            title="One Day Internationals"
            matches="262"
            runs="10,709"
            average="49.1"
            centuries="31"
            highScore="264"
            format="ODI"
            delay={400}
            isVisible={isVisible}
          />
          <StatCard
            title="T20 Internationals"
            matches="148"
            runs="3,853"
            average="31.3"
            centuries="4"
            highScore="118"
            format="T20I"
            delay={600}
            isVisible={isVisible}
          />
          <StatCard
            title="Indian Premier League"
            matches="247"
            runs="6,211"
            average="30.2"
            centuries="1"
            highScore="109*"
            format="IPL"
            delay={800}
            isVisible={isVisible}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Recent International Matches</h3>
            <div className="space-y-4">
              {recentInternationalMatches.map((match, index) => (
                <RecentMatch
                  key={index}
                  {...match}
                  isVisible={isVisible}
                  delay={600 + (index * 100)}
                />
              ))}
            </div>
          </div>

          <div className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Recent IPL Matches</h3>
            <div className="space-y-4">
              {recentIPLMatches.map((match, index) => (
                <RecentMatch
                  key={index}
                  {...match}
                  isVisible={isVisible}
                  delay={800 + (index * 100)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-blue-900 border-b border-gray-200 pb-3">Career Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-lg text-blue-800 mb-2">Triple ODI Double Centuries</h4>
              <p className="text-gray-700">
                Only player in history to score three double centuries in ODIs, including the highest 
                ever individual score of 264.
              </p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-lg text-blue-800 mb-2">World Cup Performance</h4>
              <p className="text-gray-700">
                Most centuries in a single World Cup edition (5 in 2019), breaking Kumar Sangakkara's record.
              </p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-lg text-blue-800 mb-2">T20 Achievements</h4>
              <p className="text-gray-700">
                First Indian to score a century in all three formats of international cricket.
              </p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-lg text-blue-800 mb-2">IPL Success</h4>
              <p className="text-gray-700">
                Led Mumbai Indians to a record five IPL titles as captain (2013, 2015, 2017, 2019, 2020).
              </p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-lg text-blue-800 mb-2">Opening Partnership</h4>
              <p className="text-gray-700">
                Holds several records for opening partnerships with Shikhar Dhawan in limited-overs cricket.
              </p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-lg text-blue-800 mb-2">Test Cricket</h4>
              <p className="text-gray-700">
                Scored centuries in both innings of his debut Test as an opener against South Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};