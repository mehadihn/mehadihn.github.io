import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'App Developer',
      company: 'CredoSense Inc.',
      location: 'Remote (Toronto, Canada)',
      period: 'Apr 2025 - Present',
      type: 'Current',
      description: 'Designed and developed a cross-platform Flutter app (iOS, Android) for real-time plant health monitoring, integrating IoT sensor data with predictive analytics and LLM powered advanced insights.',
      achievements: [
        'Built a scalable Django backend with Redis and Celery, supporting 1,000+ concurrent users and real-time task processing',
        'Implemented caching strategies, reducing API response times by 40-60% for frequent queries',
        'Led end-to-end product development, including architecture design, implementation and optimization',
        'Managed AWS infrastructure (EC2, RDS) and automated deployments via CI/CD pipelines'
      ],
      technologies: ['Flutter', 'Django', 'Redis', 'Celery', 'AWS', 'CI/CD', 'IoT', 'LLM']
    },
    {
      id: 2,
      title: 'Department Manager',
      company: 'Walmart Canada',
      location: 'St. John\'s, NL',
      period: 'Aug 2024 - Present',
      type: 'Current',
      description: 'Promoted to manage produce department operations, ensuring quality standards, and leading a team to deliver excellent customer service.',
      achievements: [
        'Promoted from Associate to Department Manager in August 2024, demonstrating leadership potential and operational excellence',
        'Manage daily operations of the produce department, including inventory control and quality assurance',
        'Lead and train team members, improving department efficiency and customer service standards',
        'Assisted 50+ customers per shift with product inquiries, ensuring clear communication and positive experiences',
        'Implemented process improvements to enhance customer satisfaction and operational efficiency'
      ],
      technologies: ['Team Leadership', 'Operations Management', 'Customer Service', 'Inventory Management', 'Staff Training']
    },
    {
      id: 2.5,
      title: 'Associate',
      company: 'Walmart Canada',
      location: 'St. John\'s, NL',
      period: 'Sep 2023 - Aug 2024',
      type: 'Previous',
      description: 'Started as an Associate, quickly learning operations and demonstrating leadership qualities that led to promotion.',
      achievements: [
        'Assisted 50+ customers per shift with product inquiries, ensuring clear communication and positive experiences',
        'Trained and mentored new associates, improving team efficiency and operational consistency',
        'Demonstrated strong work ethic and leadership potential, leading to promotion within 11 months',
        'Maintained high standards of customer service and operational excellence'
      ],
      technologies: ['Customer Service', 'Team Collaboration', 'Operations', 'Product Knowledge']
    },
    {
      id: 3,
      title: 'Full Stack Developer (Intern/Co-Op)',
      company: 'CoLab Software Inc.',
      location: 'St. John\'s, NL',
      period: 'May 2023 - Dec 2023',
      type: 'Previous',
      description: 'Contributed to full-stack development using React, Flask, and GraphQL, rapidly adapting to unfamiliar frameworks.',
      achievements: [
        'Refactored Cypress automated test suites, improving maintainability and test reliability',
        'Led the internationalization (i18n) project, adding French language support to the platform',
        'Enhanced APIs while maintaining backward compatibility, ensuring smooth feature adoption for clients',
        'Collaborated with cross-functional teams to deliver high-quality software solutions'
      ],
      technologies: ['React', 'Flask', 'GraphQL', 'Cypress', 'i18n', 'API Development']
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'CredoSense Ltd.',
      location: 'Dhaka, Bangladesh',
      period: 'Jun 2021 - Jul 2022',
      type: 'Previous',
      description: 'Built APIs to connect IoT environmental sensors with web dashboards, enabling real-time agricultural data monitoring.',
      achievements: [
        'Implemented ML models achieving ~90% accuracy for soil calibration, improving precision agriculture capabilities',
        'Optimized system scalability to handle 10X data loads without performance degradation',
        'Managed software development and IT operations, ensuring smooth system performance',
        'Reduced IoT device communication time from 10s to 3s, enhancing user experience and operational efficiency'
      ],
      technologies: ['Python', 'Machine Learning', 'IoT', 'API Development', 'System Optimization', 'IT Operations']
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
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            A journey of growth from software engineering to retail management and back to tech
          </p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-item ${exp.type.toLowerCase()}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <div className="experience-period">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                  <div className="experience-location">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="experience-content">
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
