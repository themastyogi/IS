'use client'

import { ArrowDown, MapPin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container-max section-padding">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {/* Profile Image */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full p-2">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  {/* Replace with actual image */}
                  <Image
                    src="/profile-photo.jpg"
                    alt="Isha Sharma"
                    width={180}
                    height={180}
                    className="rounded-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden text-6xl font-bold text-gray-400">IS</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">
                Isha Sharma
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Functional Consultant | ERP & Retail SCM Expert
            </p>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Transforming businesses through innovative Microsoft D365 & LS Retail solutions with 10+ years of expertise in Supply Chain Management and Advanced Warehousing
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Gurgaon, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:erishasharma17@gmail.com" className="hover:text-primary-600 transition-colors">
                  erishasharma17@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+918527414614" className="hover:text-primary-600 transition-colors">
                  +91-8527414614
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToAbout}
                className="btn-primary"
              >
                Learn More About Me
              </button>
              <a
                href="#contact"
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.button>
    </section>
  )
}

<style jsx>{`
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }
`}</style>