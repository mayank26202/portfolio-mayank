import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, Music, Disc, Radio, Heart } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const timeline = [
    {
      year: "Aug 2025 – Present",
      title: "Full Stack Developer Intern",
      company: "StarX Ai Technologies",
      location: "Delhi (Onsite)",
      type: "work",
      description: [
        "Developed the StarX University backend with secure RESTful APIs using Node.js and MongoDB.",
        "Integrated frontend with Redux Toolkit for scalable state management.",
        "Built an Admin Dashboard with Chart.js for analytics visualization.",
        "Contributed to 'Peggy The Deadpool Coin' blockchain project, enhancing UI performance.",
      ],
    },
    {
      year: "Nov 2024 – Jan 2025",
      title: "Intern",
      company: "Tech Mahindra",
      location: "Noida (Onsite)",
      type: "work",
      description: [
        "Performed VAPT on 10+ web and desktop apps using Burp Suite, OWASP ZAP, and Postman.",
        "Detected and mitigated 15+ critical vulnerabilities including SQLi and CSRF.",
        "Validated scan results and improved system security across multiple teams.",
      ],
    },
    {
      year: "2021 – 2025",
      title: "B.Tech in Computer Science",
      company: "Dr. Akhilesh Das Gupta Institute of Professional Studies",
      location: "New Delhi",
      type: "education",
      description: [
        "CGPA: 9.05",
        "Relevant Coursework: DSA (C++), DBMS, CN, OS, OOP, Advanced Java.",
      ],
    },
    {
      year: "2019 – 2020",
      title: "Higher Secondary",
      company: "Salwan Public School",
      location: "New Delhi",
      type: "education",
      description: ["Scored 95.2% under CBSE Board."],
    },
  ];

  return (
    <motion.section
      id="about"
      className="relative min-h-screen bg-[#121212] text-white py-24 px-6 scroll-mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >


      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#1DB954]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1ed760]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Spotify Playlist Style */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-20"
        >
          {/* Album Cover Style */}
          <motion.div
            className="w-44 h-44 bg-linear-to-br from-[#1DB954] via-[#1ed760] to-[#15803d] rounded-2xl shadow-2xl flex items-center justify-center relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-center">
              <Music size={60} className="mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-2xl font-bold">My Story</p>
            </div>
            {/* Vinyl record effect */}
            <motion.div
              className="absolute inset-0 border-40 border-black/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Playlist Info */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold text-gray-400 mb-2">JOURNEY PLAYLIST</p>
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              About <span className="text-[#1DB954]">Me</span>
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Disc size={20} className="text-[#1DB954]" />
                <span className="text-sm text-gray-400">4 Tracks</span>
              </div>
              <div className="flex items-center gap-2">
                <Radio size={20} className="text-[#1DB954]" />
                <span className="text-sm text-gray-400">2021 - 2025</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Spotify-style "Liked Songs" Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 rounded-full bg-linear-to-br from-[#1DB954] to-[#1ed760] flex items-center justify-center shadow-lg"
          >
            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
          <div>
            <h2 className="text-2xl font-bold text-white">Experience & Education</h2>
            <p className="text-sm text-gray-400">My professional journey</p>
          </div>
        </div>

        {/* Timeline as Spotify Track List */}
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="group relative bg-transparent hover:bg-[#1a1a1a] rounded-lg p-4 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-6">
                {/* Track Number / Icon */}
                <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                  <div className="relative">
                    <span className="text-gray-400 group-hover:hidden text-lg font-semibold">
                      {index + 1}
                    </span>
                    <motion.div
                      className="hidden group-hover:block"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      {item.type === "work" ? (
                        <Briefcase size={24} className="text-[#1DB954]" />
                      ) : (
                        <GraduationCap size={24} className="text-[#1DB954]" />
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-[#1DB954] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">{item.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{item.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Duration/Progress */}
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleLike(index)}
                        className="shrink-0"
                      >
                        <Heart
                          size={20}
                          className={`transition-colors ${likedItems[index]
                              ? 'text-[#1DB954] fill-[#1DB954]'
                              : 'text-gray-400 hover:text-white'
                            }`}
                        />
                      </motion.button>

                      <span className="text-gray-400 text-sm min-w-[60px] text-right">
                        {item.description.length} details
                      </span>
                    </div>
                  </div>

                  {/* Description - Expandable */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className=""
                  >
                    <ul className="space-y-2 text-gray-400 text-sm pl-4 border-l-2 border-[#1DB954]/30">
                      {item.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="leading-relaxed"
                        >
                          {desc}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Progress Bar on Hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1DB954] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats - Spotify Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "1+", icon: "💼" },
            { label: "Projects Built", value: "10+", icon: "🚀" },
            { label: "Technologies", value: "18+", icon: "⚡" },
            { label: "Coffee Consumed", value: "∞", icon: "☕" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(29, 185, 84, 0.1)" }}
              className="bg-[#181818] rounded-xl p-6 text-center border border-[#282828] hover:border-[#1DB954]/50 transition-all"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#1DB954] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}