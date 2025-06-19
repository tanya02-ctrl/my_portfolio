'use client'
import {
  FaHtml5, FaCss3Alt, FaPhp, FaJava, FaReact, FaGitAlt, FaGithub, FaPython,
} from 'react-icons/fa'
import {
  SiJavascript, SiLaravel, SiTypescript, SiMysql, SiTailwindcss, SiTableau,
  SiPandas, SiScikitlearn, SiTensorflow, SiSpringboot, SiPrisma
} from 'react-icons/si'
import { motion } from 'framer-motion'

const categories = {
  '👨‍💻 Programming Languages': [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-700" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
  ],

  '📚 Libraries & Frameworks': [
    { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Laravel', icon: <SiLaravel className="text-red-600" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  ],

  '🧠 AI / ML & Data Science': [
    { name: 'Pandas', icon: <SiPandas className="text-black" /> },
    { name: 'scikit-learn', icon: <SiScikitlearn className="text-blue-600" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-400" /> },
    { name: 'Seaborn', icon: <span className="text-purple-500 text-2xl">🎨</span> },
    { name: 'AI', icon: <span className="text-fuchsia-500 text-xl font-bold">🤖</span> },
    { name: 'ML', icon: <span className="text-sky-600 text-xl font-bold">📊</span> },
  ],

  '🛠️ Tools & Platforms': [
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
    { name: 'VS Code', icon: <span className="text-blue-500 font-bold text-xl">📝</span> },
    { name: 'PowerPoint', icon: <span className="text-orange-600 text-xl">📊</span> },
    { name: 'Word', icon: <span className="text-blue-600 text-xl">📄</span> },
  ],

  '🗄️ Databases': [
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'Prisma', icon: <SiPrisma className="text-black" /> },
  ],

  '📊 Data Visualization': [
    { name: 'Tableau', icon: <SiTableau className="text-blue-700" /> },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl text-center mx-auto">
        <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">
          My Skills
        </h2>

        {Object.entries(categories).map(([category, skills], i) => (
          <div key={i} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              {category}
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
