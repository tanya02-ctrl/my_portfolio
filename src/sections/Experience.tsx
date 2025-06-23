'use client'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    company: 'Softintra Technology Pvt. Ltd.',
    role: 'Full Stack Web Developer',
    duration: 'January 2023 – July 2023',
    location: 'Gorakhpur, India',
    responsibilities: [
      'Developed responsive, interactive interfaces using HTML, CSS, JavaScript, PHP, and Laravel.',
      'Utilized Bootstrap, Foundation, and jQuery to accelerate UI development.',
      'Designed and optimized MySQL databases with normalized schemas and efficient queries.',
      'Collaborated with cross-functional teams for end-to-end full-stack solutions.',
      'Followed MVC architecture using Laravel to improve code reusability and maintainability.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl text-center mx-auto">
        <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {exp.company} | {exp.location}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                </div>
              </div>

              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 text-justify">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
