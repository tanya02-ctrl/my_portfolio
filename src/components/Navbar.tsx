'use client'
import { useContext, useState } from 'react'
import { ThemeContext } from '../theme/ThemeContext'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#about')

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { label: 'About', link: '#about' },
    { label: 'Skills', link: '#skills' },
    { label: 'Certifications', link: '#certifications' },
    { label: 'Experience', link: '#experience' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
  ]

  const handleNavClick = (link: string) => {
    setActiveLink(link)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Title */}
        <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
          Tanya Shree
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200 font-medium">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              onClick={() => handleNavClick(item.link)}
              className={`transition-colors ${
                activeLink === item.link
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Theme + Menu Icon */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-xl text-gray-800 dark:text-gray-200">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              onClick={() => handleNavClick(item.link)}
              className={`block font-medium transition-colors ${
                activeLink === item.link
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
