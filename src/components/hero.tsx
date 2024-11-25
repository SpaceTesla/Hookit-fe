'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import FloatingCode from './floating-code';
import { Code, Terminal, GitBranch, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTeam = () => {
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-20 w-full p-4">
        <ul className="flex justify-center space-x-8 text-secondary-foreground">
          <li
            className={
              'text-primary-foreground underline transition duration-300 ease-in-out hover:no-underline'
            }
          >
            <Link href={'/'} className={''}>
              Home
            </Link>
          </li>
          <li className={'text-primary-foreground hover:underline'}>
            <Link href={'/'}>Why Choose Us?</Link>
          </li>
        </ul>
      </nav>
      <motion.div
        className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-sky-900 to-teal-900"
        animate={backgroundControls}
      >
        <div className="absolute inset-0 opacity-20">
          <FloatingCode />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8 opacity-10">
            <Code size={120} className="text-blue-400" />
            <Terminal size={120} className="text-green-400" />
            <GitBranch size={120} className="text-purple-400" />
          </div>
        </div>

        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="mb-4 text-5xl font-bold md:text-7xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center">
              <span>Welcome to</span>
              <span className="max-h-sm ml-4 inline-flex">
                <Image
                  src={'/logo.png'}
                  alt={'logo'}
                  width={300}
                  height={300}
                  className="block h-full w-full object-contain pb-1"
                />
              </span>
            </div>
          </motion.h1>
          <motion.p
            className="mb-8 text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            🐰 Supercharge your development workflow, <u>in 4 steps</u>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/auth">
              <Button className="default ml-4" size={'lg'}>
                Get Started
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://github.com/SpaceTesla/hookit-fe/">
              <Button className="ml-4" size={'lg'} variant={'secondary'}>
                Source Code
                <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div>
            <div className={'mt-8'}>
              Powered by <span className={'font-bold'}>GoFr</span>
            </div>
          </motion.div>
        </div>
        <div
          onClick={scrollToTeam}
          className="absolute bottom-8 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-black text-primary-foreground"
        >
          <FontAwesomeIcon icon={faArrowDown} size={'xl'} />
        </div>
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{
            backgroundPosition: `${mousePosition.x / 20}px ${mousePosition.y / 20}px`,
          }}
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(66, 153, 225, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </motion.div>
    </>
  );
}
