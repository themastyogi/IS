'use client'

import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Back to top button */}
      <div className="border-b border-gray-800">
        <div className="container-max section-padding py-6">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowUp className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
            Back to top
          </button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Isha Sharma</h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative ERP solutions with 10+ years of expertise 
              in Microsoft Dynamics 365 and retail technology implementations.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>ERP Implementation</li>
              <li>D365 Consulting</li>
              <li>Retail Solutions</li>
              <li>Supply Chain Management</li>
              <li>System Integration</li>
              <li>Training & Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {currentYear} Isha Sharma. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="mailto:erishasharma17@gmail.com" className="hover:text-white transition-colors duration-200">
                erishasharma17@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}