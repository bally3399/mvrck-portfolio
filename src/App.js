"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Globe, Code, Database, Layers } from "lucide-react"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "HTML/CSS",
    "Tailwind CSS",
    "Material UI",
    "Git",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "JWT Authentication",
  ]

  const featuredProjects = [
    {
      title: "Quagga - Construction Services Platform",
      description:
        "A cutting-edge full-stack application designed to bridge the gap between construction services and client satisfaction. Built with modern technologies to streamline interactions and enhance efficiency.",
      technologies: ["React", "Spring Boot", "MongoDB", "JWT"],
      github: "https://quagga-inky.vercel.app/",
      live: "https://quagga-inky.vercel.app/",
      image: "https://via.placeholder.com/300x200/1f2937/ffffff?text=Quagga+Platform",
      category: "Full-Stack",
    },
    {
      title: "Hotel Management System",
      description:
        "A comprehensive hotel management system with room browsing, booking management, and guest tracking. Features RESTful APIs with Spring Boot backend and responsive React frontend.",
      technologies: ["React", "Spring Boot", "MySQL", "Spring Data JPA"],
      github: "https://hotel-booking-two-sage.vercel.app/",
      live: "https://hotel-booking-two-sage.vercel.app/",
      image: "https://via.placeholder.com/300x200/1f2937/ffffff?text=Hotel+Management",
      category: "Full-Stack",
    },
    {
      title: "Admin Dashboard SaaS",
      description:
        "A modern admin dashboard for SaaS platforms with JWT authentication, role-based access control, and responsive design using Material UI and Tailwind CSS.",
      technologies: ["React", "Spring Boot", "MongoDB", "Material UI", "Tailwind CSS"],
      github: "https://admin-dashboard-beige-xi-12.vercel.app/",
      live: "https://admin-dashboard-beige-xi-12.vercel.app/",
      image: "https://via.placeholder.com/300x200/1f2937/ffffff?text=Admin+Dashboard",
      category: "Full-Stack",
    },
    {
      title: "Event Booking System",
      description:
        "A robust backend system for event booking and management built with Spring Boot, featuring comprehensive event management capabilities.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/bally3399/EventBookingApp.git",
      live: "#",
      image: "https://via.placeholder.com/300x200/1f2937/ffffff?text=Event+Booking",
      category: "Backend",
    },
    {
      title: "Election Management System",
      description:
        "A secure election management system built with Spring Boot, designed to handle voting processes and election administration efficiently.",
      technologies: ["Java", "Spring Boot", "MySQL", "Security"],
      github: "https://github.com/bally3399/ElectionManagementSystem.git",
      live: "#",
      image: "https://via.placeholder.com/300x200/1f2937/ffffff?text=Election+System",
      category: "Backend",
    },
    {
      title: "Movie App",
      description:
        "A modern movie browsing application built with React, featuring movie search, details, and user-friendly interface for movie enthusiasts.",
      technologies: ["React", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/bally3399/movieApp.git",
      live: "#",
      image: "https://via.placeholder.com/300x200/1f2937/ffffff?text=Movie+App",
      category: "Frontend",
    },
  ]

  const projectCategories = [
    {
      title: "Full-Stack Applications",
      count: 3,
      icon: <Layers size={24} />,
      description: "Complete web applications with frontend and backend",
    },
    {
      title: "Backend Systems",
      count: 6,
      icon: <Database size={24} />,
      description: "Robust server-side applications and APIs",
    },
    {
      title: "Frontend Projects",
      count: 2,
      icon: <Code size={24} />,
      description: "Interactive user interfaces and web applications",
    },
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Bimbim.</h1>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Hero Section */}
          <div id="home" className="hero-section">
            {/* Left Column */}
            <div className="hero-content">
              {/* Main Heading */}
              <div className="hero-text">
                <h2 className="hero-title">
                  Software
                  <br />
                  Engineer.
                </h2>

                <p className="hero-description">
                  I'm a software engineer based in Lagos, Nigeria, skilled in frontend and backend development. I build
                  innovative solutions that ensure smooth and impactful digital experiences.
                </p>
              </div>

              {/* Two Column Description */}
              <div className="hero-stats">
                <div>
                  <p className="stat-text">
                    Highly skilled at progressive enhancement, modern web technologies & full-stack development.
                  </p>
                </div>
                <div>
                  <p className="stat-text">
                    Over two years of experience building innovative products and solutions across various domains.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="hero-image">
              <div className="image-placeholder"></div>
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="bottom-sections">
            {/* Development Section */}
            <div className="section">
              <h3 className="section-title">Development</h3>
              <p className="section-description">
                My journey into coding began in 2023, driven by a deep curiosity about how software powers our digital
                world. I specialize in both frontend and backend development, creating efficient, user-friendly
                applications. I follow best practices like test-driven development, ensuring clean and maintainable code
                while building innovative solutions.
              </p>
            </div>

            {/* Engineering Section */}
            <div className="section">
              <h3 className="section-title">Engineering</h3>
              <p className="section-description">
                I have hands-on experience with modern JavaScript frameworks and tools, building scalable applications
                with React, Spring Boot, and various databases. I thrive in collaborative environments, valuing teamwork
                and knowledge-sharing to deliver impactful solutions that are designed for growth – performance and user
                experience are top priorities on my radar.
              </p>
            </div>
          </div>

          {/* Project Categories */}
          <section className="categories-section">
            <div className="categories-container">
              <h2 className="categories-title">Project Categories</h2>
              <div className="categories-grid">
                {projectCategories.map((category, index) => (
                  <div key={index} className="category-card">
                    <div className="category-icon">{category.icon}</div>
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-count">{category.count} Projects</p>
                    <p className="category-description">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="skills-section">
            <div className="skills-container">
              <h2 className="skills-title">Skills & Technologies</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={skill} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="skill-badge">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="projects-section">
            <div className="projects-container">
              <h2 className="projects-title">Featured Projects</h2>
              <p className="projects-subtitle">What I Have Built</p>
              <div className="projects-grid">
                {featuredProjects.map((project, index) => (
                  <div key={project.title} className="project-card">
                    <div className="project-image">
                      <img src={project.image || "/placeholder.svg"} alt={project.title} />
                      <div className="project-category">{project.category}</div>
                    </div>
                    <div className="project-content">
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-links">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                            <Github size={16} />
                          </a>
                          {project.live !== "#" && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                              <Globe size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Projects Note */}
              <div className="more-projects">
                <p className="more-projects-text">
                  + More projects including Data Structures & Algorithms implementations, Python OOP applications, and
                  additional backend systems available on GitHub
                </p>
                <a
                  href="https://github.com/bally3399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <Github size={20} />
                  View All Projects on GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact-section">
            <div className="contact-container">
              <h2 className="contact-title">Get In Touch</h2>
              <p className="contact-description">
                I'm always interested in hearing about new opportunities and interesting projects. Let's connect and
                build something amazing together!
              </p>
              <div className="contact-buttons">
                <button
                  className="contact-btn primary"
                  onClick={() => (window.location.href = "mailto:your-email@example.com")}
                >
                  <Mail size={16} />
                  Send Email
                </button>
                <button
                  className="contact-btn secondary"
                  onClick={() => window.open("https://linkedin.com/in/your-profile", "_blank")}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 Baliqis Sulaiman Mosunmola. Built with React and CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
