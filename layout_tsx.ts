import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Isha Sharma - ERP & Retail SCM Expert',
  description: 'Functional Consultant specializing in Microsoft D365 & LS Retail with 10+ years of experience in Supply Chain Management, Advanced Warehousing, and Commerce solutions.',
  keywords: 'Isha Sharma, ERP Consultant, Microsoft Dynamics 365, LS Retail, Supply Chain Management, D365 F&O, Functional Consultant',
  authors: [{ name: 'Isha Sharma' }],
  creator: 'Isha Sharma',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Isha Sharma - ERP & Retail SCM Expert',
    description: 'Functional Consultant specializing in Microsoft D365 & LS Retail with 10+ years of experience',
    url: 'https://your-domain.com',
    siteName: 'Isha Sharma Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Isha Sharma - ERP & Retail SCM Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isha Sharma - ERP & Retail SCM Expert',
    description: 'Functional Consultant specializing in Microsoft D365 & LS Retail with 10+ years of experience',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Isha Sharma",
              "jobTitle": "Functional Consultant - ERP & Retail SCM Expert",
              "description": "Microsoft D365 & LS Retail Specialist with 10+ years of experience",
              "url": "https://your-domain.com",
              "email": "erishasharma17@gmail.com",
              "telephone": "+91-8527414614",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gurgaon",
                "addressCountry": "IN"
              },
              "alumniOf": "Bachelor's in Technology – Information Technology",
              "knowsAbout": [
                "Microsoft Dynamics 365",
                "Supply Chain Management",
                "LS Retail",
                "ERP Implementation",
                "Advanced Warehousing",
                "Demand Planning"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}