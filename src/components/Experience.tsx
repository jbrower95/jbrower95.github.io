import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Cherry, Mountain, Waves } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
}

const experiences: Experience[] = [
  {
    id: 'eigenlayer',
    company: 'EigenLayer',
    role: 'Principal Software Engineer',
    period: 'June 2024 - Present',
    location: 'New York',
    description: 'Architecting scalable Ethereum infrastructure, building systems that manage billions in assets.',
    achievements: [
      'Built Zeus - Smart contract deployer managing $10B in Ethereum',
      'Reduced deployment time from weeks to hours through automation',
      'Created navs - TypeScript library for Ethereum development',
      'Collaborated on cross-functional engineering initiatives'
    ],
    element: 'wood'
  },
  {
    id: 'coinbase',
    company: 'Coinbase',
    role: 'Staff Software Engineer',
    period: 'January 2022 - April 2024',
    location: 'New York',
    description: 'Building cryptocurrency infrastructure and embedded wallet solutions for mainstream adoption.',
    achievements: [
      'Embedded Wallets - Seamless blockchain integration for applications',
      'Asset listing automation - Reduced process from 3 months to 3 weeks',
      'Liquidity optimization - Saved $10M annually through system improvements',
      'Mentored engineers and contributed to team growth initiatives'
    ],
    element: 'fire'
  },
  {
    id: 'facebook',
    company: 'Facebook',
    role: 'Software Engineer',
    period: 'July 2017 - November 2021',
    location: 'New York',
    description: 'Developing scalable frameworks and mobile experiences for billions of users worldwide.',
    achievements: [
      'Bloks - Server-side rendering framework for mobile applications',
      'Native UI experiences across multiple platforms',
      'Scaled systems across Facebook, Instagram, and WhatsApp',
      'Collaborated with team of engineers on critical infrastructure'
    ],
    element: 'metal'
  },
  {
    id: 'trade',
    company: 'Trade',
    role: 'Software Engineer',
    period: 'September 2016 - June 2017',
    location: 'Remote',
    description: 'Building agricultural technology solutions with React Native and mobile-first approaches.',
    achievements: [
      'Android development for agricultural supply chain tracking',
      'Real-time tracking and logistics optimization',
      'Cross-platform mobile development',
      'Early-stage startup experience in Y Combinator program'
    ],
    element: 'water'
  }
];

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [hoveredTimeline, setHoveredTimeline] = useState<string | null>(null);

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'wood': return Cherry;
      case 'fire': return Waves;
      case 'earth': return Mountain;
      case 'metal': return Mountain;
      case 'water': return Waves;
      default: return Cherry;
    }
  };

  const getElementColor = (element: string) => {
    switch (element) {
      case 'wood': return '#4ade80';
      case 'fire': return '#f87171';
      case 'earth': return '#fbbf24';
      case 'metal': return '#94a3b8';
      case 'water': return '#60a5fa';
      default: return '#4ade80';
    }
  };

  return (
    <section className="experience-zen">
      <div className="zen-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="section-subtitle">My professional journey</div>
          <motion.div 
            className="title-stroke"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="timeline-zen">
          <motion.div 
            className="timeline-path"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {experiences.map((exp, index) => {
            const Icon = getElementIcon(exp.element);
            const elementColor = getElementColor(exp.element);
            const isHovered = hoveredTimeline === exp.id;
            
            return (
              <motion.div
                key={exp.id}
                className={`timeline-node ${selectedExperience?.id === exp.id ? 'selected' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredTimeline(exp.id)}
                onHoverEnd={() => setHoveredTimeline(null)}
              >
                <motion.div 
                  className="timeline-marker"
                  style={{ backgroundColor: elementColor }}
                  whileHover={{ scale: 1.3 }}
                  animate={{ 
                    boxShadow: isHovered 
                      ? `0 0 20px ${elementColor}` 
                      : `0 0 0px ${elementColor}`
                  }}
                >
                  <Icon size={16} />
                </motion.div>

                <motion.div 
                  className={`timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}
                  onClick={() => setSelectedExperience(exp)}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 8px 30px rgba(0, 0, 0, 0.1)`
                  }}
                  style={{ borderLeftColor: elementColor }}
                >
                  <div className="card-header">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="role-period">
                      <span className="role">{exp.role}</span>
                      <div className="meta-info">
                        <span className="period">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="location">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-description">
                    {exp.description}
                  </div>
                  
                  <motion.div 
                    className="card-preview"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="preview-text">Click to explore deeper</div>
                    <motion.div 
                      className="preview-arrow"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <AnimatePresence>
        {selectedExperience && (
          <motion.div 
            className="experience-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{ duration: 0.5, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
              style={{ borderTopColor: getElementColor(selectedExperience.element) }}
            >
              <div className="modal-header">
                <div className="header-content">
                  <motion.div 
                    className="element-icon"
                    style={{ backgroundColor: getElementColor(selectedExperience.element) }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {React.createElement(getElementIcon(selectedExperience.element), { size: 24 })}
                  </motion.div>
                  
                  <div className="header-text">
                    <h2 className="modal-company">{selectedExperience.company}</h2>
                    <p className="modal-role">{selectedExperience.role}</p>
                    <div className="modal-meta">
                      <span>{selectedExperience.period}</span>
                      <span>•</span>
                      <span>{selectedExperience.location}</span>
                    </div>
                  </div>
                </div>
                
                <motion.button 
                  className="close-button"
                  onClick={() => setSelectedExperience(null)}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 90,
                    backgroundColor: getElementColor(selectedExperience.element)
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>
              
              <div className="modal-body">
                <div className="philosophy-section">
                  <h4>Philosophy</h4>
                  <p>{selectedExperience.description}</p>
                </div>
                
                <div className="achievements-section">
                  <h4>Achievements</h4>
                  <ul className="achievements-zen">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <motion.div 
                          className="achievement-dot"
                          style={{ backgroundColor: getElementColor(selectedExperience.element) }}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="element-section">
                  <div className="element-info">
                    <span className="element-label">Element:</span>
                    <span className="element-value">{selectedExperience.element}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating elements */}
      <div className="floating-elements">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="floating-leaf"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;