'use client'
import { useState } from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'

type CertType = {
  title: string
  issuer: string
  date: string
  code: string
  image: string
  category: string
}

const certifications: CertType[] = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte x Forage',
    date: 'April 17, 2025',
    code: 'DRNBcTzM8qMPwGdPM',
    category: 'Simulation',
    image: '/certifications/Deloitte.jpg',
  },
  {
    title: 'Advanced Software Engineering',
    issuer: 'Walmart x Forage',
    date: 'April 7, 2025',
    code: 'z6Cb82RkdMY3nSWeJ',
    category: 'Simulation',
    image: '/certifications/Walmart.jpg',
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'Wingspan',
    date: 'June 7, 2025',
    code: 'Verified via QR',
    category: 'AI',
    image: '/certifications/AI.jpg',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Wingspan',
    date: 'June 7, 2025',
    code: 'Verified via QR',
    category: 'AI',
    image: '/certifications/Prompt.jpg',
  },
  {
    title: 'Generative AI Unleashing',
    issuer: 'Wingspan',
    date: 'June 7, 2025',
    code: 'Verified via QR',
    category: 'AI',
    image: '/certifications/Gen.jpg',
  },
]

Modal.setAppElement('#root')

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertType | null>(null)

  return (
    <section id="certifications" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl text-center mx-auto">
        <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg relative"
            >
              <span className="absolute top-2 right-2 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold px-2 py-1 rounded">
                {cert.category}
              </span>

              <button onClick={() => setSelectedCert(cert)}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-lg object-cover mb-4 w-full h-auto"
                />
              </button>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Issued: {cert.date}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">ID: {cert.code}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <Modal
          isOpen={true}
          onRequestClose={() => setSelectedCert(null)}
          className="max-w-4xl mx-auto my-12 bg-white dark:bg-gray-900 p-4 rounded-lg outline-none shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <div className="flex flex-col items-center space-y-4">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="rounded-lg object-contain max-h-[80vh] w-full"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </section>
  )
}
