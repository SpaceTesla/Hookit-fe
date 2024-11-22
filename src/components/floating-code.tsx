'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const codeSnippets = [
  '<div className="hookit">',
  'function useHookit() {',
  'npm install hookit',
  'import { hookit } from "hookit";',
  'const [state, setState] = useState();',
  'useEffect(() => { ... });',
  'return <Component />;',
  '};',
  '</div>',
];

export default function FloatingCode() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Only access window dimensions on the client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateWindowSize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      updateWindowSize(); // Set initial size
      window.addEventListener('resize', updateWindowSize); // Update size on resize
      return () => window.removeEventListener('resize', updateWindowSize);
    }
  }, []);

  if (!windowSize.width || !windowSize.height) {
    return null; // Avoid rendering until window dimensions are available
  }

  return (
    <>
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-sm text-white text-opacity-30 sm:text-base md:text-lg"
          initial={{
            opacity: 0,
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            opacity: 0.7,
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </>
  );
}
