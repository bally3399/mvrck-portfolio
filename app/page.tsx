"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Globe, Code, Database, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
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

  const skills = [
    "Solidity",
    "Web3.js",
    "Ethers.js",
    "Smart Contracts",
    "DeFi Protocols",
    "JavaScript",
    "TypeScript",
    "React",
    "Java",
    "Spring Boot",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "JWT Authentication",
    "Blockchain",
    "Ethereum",
    "Hardhat",
  ]

  const featuredProjects = [
    {
      title: "DeFi Lending Protocol",
      description:
          "A decentralized lending platform built on Ethereum with smart contracts for automated lending, borrowing, and yield farming. Features include collateral management, liquidation mechanisms, and governance tokens.",
      technologies: ["Solidity", "React", "Web3.js", "Hardhat", "OpenZeppelin"],
      github: "https://github.com/bally3399/defi-lending-protocol",
      live: "https://defi-lending-platform.vercel.app/",
      image: "/project.png",
      category: "Blockchain",
    },
    {
      title: "NFT Marketplace",
      description:
          "A full-stack NFT marketplace with smart contract integration for minting, buying, and selling NFTs. Built with React frontend and Solidity smart contracts deployed on Ethereum testnet.",
      technologies: ["Solidity", "React", "Ethers.js", "IPFS", "MetaMask"],
      github: "https://github.com/bally3399/nft-marketplace",
      live: "https://nft-marketplace-dapp.vercel.app/",
      image: "/project.png",
      category: "Blockchain",
    },
    {
      title: "Quagga - Construction Services Platform",
      description:
          "A cutting-edge full-stack application designed to bridge the gap between construction services and client satisfaction. Built with modern technologies to streamline interactions and enhance efficiency.",
      technologies: ["React", "Spring Boot", "MongoDB", "JWT"],
      github: "https://quagga-inky.vercel.app/",
      live: "https://quagga-inky.vercel.app/",
      image: "/project.png",
      category: "Full-Stack",
    },
    {
      title: "Hotel Management System",
      description:
          "A comprehensive hotel management system with room browsing, booking management, and guest tracking. Features RESTful APIs with Spring Boot backend and responsive React frontend.",
      technologies: ["React", "Spring Boot", "MySQL", "Spring Data JPA"],
      github: "https://hotel-booking-two-sage.vercel.app/",
      live: "https://hotel-booking-two-sage.vercel.app/",
      image: "/project.png",
      category: "Full-Stack",
    },
    {
      title: "Admin Dashboard SaaS",
      description:
          "A modern admin dashboard for SaaS platforms with JWT authentication, role-based access control, and responsive design using Material UI and Tailwind CSS.",
      technologies: ["React", "Spring Boot", "MongoDB", "Material UI", "Tailwind CSS"],
      github: "https://admin-dashboard-beige-xi-12.vercel.app/",
      live: "https://admin-dashboard-beige-xi-12.vercel.app/",
      image: "/project.png",
      category: "Full-Stack",
    },
    {
      title: "Quiz App",
      description:
          "A robust backend system for QUiz Application built with Spring Boot, featuring comprehensive quiz.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
      github: "https://github.com/meshackyaro/quiz-app.git",
      live: "#",
      image: "/project.png",
      category: "Backend",
    },
    {
      title: "Media Streaming App",
      description:
          "A robust backend system for Media Streaming App built with Spring Boot.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
      github: "https://github.com/meshackyaro/media-streaming-app.git",
      live: "#",
      image: "/project.png",
      category: "Backend",
    },
  ]

  const projectCategories = [
    {
      title: "Blockchain Applications",
      count: 4,
      icon: <Layers size={24} />,
      description: "Smart contracts, DeFi protocols, and Web3 applications",
    },
    {
      title: "Full-Stack Applications",
      count: 3,
      icon: <Code size={24} />,
      description: "Complete web applications with frontend and backend",
    },
    {
      title: "Backend Systems",
      count: 6,
      icon: <Database size={24} />,
      description: "Robust server-side applications and APIs",
    },
  ]

  return (
      <div className="min-h-screen bg-black text-white">
        <header className="header">
          <h1 className="logo">Mvrck</h1>
        </header>

        <main className="main">
          <div className="container">
            <div id="home" className="hero-section">
              <div className="hero-content">
                <div className="hero-text">
                  <h2 className="hero-title">
                    Blockchain/Smart Contract
                    <br />
                    Developer.
                  </h2>

                  <p className="hero-description">
                    I'm a blockchain developer based in Lagos, Nigeria, specializing in smart contract development, DeFi
                    protocols, and full-stack Web3 applications. I build decentralized solutions that bridge traditional
                    web development with cutting-edge blockchain technology.
                  </p>
                </div>

                <div className="hero-stats">
                  <div>
                    <p className="stat-text">
                      Expert in Solidity smart contracts, Web3 integration, and decentralized application development with
                      modern frontend frameworks.
                    </p>
                  </div>
                  <div>
                    <p className="stat-text">
                      Over two years of experience building innovative blockchain solutions, DeFi protocols, and
                      full-stack applications across Web2 and Web3 ecosystems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hero-image">
                <div className="profile-image">
                  <Image
                      src="/mvrck.jpg"
                      alt="Meshack Yaro - Blockchain Developer"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center top" }}
                  />
                </div>
              </div>
            </div>

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

            <div className="bottom-sections">
              <div className="section">
                <h3 className="section-title">Blockchain Development</h3>
                <p className="section-description">
                  My journey into blockchain development began in 2023, driven by fascination with decentralized systems
                  and smart contract technology. I specialize in Solidity development, creating secure and efficient smart
                  contracts for DeFi protocols, NFT marketplaces, and decentralized applications. I follow industry best
                  practices including comprehensive testing, security audits, and gas optimization to ensure robust
                  blockchain solutions.
                </p>
              </div>

              <div className="section">
                <h3 className="section-title">Full-Stack Engineering</h3>
                <p className="section-description">
                  I bridge the gap between traditional web development and blockchain technology, building seamless Web3
                  experiences with React, Next.js, and modern backend frameworks. My expertise spans from smart contract
                  integration with Web3.js and Ethers.js to building scalable APIs with Spring Boot and Python. I create
                  user-friendly interfaces that make complex blockchain interactions accessible to everyday users.
                </p>
              </div>
            </div>

            <section id="skills" className="skills-section">
              <div className="skills-container">
                <h2 className="skills-title">Skills & Technologies</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                      <div key={skill} className="skill-item">
                        <span className="skill-badge">{skill}</span>
                      </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="projects" className="projects-section">
              <div className="projects-container">
                <h2 className="projects-title">Featured Projects</h2>
                <p className="projects-subtitle">What I Have Built</p>
                <div className="projects-grid">
                  {featuredProjects.map((project, index) => (
                      <div key={project.title} className="project-card">
                        <div className="project-image">
                          <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                          />
                          <div className="project-category">{project.category}</div>
                        </div>
                        <div className="project-content">
                          <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-links">
                              <Link href={project.github} target="_blank" className="project-link">
                                <Github className="h-4 w-4" />
                              </Link>
                              {project.live !== "#" && (
                                  <Link href={project.live} target="_blank" className="project-link">
                                    <Globe className="h-4 w-4" />
                                  </Link>
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
                    + More projects including Smart Contract audits, DeFi yield farming protocols, DAO governance systems,
                    and additional Web3 applications available on GitHub
                  </p>
                  <Link
                      href="https://github.com/meshackyaro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                  >
                    <Github size={20} />
                    View All Projects on GitHub
                  </Link>
                </div>
              </div>
            </section>

            <section id="contact" className="contact-section">
              <div className="contact-container">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">
                  I'm always interested in hearing about new blockchain opportunities, DeFi projects, and innovative Web3
                  solutions. Let's connect and build the future of decentralized technology together!
                </p>
                <div className="contact-buttons">
                  <a href="mailto:yaromeshack@gmail.com" className="contact-btn primary">
                    <Mail className="h-4 w-4" />
                    Write me
                  </a>
                  <a href="https://www.linkedin.com/in/meshackyaro" className="contact-btn secondary">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <p className="footer-text">© Meshack Yaro - Blockchain Developer</p>
          </div>
        </footer>
      </div>
  )
}
