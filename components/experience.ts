'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, Download } from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Functional Consultant, D365 Retail',
      company: 'PwC India',
      location: 'Gurgaon',
      period: 'July 2021 – Present',
      current: true,
      achievements: [
        'Delivered end-to-end implementations of Microsoft Dynamics 365 F&O for enterprise clients across diverse sectors',
        'Applied critical thinking and structured problem-solving to address complex client challenges',
        'Led solution configuration, user training, and go-live support for Demand Planning & Forecasting processes',
        'Promoted team growth through real-time coaching and collaborative leadership',
        'Maintained PwC quality standards while ensuring client strategy alignment'
      ],
      technologies: ['D365 F&O', 'Supply Chain Management', 'Advanced Warehousing', 'ServiceNow']
    },
    {
      title: 'D365 F&O Consultant (Retail & Hospitality)',
      company: 'AX Source Global Pvt. Ltd.',
      location: 'Remote',
      period: 'Feb 2020 – July 2021',
      current: false,
      achievements: [
        'Led hospitality vertical implementation on D365 F&O platform',
        'Built comprehensive solution architecture and documentation for hospitality processes',
        'Conducted pre-sales demos and managed client onboarding processes',
        'Collaborated with development teams on enhancements and retail configurations',
        'Provided troubleshooting support for D365 Retail Commerce & POS functional issues'
      ],
      technologies: ['D365 F&O', 'Hospitality Solutions', 'Retail Commerce', 'POS Systems']
    },
    {
      title: 'LS Retail Functional Consultant',
      company: 'IBIZ Consulting Services',
      location: 'India',
      period: 'June 2018 – Sep 2019',
      current: false,
      achievements: [
        'Delivered NAV/LS Retail solutions for clients in finance, retail, and supply chain sectors',
        'Conducted comprehensive product demos and user training sessions',
        'Supported ERP implementations including NAV 2017/BC with localization features',
        'Managed post-implementation support and customizations for international projects'
      ],
      technologies: ['LS Retail', 'NAV 2017', 'Business Central', 'Supply Chain']
    },
    {
      title: 'Functional Consultant (Automotive Retail)',
      company: 'Incadea India Pvt. Ltd.',
      location: 'India',
      period: 'July 2015 – May 2016',
      current: false,
      achievements: [
        'Managed requirements for automotive DMS rollouts across multiple geographies',
        'Coordinated cross-team documentation, scoping, and architectural estimates',
        'Advised OEMs and dealerships on ERP implementation strategies and impact analysis'
      ],
      technologies: ['Automotive DMS', 'ERP Implementation', 'Requirements Management']
    },
    {
      title: 'Retail Functional Consultant',
      company: 'Trident Information Systems',
      location: 'India',
      period: 'April 2012 – July 2015',
      current: false,
      achievements: [
        'Deployed LS Retail solutions for major clients including Relaxo Footwear & Devyani International',
        'Conducted requirement workshops, UAT, and comprehensive user training sessions',
        'Specialized in POS configuration, data replication, loyalty programs, and retail server setups',
        'Delivered support and enhancements across 5+ multi-brand rollouts'
      ],
      technologies: ['LS Retail', 'POS Systems', 'Data Replication', 'Loyalty Programs']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A decade of driving digital transformation and ERP excellence across industries
          </p>
          <a
            href="/resume.pdf"
            download
            className="btn-primary"
          >
            <Download className="w-4 h-4" />
            Download Full Resume
          </a>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 ${
                  exp.current ? 'w-6 h-6 bg-primary-500' : 'w-4 h-4 bg-gray-400'
                } rounded-full border-4 border-white dark:border-gray-900 z-10`}>
                  {exp.current && (
                    <div className="w-full h-full bg-primary-500 rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg card-shadow hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        exp.current 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                      }`}>
                        {exp.current ? 'Current' : 'Previous'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 text-gray-600 dark:text-gray-300">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}