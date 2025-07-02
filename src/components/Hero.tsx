import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createRipple = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

  return (
    <section className="hero-zen" onClick={createRipple}>
      <div className="zen-container">
        <motion.div 
          className="name-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="name-japanese">
            <motion.h1 
              className="name-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Justin Brower
            </motion.h1>
            <motion.div 
              className="name-stroke"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
          
          <motion.p 
            className="role-zen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Principal Software Engineer
          </motion.p>
          
          <motion.div 
            className="philosophy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="philosophy-text">
              Focus on impact
            </div>
            <div className="philosophy-subtext">
              10+ years building digital experiences
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="zen-garden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="stones-container">
            <motion.div 
              className="stone stone-large"
              animate={{ 
                y: [0, -2, 0],
                rotateZ: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="stone-highlight" />
            </motion.div>
            
            <motion.div 
              className="stone stone-medium"
              animate={{ 
                y: [0, -1, 0],
                rotateZ: [0, -0.3, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="stone-highlight" />
            </motion.div>
            
            <motion.div 
              className="stone stone-small"
              animate={{ 
                y: [0, -1.5, 0],
                rotateZ: [0, 0.2, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2
              }}
            >
              <div className="stone-highlight" />
            </motion.div>
          </div>

          <div className="sand-patterns">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="sand-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  duration: 2, 
                  delay: 1.5 + i * 0.1,
                  ease: "easeOut"
                }}
                style={{ transform: `translateY(${i * 8}px)` }}
              />
            ))}
          </div>
        </motion.div>


        <motion.div 
          className="scroll-invitation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <motion.div 
            className="scroll-text"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Explore below
          </motion.div>
          <motion.div 
            className="scroll-icon"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>

        <div className="achievement-haiku">
          <motion.div 
            className="haiku-line"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            Building for everyone
          </motion.div>
          <motion.div 
            className="haiku-line"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.7 }}
          >
            Continuous learning
          </motion.div>
          <motion.div 
            className="haiku-line"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.9 }}
          >
            Focus on impact
          </motion.div>
        </div>
      </div>

      {/* Water ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="water-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 10, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Floating particles */}
      <div className="zen-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="zen-particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              left: `${5 + i * 4.5}%`,
              bottom: '0%',
            }}
          />
        ))}
      </div>

      {/* Background elements */}
      <div className="zen-background">
        <motion.div 
          className="circle-large"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="circle-medium"
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>
    </section>
  );
};

export default Hero;