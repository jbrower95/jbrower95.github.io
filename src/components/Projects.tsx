import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mountain, Wind, Droplet, Leaf, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  essence: string;
  period: string;
  organization: string;
  description: string;
  impact: string[];
  nature: 'mountain' | 'forest' | 'ocean' | 'sky' | 'earth';
  scale: 'profound' | 'significant' | 'notable';
  philosophy: string;
  harmony: number;
}

const projectsData: Project[] = [
  {
    id: 'zeus',
    title: 'Zeus',
    essence: 'Guardian of ten billion in Ethereum',
    period: '2024',
    organization: 'EigenLayer',
    description: 'A smart contract deployer born from necessity, crafted with precision. Like a master craftsman\'s tool, it transforms weeks of careful work into hours of flowing creation.',
    impact: [
      'Protects $10B in digital assets with unwavering vigilance',
      'Reduces deployment ceremony from weeks to peaceful hours',
      'Enables reproducible, auditable smart contract births',
      'Serves as foundation for Ethereum\'s restaking revolution'
    ],
    nature: 'mountain',
    scale: 'profound',
    philosophy: 'Strength through simplicity',
    harmony: 98
  },
  {
    id: 'embedded-wallets',
    title: 'Embedded Wallets',
    essence: 'Digital wallets woven into the fabric of applications',
    period: '2022-2024',
    organization: 'Coinbase',
    description: 'Like cherry blossoms naturally blooming from branches, these wallets emerge seamlessly within applications. No friction, no barriers—just pure, effortless interaction with the blockchain.',
    impact: [
      'Nurtured a team of seven dedicated craftspeople',
      'Served twenty partners with gentle reliability',
      'Launched on mainnet with quiet confidence',
      'Pioneered invisible blockchain interactions'
    ],
    nature: 'forest',
    scale: 'profound',
    philosophy: 'Invisible when perfect',
    harmony: 94
  },
  {
    id: 'bloks',
    title: 'Bloks Framework',
    essence: 'Server-side rendering for billions of human connections',
    period: '2017-2021',
    organization: 'Meta',
    description: 'A framework that touches billions of lives across Facebook, Instagram, and WhatsApp. Like water flowing through ancient channels, it delivers experiences with natural grace.',
    impact: [
      'Reached billions of souls across three platforms',
      'Led a harmonious team of three engineers',
      'Enabled native-level beauty in mobile interfaces',
      'Delivered updates like morning dew—silent, essential'
    ],
    nature: 'ocean',
    scale: 'profound',
    philosophy: 'Flow like water',
    harmony: 91
  },
  {
    id: 'asset-listing',
    title: 'Asset Listing Harmony',
    essence: 'Transforming months of waiting into weeks of patience',
    period: '2022-2024',
    organization: 'Coinbase',
    description: 'Where once there was lengthy ceremony, now flows efficient process. Like a gardener pruning excess branches, we removed what wasn\'t needed.',
    impact: [
      'Shortened asset journeys from seasons to weeks',
      'Automated the tedious, preserved the essential',
      'Brought peace to operations teams worldwide',
      'Created space for innovation to breathe'
    ],
    nature: 'forest',
    scale: 'significant',
    philosophy: 'Remove to improve',
    harmony: 87
  },
  {
    id: 'liquidity-optimization',
    title: 'Liquidity Wisdom',
    essence: 'Ten million dollars saved through careful observation',
    period: '2023',
    organization: 'Coinbase',
    description: 'Sometimes the greatest victories come from seeing what others overlook. A single insight, applied with care, saves millions while improving the whole system\'s health.',
    impact: [
      'Preserved ten million dollars annually',
      'Healed inefficiencies in financial flows',
      'Demonstrated power of mindful observation',
      'Created lasting infrastructure improvements'
    ],
    nature: 'mountain',
    scale: 'significant',
    philosophy: 'Observe deeply, act precisely',
    harmony: 93
  },
  {
    id: 'brown-cs',
    title: 'Computer Science Studies',
    essence: 'Four years of learning the deep patterns',
    period: '2013-2017',
    organization: 'Brown University',
    description: 'Where fundamentals were learned and teaching was practiced. Like a student who becomes teacher, sharing knowledge of system internals and security principles.',
    impact: [
      'Mastered computer systems at their core',
      'Taught others the art of system design',
      'Explored security vulnerabilities with wisdom',
      'Built foundation for lifetime of learning'
    ],
    nature: 'earth',
    scale: 'notable',
    philosophy: 'Strong roots enable tall growth',
    harmony: 85
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedNature, setSelectedNature] = useState<string>('all');

  const natures = ['all', 'mountain', 'forest', 'ocean', 'sky', 'earth'];
  const filteredProjects = selectedNature === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.nature === selectedNature);

  const getNatureIcon = (nature: string) => {
    switch (nature) {
      case 'mountain': return Mountain;
      case 'forest': return Leaf;
      case 'ocean': return Droplet;
      case 'sky': return Wind;
      case 'earth': return Star;
      default: return Sparkles;
    }
  };

  const getNatureColor = (nature: string) => {
    switch (nature) {
      case 'mountain': return '#94a3b8';
      case 'forest': return '#4ade80';
      case 'ocean': return '#60a5fa';
      case 'sky': return '#e0e7ff';
      case 'earth': return '#fbbf24';
      default: return '#6b7280';
    }
  };

  const getScaleOpacity = (scale: string) => {
    switch (scale) {
      case 'profound': return 1;
      case 'significant': return 0.85;
      case 'notable': return 0.7;
      default: return 0.6;
    }
  };

  return (
    <section className="projects-zen">
      <div className="zen-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-subtitle">Creations that serve purpose and bring harmony</div>
          <motion.div 
            className="title-stroke"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="nature-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {natures.map((nature) => {
            const Icon = getNatureIcon(nature);
            return (
              <motion.button
                key={nature}
                className={`nature-button ${selectedNature === nature ? 'active' : ''}`}
                onClick={() => setSelectedNature(nature)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={14} />
                <span>{nature}</span>
                <motion.div 
                  className="button-glow"
                  animate={{ 
                    opacity: selectedNature === nature ? 0.3 : 0
                  }}
                  style={{ backgroundColor: getNatureColor(nature) }}
                />
              </motion.button>
            );
          })}
        </motion.div>

        <div className="projects-garden">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isHovered = hoveredProject === project.id;
              const natureColor = getNatureColor(project.nature);
              const Icon = getNatureIcon(project.nature);
              
              return (
                <motion.div
                  key={project.id}
                  className={`project-scroll ${project.scale}`}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ 
                    opacity: getScaleOpacity(project.scale), 
                    y: 0, 
                    scale: isHovered ? 1.02 : 1
                  }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{ 
                    boxShadow: `0 12px 40px rgba(0, 0, 0, 0.08)`,
                    y: -4
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="scroll-paper">
                    <div className="paper-header">
                      <motion.div 
                        className="nature-seal"
                        style={{ backgroundColor: natureColor }}
                        animate={{ 
                          rotate: isHovered ? 180 : 0
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon size={16} />
                      </motion.div>
                      
                      <div className="project-period">{project.period}</div>
                    </div>
                    
                    <div className="paper-content">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-essence">{project.essence}</div>
                      <div className="project-organization">{project.organization}</div>
                      
                      <motion.div 
                        className="harmony-indicator"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? project.harmony / 100 : 0.7 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ backgroundColor: natureColor }}
                      />
                      
                      <div className="project-preview">
                        <div className="preview-text">{project.description.slice(0, 120)}...</div>
                      </div>
                      
                      <motion.div 
                        className="philosophy-hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="philosophy-quote">"{project.philosophy}"</div>
                      </motion.div>
                    </div>
                    
                    <div className="paper-footer">
                      <div className="scale-indicator">
                        <span className="scale-label">{project.scale}</span>
                        <span className="harmony-value">{project.harmony}% harmony</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="scroll-shadow"
                    animate={{ 
                      opacity: isHovered ? 0.15 : 0.05,
                      scale: isHovered ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-scroll"
              initial={{ scale: 0.9, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: 15 }}
              transition={{ duration: 0.6, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
              style={{ borderColor: getNatureColor(selectedProject.nature) }}
            >
              <div className="scroll-header">
                <div className="header-content">
                  <motion.div 
                    className="nature-emblem"
                    style={{ backgroundColor: getNatureColor(selectedProject.nature) }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {React.createElement(getNatureIcon(selectedProject.nature), { size: 24 })}
                  </motion.div>
                  
                  <div className="header-text">
                    <h2 className="modal-title">{selectedProject.title}</h2>
                    <p className="modal-essence">{selectedProject.essence}</p>
                    <div className="modal-meta">
                      <span>{selectedProject.organization}</span>
                      <span>•</span>
                      <span>{selectedProject.period}</span>
                    </div>
                  </div>
                </div>
                
                <motion.button 
                  className="close-scroll"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 90,
                    backgroundColor: getNatureColor(selectedProject.nature)
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>
              
              <div className="scroll-body">
                <div className="story-section">
                  <h4>Story</h4>
                  <p className="story-text">{selectedProject.description}</p>
                </div>
                
                <div className="impact-section">
                  <h4>Impact</h4>
                  <div className="impact-list">
                    {selectedProject.impact.map((impact, index) => (
                      <motion.div
                        key={index}
                        className="impact-item"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <motion.div 
                          className="impact-dot"
                          style={{ backgroundColor: getNatureColor(selectedProject.nature) }}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <span>{impact}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="philosophy-section">
                  <h4>Philosophy</h4>
                  <div className="wisdom-quote">
                    <motion.div 
                      className="quote-mark"
                      style={{ color: getNatureColor(selectedProject.nature) }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      "
                    </motion.div>
                    <span className="philosophy-text">{selectedProject.philosophy}</span>
                    <motion.div 
                      className="quote-mark"
                      style={{ color: getNatureColor(selectedProject.nature) }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    >
                      "
                    </motion.div>
                  </div>
                </div>
                
                <div className="harmony-section">
                  <div className="harmony-info">
                    <span className="harmony-label">Harmony:</span>
                    <span className="harmony-percentage">{selectedProject.harmony}%</span>
                  </div>
                  <div className="scale-info">
                    <span className="scale-label">Scale:</span>
                    <span className="scale-value">{selectedProject.scale}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating elements */}
      <div className="zen-petals">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="floating-petal"
            animate={{
              y: [0, -60, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;