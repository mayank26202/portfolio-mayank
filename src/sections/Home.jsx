import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import profile_mayank from "../assets/profile_photo.jpg";
import scanner from "../assets/spotify_scanner.jpg";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const totalDuration = 180; // 3 minutes in seconds

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    setProgress((currentTime / totalDuration) * 100);
  }, [currentTime]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const newTime = Math.floor((percentage / 100) * totalDuration);
    setCurrentTime(newTime);
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-20 lg:px-32 bg-linear-to-b from-[#121212] via-[#1a1a1a] to-[#121212] text-white overflow-hidden pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#1DB954]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#1ed760]/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center mt-20">

        {/* Left Side - Profile Image & Spotify Code */}
        <motion.div
          className="flex flex-col items-center lg:items-start space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Album Cover Style Profile */}
          <div className="relative group">
            <motion.div
              className="w-60 h-60 rounded-2xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profile_mayank}
                alt="Mayank"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Animated Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#1DB954] to-[#1ed760] opacity-0 group-hover:opacity-20 blur-xl -z-10"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Spotify Code Scanner */}
          <motion.div
            className="w-80 bg-[#181818] rounded-xl p-6 border border-[#282828] shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-300">Spotify Code</span>
              <svg className="w-6 h-6 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div> */}

            <div className="flex items-center justify-center">
              <img
                src={scanner}
                alt="spotify_scanner"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Now Playing Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[#181818] px-4 py-2 rounded-full border border-[#282828]"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="flex gap-1"
              animate={{ opacity: isPlaying ? [0.5, 1, 0.5] : 0.5 }}
              transition={{ duration: 1.5, repeat: isPlaying ? Infinity : 0 }}
            >
              <motion.div
                className="w-1 bg-[#1DB954] rounded-full"
                animate={{ height: isPlaying ? ['12px', '16px', '12px'] : '12px' }}
                transition={{ duration: 0.6, repeat: isPlaying ? Infinity : 0, delay: 0 }}
              />
              <motion.div
                className="w-1 bg-[#1DB954] rounded-full"
                animate={{ height: isPlaying ? ['16px', '8px', '16px'] : '12px' }}
                transition={{ duration: 0.6, repeat: isPlaying ? Infinity : 0, delay: 0.1 }}
              />
              <motion.div
                className="w-1 bg-[#1DB954] rounded-full"
                animate={{ height: isPlaying ? ['10px', '14px', '10px'] : '12px' }}
                transition={{ duration: 0.6, repeat: isPlaying ? Infinity : 0, delay: 0.2 }}
              />
            </motion.div>
            <span className="text-sm text-gray-300">
              {isPlaying ? 'Now Playing' : 'Paused'}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Hey, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1DB954] to-[#1ed760]">
              Mayank
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Full Stack Developer building clean, scalable, and high-performance web solutions with precision and reliability.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {['Node.js', 'React', 'Javascript', 'C++'].map((tag, i) => (
              <motion.span
                key={tag}
                className="px-4 py-2 bg-[#181818] border border-[#282828] rounded-full text-sm text-gray-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: '#1DB954' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-[#1DB954] text-black font-bold hover:bg-[#1ed760] transition-all shadow-lg flex items-center gap-2"
            >
              <Play size={20} fill="black" />
              View My Work
            </motion.a>

            <motion.a
              href="/Mayank_Resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mayank_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-[#1DB954] text-[#1DB954] font-bold hover:bg-[#1DB954] hover:text-black transition-all"
            >
              Download Resume
            </motion.a>

          </div>
        </motion.div>
      </div>

      {/* Interactive Music Player - Bottom */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-linear-to-t from-[#181818] to-[#181818]/95 border-t border-[#282828] backdrop-blur-md z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Song Info */}
            <div className="flex items-center gap-4 min-w-10">
              <motion.div
                className="w-10 h-10 rounded-md overflow-hidden shadow-lg shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={profile_mayank}
                  alt="Album Cover"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-sm font-semibold text-white hover:underline cursor-pointer truncate">
                  Mayank's Portfolio
                </p>
                <p className="text-xs text-gray-400 truncate">Full Stack Developer</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className="shrink-0"
              >
                <Heart
                  size={20}
                  className={`transition-colors ${isLiked ? 'text-[#1DB954] fill-[#1DB954]' : 'text-gray-400 hover:text-white'}`}
                />
              </motion.button>
            </div>

            {/* Player Controls */}
            <div className="flex-1 max-w-2xl w-full">
              <div className="flex items-center justify-center gap-6 mb-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition"
                  onClick={() => setCurrentTime(0)}
                >
                  <SkipBack size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-white hover:scale-110 transition flex items-center justify-center shadow-lg"
                >
                  {isPlaying ? (
                    <Pause size={20} className="text-black" fill="black" />
                  ) : (
                    <Play size={20} className="text-black ml-0.5" fill="black" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition"
                  onClick={() => {
                    setCurrentTime(0);
                    setIsPlaying(false);
                  }}
                >
                  <SkipForward size={20} />
                </motion.button>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center gap-3 w-full">
                <span className="text-xs text-gray-400 min-w-10 text-right">
                  {formatTime(currentTime)}
                </span>
                <div
                  className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer group relative"
                  onClick={handleProgressClick}
                >
                  <motion.div
                    className="h-full bg-[#1DB954] relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg" />
                  </motion.div>
                </div>
                <span className="text-xs text-gray-400 min-w-10">
                  {formatTime(totalDuration)}
                </span>
              </div>
            </div>

            {/* Volume & More Controls */}
            <div className="hidden md:flex items-center gap-4 min-w-[180px] justify-end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition"
              >
                <Volume2 size={20} />
              </motion.button>

              <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer group">
                <div className="w-3/4 h-full bg-white relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}