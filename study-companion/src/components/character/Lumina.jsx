import React from 'react';
import { motion } from 'framer-motion';

const moods = {
  happy: { eyes: '◕', mouth: '◡', blush: true, color: '#FFB6C1' },
  neutral: { eyes: '◕', mouth: '—', blush: false, color: '#FFB6C1' },
  sleepy: { eyes: '–', mouth: '~', blush: false, color: '#FFB6C1' },
  alert: { eyes: '◉', mouth: '○', blush: false, color: '#FFB6C1' },
  excited: { eyes: '★', mouth: '▽', blush: true, color: '#FFB6C1' },
};

export default function StudyCharacter({ mood = 'happy', size = 'md', message }) {
  const m = moods[mood] || moods.happy;
  const sizes = { sm: 48, md: 80, lg: 120 };
  const s = sizes[size];

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: s, height: s }}
        className="relative"
      >
        {/* Body */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Hair */}
          <ellipse cx="50" cy="30" rx="38" ry="30" fill="#5C4033" />
          <ellipse cx="20" cy="40" rx="10" ry="18" fill="#5C4033" />
          <ellipse cx="80" cy="40" rx="10" ry="18" fill="#5C4033" />
          
          {/* Face */}
          <ellipse cx="50" cy="45" rx="30" ry="28" fill="#FDDCB5" />
          
          {/* Bangs */}
          <ellipse cx="35" cy="25" rx="15" ry="10" fill="#5C4033" />
          <ellipse cx="50" cy="22" rx="15" ry="10" fill="#5C4033" />
          <ellipse cx="65" cy="25" rx="15" ry="10" fill="#5C4033" />
          
          {/* Hair accessories - little bow */}
          <circle cx="72" cy="22" r="5" fill="#FF8FAB" />
          <circle cx="72" cy="22" r="2.5" fill="#FF6B8A" />
          
          {/* Eyes */}
          <text x="38" y="48" fontSize="10" textAnchor="middle" fill="#333">{m.eyes}</text>
          <text x="62" y="48" fontSize="10" textAnchor="middle" fill="#333">{m.eyes}</text>
          
          {/* Eye sparkle */}
          <circle cx="40" cy="43" r="1.5" fill="white" opacity="0.8" />
          <circle cx="64" cy="43" r="1.5" fill="white" opacity="0.8" />
          
          {/* Blush */}
          {m.blush && (
            <>
              <ellipse cx="32" cy="52" rx="5" ry="3" fill="#FFB6C1" opacity="0.5" />
              <ellipse cx="68" cy="52" rx="5" ry="3" fill="#FFB6C1" opacity="0.5" />
            </>
          )}
          
          {/* Mouth */}
          <text x="50" y="58" fontSize="8" textAnchor="middle" fill="#E87461">{m.mouth}</text>
          
          {/* Body/dress */}
          <path d="M 30 70 Q 50 65 70 70 L 75 95 Q 50 100 25 95 Z" fill="#A8D8EA" />
          <path d="M 35 72 Q 50 68 65 72 L 67 80 Q 50 78 33 80 Z" fill="#89C4E1" />
          
          {/* Collar */}
          <path d="M 40 70 L 50 75 L 60 70" fill="none" stroke="white" strokeWidth="1.5" />
          
          {/* Little book in hand */}
          <rect x="68" y="78" width="10" height="12" rx="1" fill="#FFD93D" />
          <rect x="69" y="79" width="8" height="10" rx="0.5" fill="#FFF3B0" />
          <line x1="73" y1="82" x2="76" y2="82" stroke="#DDD" strokeWidth="0.5" />
          <line x1="71" y1="84" x2="76" y2="84" stroke="#DDD" strokeWidth="0.5" />
        </svg>
        
        {/* Sparkle animation */}
        {mood === 'happy' && (
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-xs">✨</span>
          </motion.div>
        )}
      </motion.div>
      
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl px-3 py-1.5 text-xs text-foreground/80 max-w-[180px] text-center shadow-sm border border-border/50"
        >
          {message}
        </motion.div>
      )}
    </motion.div>
  );
}