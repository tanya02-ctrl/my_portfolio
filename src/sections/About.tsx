'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left: Image + Social Icons + Resume Button */}
        <div className="flex flex-col items-center">
          <img
            src="/image.jpg" // Replace with your image path
            alt="My Photo"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          />

          {/* Social Links */}
          <div className="mt-6 flex space-x-6">
            <a
              href="https://www.linkedin.com/in/tanya-shree0209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/tanya02-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-2xl"
            >
              <FaGithub />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/public/Resume_Tanya.pdf" // Put this file in /public/
            download
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Right: Animated Name + About Me */}
        <div className="text-gray-800 dark:text-gray-200 space-y-6">
          {/* Animated Intro */}
          <div className="text-3xl md:text-5xl font-extrabold h-20 flex items-center">
            <span className="text-black mr-3">I am</span>
            <span>
              <Typewriter
                options={{
                  strings: [
                    '<span class="text-blue-600 dark:text-blue-400">Tanya Shree.</span>',
                    '<span class="text-purple-600 dark:text-purple-400">a passionate Software Engineer.</span>',
                    '<span class="text-emerald-600 dark:text-emerald-400">a passionate AI Engineer.</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </div>

          {/* About Heading */}
          <h2 className="text-xl font-serif font-semibold text-black dark:text-white mt-4">
            About Me
          </h2>

          {/* About Content */}
          <p>
            I’m a passionate and versatile developer with strong skills in full-stack web development,
            AI/ML technologies, and modern frontend frameworks like React and Tailwind CSS.
            I’ve worked on real-world applications during my work tenure at Softintra and contributed to open-source projects.
          </p>
          <p>
            With a solid academic foundation (MCA, BCA) and certifications in Data Analytics, Prompt Engineering, and Generative AI,
            I aim to build meaningful digital solutions while continuously learning and evolving.
          </p>
        </div>
      </div>
    </section>
  )
}
