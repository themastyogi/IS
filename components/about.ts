'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Lightbulb, Zap } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on delivering measurable outcomes and business value through strategic ERP implementations.'
    },
    {
      icon: Users,
      title: 'Collaborative Leadership',
      description: 'Building inclusive teams and fostering growth through mentorship and real-time coaching.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Mindset',
      description: 'Applying critical thinking and structured problem-solving to address complex client challenges.'
    },
    {
      icon: Zap,
      title: 'Excellence Commitment',
      description: 'Maintaining PwC quality standards while ensuring client strategies align with ERP deliverables.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about transforming businesses through innovative technology solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 10 years of experience in the ERP and retail technology landscape, I've had the privilege of 
              working with industry leaders like PwC, implementing Microsoft Dynamics 365 solutions that transform 
              how businesses operate. My journey began in 2008, and since then, I've been dedicated to bridging 
              the gap between complex technology and real business needs.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From my early days supporting retail outlets at Cotton County to leading enterprise-level implementations 
              at PwC, I've consistently focused on delivering solutions that not only meet technical requirements but 
              also drive measurable business outcomes. My expertise spans across Supply Chain Management, Advanced 
              Warehousing, Demand Planning, and Commerce solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              What drives me most is the opportunity to mentor teams, lead collaborative workshops, and see businesses 
              thrive through well-implemented technology solutions. I believe in the power of inclusive leadership 
              and continuous learning, always staying current with the latest developments in the D365 ecosystem.
            </p>

            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border-l-4 border-primary-500">
              <p className="text-primary-800 dark:text-primary-200 font-medium italic">
                "My mission is to transform complex business challenges into streamlined, efficient solutions 
                that drive growth and innovation for organizations worldwide."
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg card-shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">
                  <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid sm:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Retail Outlets Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">ERP Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-300">Industry Sectors</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}