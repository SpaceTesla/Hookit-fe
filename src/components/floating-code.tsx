import { motion } from 'framer-motion';

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
  return (
    <>
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-sm text-white text-opacity-30 sm:text-base md:text-lg"
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: 0.7,
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
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
