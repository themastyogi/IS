'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Database, 
  Settings, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Cloud, 
  Wrench,
  Award,
  Truck,
  Building2
} from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'ERP & Platforms',
      icon: Database,
      skills: [
        { name: 'Microsoft Dynamics 365 F&O', level: 95 },
        { name: 'Business Central', level: 90 },
        { name: 'LS Retail', level: 92 },
        { name: 'NAV 2013/2017', level: 88 },
        { name: 'ServiceNow ITSM', level: 85 }
      ]
    },
    {
      title: 'Supply Chain & Commerce',
      icon: Truck,
      skills: [
        { name: 'Supply Chain Management', level: 95 },
        { name: 'Advanced Warehousing', level: 92 },
        { name: 'Demand Planning & Forecasting', level: 90 },
        { name: 'E-Commerce Integration', level: 88 },
        { name: 'Omni-Channel Solutions', level: 85 }
      ]
    },
    {
      title: 'Retail Solutions',
      icon: ShoppingCart,
      skills: [
        { name: 'POS Configuration', level: 95 },
        { name: 'Data Replication', level: 90 },
        { name: 'Loyalty Programs', level: 88 },
        { name: 'Retail Server Setup', level: 92 },
        { name: 'Multi-brand Rollouts', level: 90 }
      ]
    },
    {
      title: 'Project Management',
      icon: Settings,
      skills: [
        { name: 'Implementation Management', level: 95 },
        { name: 'Go-Live Support', level: 92 },
        { name: 'UAT & Training', level: 90 },
        { name: 'Stakeholder Management', level: 88 },
        { name: 'Process Improvement', level: 85 }
      ]
    }
  ]

  const certifications = [
    'D365 Retail Certified Consultant',
    'Microsoft Dynamics 365 Finance & Operations',
    'LS Retail Implementation Specialist',
    'ServiceNow ITSM Professional'
  ]

  const tools = [
    'SQL Server',
    'Azure DevOps',
    'Visual Studio',
    'Power BI',
    'SharePoint',
    'Teams',
    'Jira',
    'Confluence'
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical skills and domain expertise across the Microsoft ecosystem
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg card-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Tools */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg card-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/10 rounded-lg"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg card-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Wrench className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Tools & Technologies</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full hover:scale-105 transition-transform duration-200"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Team Leadership', desc: 'Leading cross-functional teams and mentoring junior consultants' },
              { icon: Building2, title: 'Client Workshops', desc: 'Conducting stakeholder sessions and requirement gathering' },
              { icon: BarChart3, title: 'Process Improvement', desc: 'Optimizing business processes and workflows' },
              { icon: Cloud, title: 'Digital Transformation', desc: 'Driving enterprise-wide technology adoption' }
            ].map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <competency.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-semibold mb-2">{competency.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{competency.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}