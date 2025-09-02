import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaBrain, FaUsers, FaChartLine } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/assets/img/portfolio/portfolio-1.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/mehadihn/ecommerce-platform',
      live: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Retail Management System',
      description: 'A web application designed to streamline retail operations, inventory tracking, and team scheduling. Built with React and Python.',
      image: '/assets/img/portfolio/portfolio-2.jpg',
      category: 'web',
      technologies: ['React', 'Python', 'Django', 'MySQL'],
      github: 'https://github.com/mehadihn/retail-management',
      live: 'https://retail-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, built using React and Firebase.',
      image: '/assets/img/portfolio/portfolio-3.jpg',
      category: 'web',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/mehadihn/task-manager',
      live: 'https://taskmanager-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Machine Learning Dashboard',
      description: 'A comprehensive ML dashboard for data visualization and model training. Built with Python, TensorFlow, and React.',
      image: '/assets/img/portfolio/portfolio-4.jpg',
      category: 'ml',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      github: 'https://github.com/mehadihn/ml-dashboard',
      live: 'https://ml-dashboard-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Customer Service Portal',
      description: 'A web portal for managing customer inquiries and feedback, inspired by retail customer service experience.',
      image: '/assets/img/portfolio/portfolio-5.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/mehadihn/customer-portal',
      live: 'https://customer-portal-demo.com',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion for smooth animations.',
      image: '/assets/img/portfolio/portfolio-6.jpg',
      category: 'web',
      technologies: ['React', 'Framer Motion', 'CSS3'],
      github: 'https://github.com/mehadihn/portfolio',
      live: 'https://mehadihn.github.io',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: FaCode },
    { key: 'web', label: 'Web Development', icon: FaCode },
    { key: 'ml', label: 'Machine Learning', icon: FaBrain }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">
            A showcase of my recent projects and creative work
          </p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              <filter.icon />
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
