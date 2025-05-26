import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Users, Code, BookOpen, Briefcase, GraduationCap, ChevronDown, Star, Calendar, Trophy, Zap } from 'lucide-react';

const ResumeWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const roles = ['AI/ML Engineer', 'Full Stack Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Typing effect for hero section
  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];
    let index = 0;
    
    const typeText = () => {
      if (index <= currentRole.length) {
        setTypedText(currentRole.substring(0, index));
        index++;
        timeout = setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    };
    
    typeText();
    return () => clearTimeout(timeout);
  }, [currentRoleIndex]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Todo Summary Assistant",
      tech: ["React", "Node.js", "LLM API", "Slack", "PostgreSQL"],
      date: "May 2025",
      description: "Built a full-stack app to manage to-dos, summarize pending tasks using Cohere LLM, and send summaries to Slack with one click.",
      type: "Full Stack",
      features: ["Real-time sync", "AI-powered summaries", "Slack integration"],
      status: "Featured",
      github: "#"
    },
    {
      title: "AskMyPDF",
      tech: ["LLaMA", "PyTorch", "Python", "Transformers"],
      date: "April 2025",
      description: "A lightweight local app to interact with PDF documents using a locally hosted LLaMA-based model.",
      type: "AI/ML",
      features: ["Local processing", "PDF parsing", "Natural language queries"],
      status: "Popular",
      github: "#"
    },
    {
      title: "Business Website",
      tech: ["React.js", "Node.js", "Tailwind", "Vercel"],
      date: "April 2025",
      description: "A beautiful website with animations using tailwind, react and node fully responsive.",
      type: "Web Development",
      features: ["Responsive design", "Modern animations", "Fast deployment"],
      status: "Live",
      github: "#"
    },
    {
      title: "AirControl",
      tech: ["PyQt5", "OpenCV", "MediaPipe", "NumPy"],
      date: "June 2024",
      description: "A hand-gesture based virtual sketch application using OpenCV, MediaPipe, and PyQt5, enabling touchless interaction and drawing.",
      type: "Computer Vision",
      features: ["Hand tracking", "Gesture recognition", "Real-time drawing"],
      status: "Innovative",
      github: "#"
    },
    {
      title: "Campus DB",
      tech: ["JavaScript", "PHP", "MySQL", "XAMPP"],
      date: "January 2024",
      description: "Built a web-based college database system with PHP, MySQL, and JS to manage faculty salaries, course assignments, and student batches.",
      type: "Database Management",
      features: ["Multi-user access", "Data analytics", "Admin dashboard"],
      status: "Completed",
      github: "#"
    }
  ];

  const skills = {
    "Programming Languages": {
      skills: ["Python", "JavaScript", "Java", "SQL", "HTML", "CSS"],
      icon: Code,
      color: "blue"
    },
    "Frontend Development": {
      skills: ["React.js", "Node.js", "Tailwind CSS", "RESTful APIs"],
      icon: Award,
      color: "purple"
    },
    "AI/ML Technologies": {
      skills: ["PyTorch", "Hugging Face", "LangChain", "FAISS", "Generative AI", "LLMs", "NLP", "RAG"],
      icon: Zap,
      color: "green"
    },
    "Backend & Database": {
      skills: ["Express.js", "PostgreSQL", "MySQL", "FastAPI", "JWT"],
      icon: Briefcase,
      color: "orange"
    },
    "DevOps & Tools": {
      skills: ["Docker", "Git/GitHub", "CI/CD", "Vercel", "VS Code", "Jupyter Notebook"],
      icon: Trophy,
      color: "pink"
    }
  };

  const achievements = [
    { icon: Trophy, title: "Hackathon Winner", subtitle: "College Innovation Challenge 2024" },
    { icon: Users, title: "IEEE Member", subtitle: "AESS Chapter - Active Participant" },
    { icon: Star, title: "Top Performer", subtitle: "8.6 CGPA in AI & ML Engineering" },
    { icon: Award, title: "Multiple Certifications", subtitle: "Full Stack & AI/ML Technologies" }
  ];

  const certifications = [
    "Full Stack Development", "React Native", "Artificial Intelligence", 
    "Machine Learning", "Python", "Java", "HTML", "PostMan APIs"
  ];

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Melson Dsouza
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 relative group ${
                    activeSection === section ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full ${activeSection === section ? 'w-full' : ''}`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-700"
              >
                <div className="space-y-1">
                  <div className="w-5 h-0.5 bg-current"></div>
                  <div className="w-5 h-0.5 bg-current"></div>
                  <div className="w-5 h-0.5 bg-current"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize text-left py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  Melson Douza
                </span>
              </h1>
              <div className="text-2xl md:text-3xl mb-8 h-12">
                <span className="text-gray-300">{typedText}</span>
                <span className="animate-pulse">|</span>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-300">
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <MapPin size={20} className="text-blue-600" />
                  <span>Mangalore, Karnataka</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Phone size={20} className="text-green-600" />
                  <span>+91-9108176912</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <a href="mailto:dsouzamelson9@gmail.com" className="btn-primary group flex items-center justify-center">
                  <Mail size={20} />
                  <span>-Email Me</span>
                 </a>
                <a href="https://github.com/Melaonn" target="_blank" rel="noopener noreferrer" className="btn-secondary group flex items-center justify-center">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/melson-dsouza" target="_blank" rel="noopener noreferrer" className="btn-secondary group flex items-center justify-center">
                  <Linkedin size={20} />
                  <span>- LinkedIn</span>
                </a>
              </div>

              {/* Scroll Down Indicator */}
              <div className="animate-bounce">
                <ChevronDown size={32} className="mx-auto text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-xl leading-relaxed">
                I'm a passionate <span className="text-blue-600 font-semibold">AI/ML Engineer</span> and <span className="text-purple-600 font-semibold">Full Stack Developer</span> currently pursuing B.E in Artificial Intelligence and Machine Learning at PA College of Engineering with a CGPA of 8.6.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                With expertise in modern web technologies and cutting-edge AI/ML frameworks, I love building innovative solutions that bridge the gap between artificial intelligence and practical applications. My journey combines technical excellence with creative problem-solving.
              </p>
              
              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group">
                    <div className="card hover:scale-105 transition-all duration-300 text-center">
                      <achievement.icon className="mx-auto mb-3 text-blue-600 group-hover:text-purple-600 transition-colors" size={28} />
                      <div className="font-semibold text-sm">{achievement.title}</div>
                      <div className="text-xs text-gray-400 mt-1">{achievement.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-400 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="card-premium group">
                <GraduationCap className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors" size={40} />
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <div className="font-semibold text-lg">PA College of Engineering</div>
                    <div className="text-blue-400 font-medium">B.E in AI & ML • CGPA: 8.6</div>
                    <div className="text-sm text-gray-500 flex items-center mt-2">
                      <Calendar size={14} className="mr-2" />
                      2021 - 2025
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <div className="font-semibold text-lg">St Aloysius Pre University</div>
                    <div className="text-purple-400 font-medium">Computer Science • 75%</div>
                    <div className="text-sm text-gray-500 flex items-center mt-2">
                      <Calendar size={14} className="mr-2" />
                      2020 - 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</h2>
          <div className={`card-premium max-w-5xl mx-auto transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Machine Learning Intern</h3>
                    <p className="text-blue-600 font-medium text-lg">Rooman Technologies</p>
                  </div>
                  <div className="lg:text-right mt-2 lg:mt-0">
                    <div className="text-gray-400 font-medium">Dec 2024 - May 2025</div>
                    <div className="text-sm text-gray-500 flex items-center lg:justify-end">
                      <MapPin size={14} className="mr-1" />
                      Mangalore, India
                    </div>
                  </div>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Worked on Real-Time Language Translation systems using Neural Machine Translation architectures</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Collaborated with a team to integrate the model into a basic interface for real-time text input and translation output</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Implemented and fine-tuned NMT models using Python and TensorFlow, working with attention mechanisms and encoder-decoder architectures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`card-project group transition-all duration-700 delay-${index * 100} ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`status-badge status-${project.type.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.status}
                  </div>
                  <a href={project.github} className="text-gray-400 hover:text-blue-600 transition-colors group-hover:scale-110 transform">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features - Fixed readability */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-500 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs bg-gray-700/80 text-gray-200 border border-gray-600/50 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 mt-auto">
                  <div className="text-xs text-gray-500 flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {project.date}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs font-mono bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} className={`card-skill group transition-all duration-700 delay-${index * 100} ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r from-${data.color}-500 to-${data.color}-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <data.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-200">{category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {data.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-pill group-hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className={`card-premium transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <BookOpen className="mx-auto mb-4 text-green-600" size={40} />
              <h3 className="text-3xl font-semibold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card group">
                  <Award className="mx-auto mb-3 text-green-600 group-hover:text-blue-600 transition-colors" size={24} />
                  <div className="text-sm font-medium text-center">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-xl mb-16 text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, and collaborations that can make a real impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:dsouzamelson9@gmail.com" className="contact-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Email</h3>
              <p className="text-gray-400">dsouzamelson9@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/melson-dsouza" target="_blank" rel="noopener noreferrer" className="contact-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="text-white" size={32} />
              </div>
              <h3 className="font-semibold mb-2 text-lg">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>
            <a href="https://github.com/Melaonn" target="_blank" rel="noopener noreferrer" className="contact-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github className="text-white" size={32} />
              </div>
              <h3 className="font-semibold mb-2 text-lg">GitHub</h3>
              <p className="text-gray-400">View my projects</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Melson Dsouza
            </div>
            <p className="text-gray-400 mb-6">
              © 2025 Melson Dsouza. Built with React & Tailwind CSS with ❤️
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Melaonn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/melson-dsouza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:dsouzamelson9@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .btn-primary {
          @apply relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl;
        }
        .btn-secondary {
          @apply inline-flex items-center space-x-2 px-8 py-4 border-2 border-gray-600 rounded-xl hover:border-blue-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-gray-800/50;
        }
        .card {
          @apply p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-800/80 border border-gray-700/50 backdrop-blur-sm;
        }
        .card-premium {
          @apply p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 border border-gray-600/50 backdrop-blur-lg;
        }
        .card-project {
          @apply p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-800/90 border border-gray-700/50 backdrop-blur-sm hover:scale-105 flex flex-col h-full;
        }
        .card-skill {
          @apply p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600/50 backdrop-blur-sm hover:scale-105;
        }
        .contact-card {
          @apply p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-800/80 border border-gray-700/50 backdrop-blur-sm hover:scale-105 block;
        }
        .cert-card {
          @apply p-4 rounded-xl bg-gradient-to-br from-green-900/20 to-green-800/20 hover:from-blue-900/20 hover:to-blue-800/20 transition-all duration-300 hover:scale-105;
        }
        .skill-pill {
          @apply px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg text-sm font-medium hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300 text-center;
        }
        .status-badge {
          @apply px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider;
        }
        .status-full-stack {
          @apply bg-gradient-to-r from-blue-900/30 to-blue-800/30 text-blue-300;
        }
        .status-ai/ml {
          @apply bg-gradient-to-r from-purple-900/30 to-purple-800/30 text-purple-300;
        }
        .status-web-development {
          @apply bg-gradient-to-r from-green-900/30 to-green-800/30 text-green-300;
        }
        .status-computer-vision {
          @apply bg-gradient-to-r from-orange-900/30 to-orange-800/30 text-orange-300;
        }
        .status-database-management {
          @apply bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300;
        }
        
        /* Animation Classes */
        .animate-fade-in {
          animation: fadeInUp 1.2s ease-out;
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* Glassmorphism effect */
        .glass {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ResumeWebsite;