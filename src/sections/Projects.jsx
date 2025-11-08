import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

import smartfix from "../assets/smartfix.png";
import heart from "../assets/heart_dieases.png";
import tomato from "../assets/tomato.png";
import chess from "../assets/chess.png";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "SmartFix",
      subtitle: "Smart Utility System",
      tech: "Next.js, Tailwind CSS, Hygraph, Shadcn UI, Descope Auth",
      image: smartfix,
      live: "https://smartfix-utility-system.vercel.app/",
      github: "https://github.com/mayank26202/SmartFix-utility-system-web",
      year: "2024",
      description: "A comprehensive full-stack platform designed to connect residents with trusted professionals like electricians, plumbers, and other service providers. Features secure authentication using Descope OAuth integrated with NextAuth, along with dedicated provider and admin dashboards featuring real-time analytics and interactive maps.",
      tracks: [
        "Full-stack platform for residents to book trusted professionals (electricians, plumbers, etc.)",
        "Integrated Descope OAuth with NextAuth for secure authentication and user management",
        "Provider and admin dashboards with analytics, booking management, and maps integration",
        "Real-time booking updates and notification system for seamless communication",
        "Deployed on Vercel with automated Git/GitHub CI/CD pipeline for continuous deployment",
        "Responsive design optimized for mobile, tablet, and desktop devices",
      ],
    },
    {
      title: "Endgame - Chess App",
      subtitle: "Real-Time Multiplayer Chess Game",
      tech: "TypeScript, React, Node.js, WebSocket (ws), Chess.js",
      image: chess,
      live: "https://endgamechess.vercel.app/",
      github: "https://github.com/mayank26202/chess-ws",
      year: "2025",
      description:
      "A real-time multiplayer chess platform built with WebSocket communication for seamless, low-latency gameplay. Implements full chess logic, move validation, and game synchronization using Chess.js and a TypeScript-based backend. Provides a responsive UI built with React, featuring player color assignment, move history, and live match updates.",
      tracks: [
        "Real-time two-player chess gameplay using WebSocket connections",
        "Full move validation and board state management handled via Chess.js",
        "Player roles dynamically assigned as White or Black with turn tracking",
        "Instant synchronization of moves across connected clients",
        "Game over detection with winner announcement and replay option",
        "Frontend developed in React + TypeScript with responsive board design",
        "Backend powered by Node.js and ws server handling matchmaking and sessions",
        "Deployed on Render (backend) and Vercel (frontend) for global accessibility",
      ],
    },
    {
      title: "Tomato",
      subtitle: "Food Delivery System",
      tech: "MERN Stack (MongoDB, Express, React, Node.js)",
      image: tomato,
      live: "https://tomatofastfood-ki3mvczqb-mayanks-projects-4af081d5.vercel.app/",
      github: "https://github.com/mayank26202/food-delivery-mern",
      year: "2024",
      description: "A modern, responsive food delivery web application built with the MERN stack. Features live cart updates, comprehensive order management, and real-time order tracking. The application is optimized for performance with efficient MongoDB queries and includes a sleek, intuitive UI inspired by popular food delivery platforms.",
      tracks: [
        "Responsive food delivery web app with live cart updates and real-time synchronization",
        "Complete order management system with checkout, payment processing, and order tracking",
        "Optimized MongoDB queries and indexing for fast data rendering and retrieval",
        "Modern, intuitive UI/UX design inspired by leading food delivery applications",
        "User authentication and profile management with order history",
        "Restaurant and menu management system with image uploads and categorization",
      ],
    },
    { title: "Heart Disease Predictor", subtitle: "ML Prediction Model", tech: "Python, Flask, NumPy, Pandas, Scikit-learn", image: heart, live: "https://heart-disease-prediction-ml.onrender.com/", github: "https://github.com/mayank26202/heart-disease-prediction-ml", year: "2024", description: "An intelligent machine learning application that predicts the likelihood of heart disease based on 14 key health parameters. Utilizes a trained Random Forest model achieving 85% accuracy, with comparative analysis across multiple ML algorithms including SVM, KNN, and Logistic Regression for optimal prediction performance.", tracks: ["Predicts heart disease probability using 14 key health parameters and medical indicators", "Trained Random Forest classifier model achieving 85% accuracy on test dataset", "Comprehensive model comparison: SVM, KNN, Logistic Regression, and Decision Trees", "Deployed using Flask framework with input validation and error handling", "Interactive web interface for easy parameter input and instant predictions", "Model evaluation metrics including accuracy, precision, recall, and F1-score visualization",], },
  ];

  return (
    <section id='projects' className="min-h-screen bg-black text-white px-6 py-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-black mb-2 bg-linear-to-r from-[#1db954] to-[#1ed760] bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-lg text-gray-400">My development albums</p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-[#181818] hover:bg-[#282828] rounded-lg p-4 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                {/* Album Cover */}
                <div className="relative shrink-0">
                  <div className="w-32 h-32 rounded overflow-hidden shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredProject === idx ? 1 : 0,
                      scale: hoveredProject === idx ? 1 : 0.8
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <a href={project.live} className="w-16 h-16 bg-[#1db954] rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-7 h-7 text-black fill-black ml-0.5" />
                    </a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#1db954] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-400 mb-3">{project.subtitle}</p>
                  <p className="text-sm text-gray-300 mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.tracks.length} features</span>
                    <span>•</span>
                    <span className="truncate">{project.tech}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    className="p-3 rounded-full bg-[#1db954] hover:bg-[#1ed760] transition-colors shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-6 h-6 text-black" />
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    className="p-3 rounded-full bg-white hover:bg-gray-200 transition-colors shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-6 h-6 text-black" />
                  </motion.a>
                </div>
              </div>

              {/* Expandable Track List */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: hoveredProject === idx ? 'auto' : 0,
                  opacity: hoveredProject === idx ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-[#282828]">
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Features</p>
                  <ul className="space-y-2">
                    {project.tracks.map((track, trackIdx) => (
                      <li
                        key={trackIdx}
                        className="flex items-start gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <span className="text-gray-500 w-6 shrink-0">{trackIdx + 1}</span>
                        <span className="flex-1">{track}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}