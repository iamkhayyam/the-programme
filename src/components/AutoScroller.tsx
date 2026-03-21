import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useReadingSpeed } from "../context/ReadingSpeedContext";
import { Play, Pause, MoveVertical, ExternalLink, Minus, Plus } from "lucide-react";
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
               <Link to="/constitutional-proof" onClick={() => setIsExpanded(false)} className="text-[0.7rem] text-light hover:text-accent uppercase tracking-widest font-medium transition-colors">SCRIPT</Link>
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
                onClick={decreaseSpeed}
                className="w-6 h-6 rounded-full border border-rule/20 flex items-center justify-center text-mid hover:text-accent hover:border-accent transition-all active:scale-90"
                title="Decrease Speed"
              >
                <Minus size={12} />
              </button>

              <button 
                onClick={toggleAutoScroll}
                className="w-10 h-10 rounded-full border border-rule/40 flex items-center justify-center text-light hover:text-accent hover:border-accent transition-all active:scale-95"
              >
                {isAutoScrolling ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
              </button>

              <button 
                onClick={increaseSpeed}
                className="w-6 h-6 rounded-full border border-rule/20 flex items-center justify-center text-mid hover:text-accent hover:border-accent transition-all active:scale-90"
                title="Increase Speed"
              >
                <Plus size={12} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="font-plex-mono text-[0.5rem] text-mid uppercase tracking-tighter">Speed</span>
                <span className="font-plex-mono text-[0.6rem] text-accent font-bold">{speed.toFixed(1)}x</span>
              </div>
              <div className="px-1">
                <input 
                  type="range" 
                  min="0.5" 
                  max="10" 
                  step="0.1" 
                  value={speed} 
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-full h-1 bg-rule/20 rounded-lg appearance-none cursor-pointer accent-accent"
                />
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
