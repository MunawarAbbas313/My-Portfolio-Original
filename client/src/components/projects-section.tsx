export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Travel Management Portal",
      description: "Comprehensive travel agency management system with authentication and booking features.",
      icon: "fas fa-plane",
      gradient: "from-primary to-accent",
      techStack: ["React", "Firebase", "Node.js"],
      features: [
        "Employee authentication system",
        "Booking management & tracking",
        "Comprehensive reporting dashboard",
        "Multi-company support"
      ],
      liveDemo: "https://ostravel-portal-orignal.vercel.app/login",
      viewCode: "https://github.com/MunawarAbbas313/OS-Travel-Portal"
    },
    {
      id: 2,
      title: "Khoshnagar Resort Murree",
      description: "Resort website for online booking, information, and tourism showcase.",
      icon: "fas fa-hotel",
      gradient: "from-secondary to-primary",
      techStack: ["React", "Tailwind", "Vercel"],
      features: [
        "Resort information",
        "Photo gallery",
        "Booking inquiry",
        "Responsive design"
      ],
      liveDemo: "https://khosarnagarwebiste.vercel.app/",
      viewCode: "" // add repo if available
    },
    {
      id: 3,
      title: "Movie Rating Website",
      description: "Movie search and rating app built with OMDb API integration.",
      icon: "fas fa-film",
      gradient: "from-accent to-secondary",
      techStack: ["React", "OMDb API"],
      features: [
        "Movie search",
        "Detailed movie view",
        "Add to favorites",
        "Dark/Light theme"
      ],
      liveDemo: "https://munawarabbas313.github.io/IMBDMOVIESITE/",
      viewCode: "https://github.com/MunawarAbbas313/IMBDMOVIESITE"
    },
    {
      id: 4,
      title: "Typing Speed Test",
      description: "Interactive typing test website with personalized results and difficulty levels.",
      icon: "fas fa-keyboard",
      gradient: "from-primary to-accent",
      techStack: ["React", "LocalStorage"],
      features: [
        "Difficulty selection",
        "Personalized results",
        "Real-time typing speed calculation",
        "Responsive design"
      ],
      liveDemo: "https://munawarabbas313.github.io/TypingtestWeb/",
      viewCode: "https://github.com/MunawarAbbas313/TypingtestWeb"
    },
     {
      id: 5,
      title: "Shope Mate ",
      description: "An E-commerce store with real time auth and apis working perfeclty .",
      icon: "fa-solid fa-cart-shopping",
      gradient: "from-primary to-accent",
      techStack: ["React", "LocalStorage", "redux", "firebase"],
      features: [
        "Real time Authentication",
        "Real time local storage usage ",
        " Add to Cart",
        "Remove from Cart",
        "State managemnt by Redux",
      ],
      liveDemo: "https://shope-mate-orignal-4aru.vercel.app/",
      viewCode: "https://github.com/MunawarAbbas313/ShopeMateOrignal"
    },
    // keep your other demo/filler projects here if you want
  ];

  const handleLiveDemo = (url: string) => {
    if (url) window.open(url, "_blank");
  };

  const handleViewCode = (url: string) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text"
            data-testid="projects-title"
          >
            Featured Projects
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="projects-description"
          >
            A collection of real-world applications showcasing my expertise in
            modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card h-80"
              data-testid={`project-card-${project.id}`}
            >
              <div className="project-card-inner">
                {/* FRONT */}
                <div className="project-card-front glass-card p-6 h-full">
                  <div
                    className={`h-32 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center`}
                  >
                    <i className={`${project.icon} text-4xl text-white`}></i>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    data-testid={`project-title-${project.id}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-muted-foreground text-sm mb-4"
                    data-testid={`project-description-${project.id}`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded font-mono"
                        data-testid={`project-tech-${project.id}-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BACK */}
                <div
                  className={`project-card-back bg-gradient-to-br ${project.gradient} p-6 h-full flex flex-col justify-center`}
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="text-white/90 text-sm space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        data-testid={`project-feature-${project.id}-${index}`}
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    {project.liveDemo && (
                      <button
                        onClick={() => handleLiveDemo(project.liveDemo!)}
                        className="w-full bg-white text-primary py-2 rounded font-semibold hover:bg-white/90 transition-colors"
                        data-testid={`button-live-demo-${project.id}`}
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>Live
                        Demo
                      </button>
                    )}
                    {project.viewCode && (
                      <button
                        onClick={() => handleViewCode(project.viewCode!)}
                        className="w-full bg-white/20 text-white py-2 rounded font-semibold hover:bg-white/30 transition-colors"
                        data-testid={`button-view-code-${project.id}`}
                      >
                        <i className="fab fa-github mr-2"></i>View Code
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
