'use client'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">
          Contact Me
        </h2>

        {/* Message */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          I'd love to hear from you! Feel free to reach out through email or connect with me on GitHub or LinkedIn.
        </p>

        {/* Contact Details */}
        <div className="space-y-4 text-center text-gray-800 dark:text-white">
          {/* Email */}
          <a
            href="mailto:itstanyashree@gmail.com"
            className="inline-flex items-center gap-3 justify-center text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaEnvelope className="text-xl" />
            itstanyashree@gmail.com
          </a>

          {/* GitHub */}
          <div className="mt-4 flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/tanya02-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-300"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tanya-shree0209"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 dark:hover:text-blue-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
