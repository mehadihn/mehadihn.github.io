import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
  FaBrain,
  FaMobile,
  FaUsers,
  FaChartLine,
  FaProjectDiagram,
  FaHandshake
} from 'react-icons/fa';
import { SiDjango, SiTensorflow, SiKeras, SiMysql, SiBootstrap } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Retail Management',
      icon: FaUsers,
      skills: [
        { name: 'Team Leadership', icon: FaUsers },
        { name: 'Operations Management', icon: FaProjectDiagram },
        { name: 'Customer Service', icon: FaHandshake },
        { name: 'Inventory Management', icon: FaChartLine }
      ]
    },
    {
      title: 'Frontend Development',
      icon: FaReact,
      skills: [
        { name: 'React', icon: FaReact },
        { name: 'JavaScript', icon: FaJs },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'Bootstrap', icon: SiBootstrap }
      ]
    },
    {
      title: 'Backend Development',
      icon: FaNodeJs,
      skills: [
        { name: 'Python', icon: FaPython },
        { name: 'Django', icon: SiDjango },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Database Design', icon: FaDatabase }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: FaGitAlt,
      skills: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'Docker', icon: FaDocker },
        { name: 'AWS', icon: FaAws },
        { name: 'Machine Learning', icon: FaBrain }
      ]
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
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  <category.icon />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon">
                        <skill.icon />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
