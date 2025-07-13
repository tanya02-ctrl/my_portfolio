'use client'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Campus Placement Drive',
    description:
      'A full-featured web application to manage college placement processes. Built using HTML, CSS, Bootstrap for frontend and PHP & MySQL for backend logic.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'MySQL', 'PHP'],
    github: 'https://github.com/tanya02-ctrl/campus_placement_drive',
  },
  {
    title: 'House Price Prediction',
    description:
      'A machine learning project to predict house prices based on various features. Built using Python, Flask for the backend, and React for the frontend.',
    technologies: ['Python', 'Machine Learning', 'Streamlit'],
    github: 'https://github.com/tanya02-ctrl/house_price_predictor',
  },
  {
    title: 'Weather App',
    description:
      'A real-time weather application that fetches data from a public API and displays current weather conditions. Built using React, Tailwind CSS, and OpenWeatherMap API.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeatherMap API'],
    github: 'https://github.com/tanya02-ctrl/weather-app',
  },
  {
    title: 'Airline Market Demand App',
    description:
      'Airline Market Demand Web App A Python + Flask web application that fetches, processes, and visualizes airline booking market demand data',
    technologies: ['Python', 'Flask', 'Chart.js', 'API'],
    github: 'https://github.com/tanya02-ctrl/airline-market-demand-app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl text-center mx-auto">
        <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
