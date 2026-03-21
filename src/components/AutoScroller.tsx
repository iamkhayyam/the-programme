import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useReadingSpeed } from "../context/ReadingSpeedContext";
import { Play, Pause, Plus, Minus, MoveVertical, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AutoScroller() {
  const { isAutoScrolling, setIsAutoScrolling, speed, setSpeed } = useReadingSpeed();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAutoScroll = () => setIsAutoScrolling(!isAutoScrolling);
  const increaseSpeed = () => setSpeed(Math.min(speed + 0.5, 10));
  const decreaseSpeed = () => setSpeed(Math.max(speed - 0.5, 0.5));

  return (
    <div className="relative flex flex-col items-end">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-full right-0 mb-4 bg-[#121212] border border-rule/30 p-4 rounded-lg shadow-2xl flex flex-col gap-4 min-w-[180px] z-[10000]"
          >
            {/* Mobile Menu Section - Only visible on mobile */}
            <div className="md:hidden flex flex-col gap-3 border-b border-rule/20 pb-4 mb-1">
               <span className="font-plex-mono text-[0.5rem] text-mid uppercase tracking-[0.2em] opacity-70 mb-1">Menu</span>
               <Link to="/preprints" onClick={() => setIsExpanded(false)} className="text-[0.7rem] text-light hover:text-accent uppercase tracking-widest font-medium transition-colors">Papers</Link>
               <Link to="/essays" onClick={() => setIsExpanded(false)} className="text-[0.7rem] text-light hover:text-accent uppercase tracking-widest font-medium transition-colors">Essays</Link>
               <Link to="/constitutional-proof" onClick={() => setIsExpanded(false)} className="text-[0.7rem] text-light hover:text-accent uppercase tracking-widest font-medium transition-colors">The Play</Link>
               <a href="https://github.com/iamkhayyam/the-programme" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[0.7rem] text-light hover:text-accent uppercase tracking-widest font-medium transition-colors">
                 GitHub <ExternalLink size={10} />
               </a>
               <Link to="/contact" onClick={() => setIsExpanded(false)} className="text-[0.7rem] text-light hover:text-accent uppercase tracking-widest font-medium transition-colors">Contact</Link>
            </div>

            <div className="flex items-center justify-between border-b border-rule/20 pb-2">
              <span className="font-plex-mono text-[0.5rem] text-light uppercase tracking-[0.2em]">Auto-Scroll</span>
              <div className={`w-1.5 h-1.5 rounded-full ${isAutoScrolling ? 'bg-accent animate-pulse' : 'bg-mid'}`} />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={toggleAutoScroll}
                className="w-10 h-10 rounded-full border border-rule/40 flex items-center justify-center text-light hover:text-accent hover:border-accent transition-all active:scale-95"
              >
                {isAutoScrolling ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-1">
                <span className="font-plex-mono text-[0.5rem] text-mid uppercase tracking-tighter">Speed</span>
                <span className="font-plex-mono text-[0.6rem] text-accent font-bold">{speed.toFixed(1)}x</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={decreaseSpeed}
                  className="flex-1 h-8 border border-rule/30 rounded flex items-center justify-center text-light hover:bg-white/5 transition-colors"
                >
                  <Minus size={12} />
                </button>
                <button 
                  onClick={increaseSpeed}
                  className="flex-1 h-8 border border-rule/30 rounded flex items-center justify-center text-light hover:bg-white/5 transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-lg ${
          isExpanded ? "bg-accent text-ink rotate-90" : "bg-ink text-light border border-rule/30 hover:border-accent"
        }`}
      >
        <MoveVertical size={16} />
      </button>
    </div>
  );
}
