import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiCplusplus, SiJavascript, SiPython, SiReact, SiNextdotjs, SiTailwindcss,
  SiRedux, SiShadcnui, SiBootstrap, SiNodedotjs, SiExpress, SiFlask,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGraphql,
  SiNumpy, SiPandas, SiScikitlearn, SiPlotly, SiTensorflow, SiHtml5, SiCss3,
  SiGit, SiPostman, SiDocker,
} from 'react-icons/si';

const skills = [
  {
    category: "Languages",
    description: "The foundation of my code symphony",
    techs: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    category: "Frontend",
    description: "Crafting beautiful user experiences",
    techs: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DBFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "ShadCN UI", icon: SiShadcnui, color: "#ffffff" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    category: "Backend",
    description: "Powering robust server solutions",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
    ],
  },
  {
    category: "Database",
    description: "Managing data at scale",
    techs: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Hygraph", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    category: "Machine Learning",
    description: "Building intelligent systems",
    techs: [
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Matplotlib", icon: SiPlotly, color: "#11557C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    ],
  },
  {
    category: "Tools",
    description: "Essential development toolkit",
    techs: [
      { name: "Git", icon: SiGit, color: "#F1502F" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Docker", icon: SiDocker, color: "#0db7ed" },
    ],
  },
];

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id='skills' className="min-h-screen py-10 px-6 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Spotify-style Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-black mb-2 bg-linear-to-r from-[#1db954] to-[#1ed760] bg-clip-text text-transparent">
            My Tech Stack
          </h1>
          <p className="text-lg text-gray-400">All the tools in my playlist</p>
        </motion.div>

        {/* Album Grid - 3 Larger Boxes in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {skills.map((group, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-[#181818] rounded-2xl p-6 hover:bg-[#222] transition-all duration-300 cursor-pointer shadow-lg"
              >
                {/* Album Cover */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-5 bg-[#282828]">
                  {/* Tech Icons Collage */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {group.techs.slice(0, 9).map((tech, j) => {
                        const TechIcon = tech.icon;
                        return (
                          <motion.div
                            key={j}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: idx * 0.1 + j * 0.05 }}
                            className="bg-[#121212] rounded-md p-2 flex flex-col items-center justify-center gap-1"
                          >
                            <TechIcon size={40} color={tech.color} />
                            <small className="text-[10px] text-gray-400 text-center leading-tight">
                              {tech.name}
                            </small>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredCard === idx ? 1 : 0,
                      scale: hoveredCard === idx ? 1 : 0.8,
                      y: hoveredCard === idx ? 0 : 10,
                    }}
                    className="absolute bottom-3 right-3 w-12 h-12 bg-[#1db954] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                  >
                    <svg
                      className="w-5 h-5 text-black ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" />
                    </svg>
                  </motion.div>
                </div>

                {/* Album Info */}
                <div className="space-y-1 text-center">
                  <h3 className="font-bold text-lg text-white group-hover:text-[#1DB954] transition-colors">
                    {group.category}
                  </h3>
                  <p className="text-sm text-gray-400">{group.techs.length} tools</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}