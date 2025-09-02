import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {

  const features = [
    {
      icon: FaCode,
      title: 'Self-Taught Developer',
      description: 'Passionate about learning modern web technologies and building innovative solutions in my spare time.'
    },
    {
      icon: FaRocket,
      title: 'Retail Operations',
      description: 'Experienced in managing daily operations, inventory, and ensuring excellent customer service at Walmart.'
    },
    {
      icon: FaUsers,
      title: 'Team Leadership',
      description: 'Leading and motivating teams to achieve operational goals while maintaining high performance standards.'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Combining retail management experience with technical skills to solve complex business challenges.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a love for creating amazing digital experiences
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm Mehadi Hassan</h3>
            <p>
              I'm a Department Manager at Walmart with a passion for technology and web development. 
              By day, I manage retail operations, lead teams, and ensure excellent customer service. 
              By night, I'm a self-taught Full Stack Developer specializing in React, Python, and modern web technologies.
            </p>
            <p>
              My unique background combines hands-on retail management experience with technical expertise. 
              This dual perspective helps me understand both business operations and technical implementation, 
              making me a versatile problem-solver who can bridge the gap between business needs and technology solutions.
            </p>
            <p>
              When I'm not managing my department or coding, you can find me exploring new technologies, 
              contributing to open-source projects, or working on personal web development projects that 
              showcase my growing technical skills. I also enjoy unwinding with some gaming on my PS5, 
              which helps me stay creative and problem-solve in different ways.
            </p>
            
          </motion.div>

          <motion.div
            className="about-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
