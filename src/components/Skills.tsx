import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  'TypeScript', 'React', 'Ethereum', 'Golang', 'Node.js', 'Python',
  'System Architecture', 'Microservices', 'GraphQL', 'REST APIs',
  'Engineering Leadership', 'Team Management', 'Mentoring', 'Product Strategy',
  'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'MongoDB'
];

const Skills: React.FC = () => {

  return (
    <section className="skills-zen">
      <div className="zen-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>
          <motion.div 
            className="title-stroke"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="skills-tags"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring"
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'var(--zen-stone)'
              }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;