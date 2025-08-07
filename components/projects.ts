'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Building, Store, Plane, Coffee, Shirt } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Adani Airport D365 POS Implementation',
      client: 'Adani Airport (via PwC)',
      description: 'End-to-end implementation of Microsoft Dynamics 365 POS solution across 120+ retail stores spanning 5 major airports. Managed complex multi-location rollout with integrated inventory management and real-time reporting.',
      image: '/projects/adani-airport.jpg',
      icon: Plane,
      technologies: ['D365 F&O', 'POS Systems', 'Multi-location Setup', 'Inventory Management'],
      outcomes: [
        'Successfully deployed across 120+ stores',
        'Reduced transaction processing time by 40%',
        'Improved inventory visibility across locations',
        'Enhanced customer experience with faster checkouts'
      ],
      category: 'Enterprise Implementation',
      duration: '12 months',
      team: '15+ members'
    },
    {
      title: 'Devyani International Multi-Brand Retail Solution',
      client: 'Devyani International Ltd. (Pizza Hut, KFC, Chokola)',
      description: 'Comprehensive LS Retail implementation for one of India\'s largest QSR operators. Integrated multiple brand operations with centralized reporting, inventory management, and franchise management capabilities.',
      image: '/projects/devyani.jpg',
      icon: Coffee,
      technologies: ['LS Retail', 'NAV Integration', 'Multi-brand Setup', 'Franchise Management'],
      outcomes: [
        'Unified operations across 3 major brands',
        'Streamlined franchise management processes',
        'Real-time inventory tracking across 200+ outlets',
        'Improved supply chain efficiency by 35%'
      ],
      category: 'Multi-brand Retail',
      duration: '18 months',
      team: '12+ members'
    },
    {
      title: 'Relaxo Footwear Nationwide Retail Rollout',
      client: 'Relaxo Footwear Ltd.',
      description: 'Large-scale implementation of NAV 2013 R2 with LS Retail across 160+ retail outlets nationwide. Led technical support team and managed phased rollout strategy with comprehensive training programs.',
      image: '/projects/relaxo.jpg',
      icon: Shirt,
      technologies: ['NAV 2013 R2', 'LS Retail 7.1', 'POS Systems', 'Data Migration'],
      outcomes: [
        'Successfully rolled out to 160+ outlets',
        'Established centralized inventory management',
        'Reduced stock-out incidents by 50%',
        'Improved sales reporting accuracy'
      ],
      category: 'Retail Chain Expansion',
      duration: '10 months',
      team: '8+ members'
    },
    {
      title: 'Hospitality ERP Solution Architecture',
      client: 'AX Source Global - Hospitality Vertical',
      description: 'Built comprehensive solution architecture for hospitality industry on D365 F&O platform. Designed specialized modules for hotel management, restaurant operations, and event management with integrated financial reporting.',
      image: '/projects/hospitality.jpg',
      icon: Building,
      technologies: ['D365 F&O', 'Hospitality Modules', 'Custom Development', 'Integration APIs'],
      outcomes: [
        'Created reusable hospitality solution framework',
        'Reduced implementation time by 60% for future projects',
        'Integrated with major booking platforms',
        'Enhanced guest experience management'
      ],
      category: 'Solution Architecture',
      duration: '8 months',
      team: '6+ members'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing successful implementations and innovative solutions that drove business transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden card-shadow hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-primary-600 dark:text-primary-400 opacity-50" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {project.client}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {project.team}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Key Outcomes:</h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Other Notable Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Sagar Ratna Restaurant Chain',
                description: 'NAV + LS Retail implementation for hospitality chain with specialized restaurant management features.',
                impact: '50+ Locations'
              },
              {
                title: 'Cotton County Retail Support',
                description: 'Comprehensive IT and POS support for 100+ franchise outlets with system health monitoring.',
                impact: '100+ Outlets'
              },
              {
                title: 'Multi-Geography Automotive DMS',
                description: 'Requirements management for automotive dealer management system across multiple regions.',
                impact: 'Global Rollout'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg card-shadow">
                <h4 className="font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded">
                    {project.impact}
                  </span>
                  <Store className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4">Interested in a Similar Solution?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help transform your business with tailored ERP and retail solutions 
            that drive real results and sustainable growth.
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  )
}