import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Heart, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contacts = [
    {
      name: 'Email',
      href: 'mailto:justin@example.com',
      icon: Mail,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/jbrower95',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jbrower95',
      icon: Linkedin,
    },
    {
      name: 'Farcaster',
      href: 'https://farcaster.xyz/jayb',
      icon: MessageCircle,
    }
  ];

  return (
    <section className="contact-zen">
      <div className="zen-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact</h2>
          <motion.div 
            className="title-stroke"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="contact-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            
            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                className="contact-link"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + index * 0.1
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
              >
                <IconComponent size={24} />
                <span>{contact.name}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div 
          className="location"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <MapPin size={16} />
          <span>New York • Open to remote work</span>
        </motion.div>
      </div>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <div className="built-with">
            Built with React, TypeScript, and Framer Motion <Heart size={14} />
          </div>
          <div className="copyright">© 2025 Justin Brower</div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;