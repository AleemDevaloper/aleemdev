import { useState } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import "../assets/Styles/Pages/project.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import bg3 from "../assets/images/bg/bg (3).jpg";
import web from "../assets/images/About/web.png";
import web1 from "../assets/images/About/web1.png";
import web2 from "../assets/images/About/web2.png";
import web3 from "../assets/images/About/web3.png";
import web4 from "../assets/images/About/web4.png";
import web5 from "../assets/images/About/web5.png";
import web6 from "../assets/images/About/web6.png";
import web7 from "../assets/images/About/web7.png";
import web8 from "../assets/images/About/web8.png";
import web9 from "../assets/images/About/web9.png";
import web10 from "../assets/images/About/web10.png";
import web11 from "../assets/images/About/web11.png";

const projects = [
  {
    id: "01",
    title: "Optima",
    category: "Web",
    type: "Business website",
    year: "2024",
    description:
      "A clear, confident company site built to explain services and mission without getting in the way. The focus was structure, rhythm, and an easy path to contact.",
    tech: ["HTML", "SCSS", "jQuery", "Bootstrap"],
    image: web,
    link: "https://aleemdevaloper.github.io/optima.github.com/optima/",
  },
  {
    id: "02",
    title: "The Dig Site",
    category: "Web",
    type: "Editorial website",
    year: "2024",
    description:
      "An editorial layout for a company with a story to tell. Strong typography, layered sections, and subtle motion turn a simple brochure into something worth scrolling.",
    tech: ["HTML", "SCSS", "jQuery", "Bootstrap"],
    image: web1,
    link: "https://aleemdevaloper.github.io/dig.github.com/",
  },
  {
    id: "03",
    title: "Tech Shinners",
    category: "Web",
    type: "Technology brand",
    year: "2024",
    description:
      "A React-powered marketing site for a technology brand. Built around reusable sections, crisp interaction states, and a fast, responsive front end.",
    tech: ["HTML", "SCSS", "React", "Bootstrap"],
    image: web2,
    link: "https://aleemdevaloper.github.io/tech-shinners.github.io/",
  },
  {
    id: "04",
    title: "Auto Drone",
    category: "Web",
    type: "Product showcase",
    year: "2024",
    description:
      "A product-led site for a drone company. The visual language leans into precision and motion while keeping the product and the call to action front and centre.",
    tech: ["HTML", "SCSS", "React", "Bootstrap"],
    image: web3,
    link: "https://aleemdevaloper.github.io/Drone/",
  },
  {
    id: "05",
    title: "Town Tor",
    category: "Web",
    type: "Real estate platform",
    year: "2023",
    description:
      "A multi-page real estate experience with buying, selling, FAQ, login, and sign-up flows. One of my earliest large builds and still one of the most complete.",
    tech: ["HTML", "CSS", "JavaScript", "Carousels", "Bootstrap"],
    image: web4,
    link: "https://aleemdevaloper.github.io/real-state.github.com/",
  },
  {
    id: "06",
    title: "Rate My Teacher",
    category: "Web",
    type: "Review platform",
    year: "2023",
    description:
      "My first Fiverr project: a friendly review site for teachers. Simple, approachable, and built to make a lot of information feel light.",
    tech: ["HTML", "SCSS", "JavaScript", "Bootstrap"],
    image: web5,
    link: "https://aleemdevaloper.github.io/rmt.github.com/",
  },
  {
    id: "07",
    title: "Italian Food",
    category: "Web",
    type: "Restaurant website",
    year: "2023",
    description:
      "A single-page restaurant site with a warm visual tone. All the details a local business needs, arranged into one smooth scrolling experience.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: web6,
    link: "https://aleemdevaloper.github.io/italian-food.github.com/",
  },
  {
    id: "08",
    title: "Portfolio",
    category: "Web",
    type: "Client portfolio",
    year: "2023",
    description:
      "A clean personal portfolio built for a client. The brief was simple: let the work lead, keep the navigation obvious, and make it feel personal.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: web7,
    link: "https://aleemdevaloper.github.io/project.github.io/",
  },
  {
    id: "09",
    title: "Slider Study",
    category: "Web",
    type: "Interaction experiment",
    year: "2023",
    description:
      "A practice build that pushed me into custom slider logic. Small project, useful lessons — and a reminder that the tricky details are usually worth it.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: web8,
    link: "https://aleemdevaloper.github.io/slider.github.io/",
  },
  {
    id: "10",
    title: "Task Manager",
    category: "Desktop",
    type: "Electron application",
    year: "2024",
    description:
      "A daily task app with timed reminders and desktop notifications. Built with Electron and React to feel like a native utility rather than another browser tab.",
    tech: ["HTML", "SCSS", "Electron", "React", "Bootstrap"],
    image: web9,
    link: "https://github.com/AleemDevaloper/todo-app/",
  },
  {
    id: "11",
    title: "JARVIS",
    category: "Desktop",
    type: "AI desktop assistant",
    year: "2025",
    description:
      "A voice-driven desktop assistant with its own workspace, system details, and app-launching workflows. An exploration of how an AI layer can sit on top of the operating system.",
    tech: ["HTML", "SCSS", "Electron", "OpenAI API"],
    image: web10,
    link: "",
  },
  {
    id: "12",
    title: "Gym Companion",
    category: "Mobile",
    type: "React Native app",
    year: "2025",
    description:
      "A mobile fitness companion with an AI coach, workout tracking, and lifestyle guidance. Designed to make consistent progress feel achievable.",
    tech: ["TypeScript", "React Native", "MongoDB", "Express"],
    image: web11,
    link: "",
  },
];

const categories = ["All", "Web", "Desktop", "Mobile"];
const projectStats = [
  { value: String(projects.length).padStart(2, "0"), label: "Projects" },
  {
    value: String(projects.filter((project) => project.link).length).padStart(2, "0"),
    label: "Project links",
  },
  { value: String(categories.length - 1).padStart(2, "0"), label: "Project types" },
];

function Project() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const scrollToProjects = () => {
    const section = document.getElementById("selected-projects");
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="projects-page">
      <Header />

      <Parallax bgImage={bg3} strength={220} className="projects-hero">
        <div className="projects-hero__overlay" aria-hidden="true" />
        <div className="container projects-hero__inner">
          <div className="projects-hero__grid">
            <div className="projects-hero__content">
              <Reveal>
                <span className="eyebrow">Selected projects · Web &amp; software</span>
              </Reveal>
              <Reveal delay={80}>
                <h1>
                  Work that
                  <br />
                  <span>works.</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  A selection of websites, desktop tools, and mobile concepts.
                  Explore the work, filter by platform, and open a project when
                  a link is available.
                </p>
              </Reveal>
              <Reveal delay={190}>
                <div className="projects-hero__actions">
                  <button type="button" className="btn-lime" onClick={scrollToProjects}>
                    Explore projects <span aria-hidden="true">↓</span>
                  </button>
                  <Link to="/" state={{ scrollTo: "contact" }} className="btn-ghost">
                    Start a project <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="projects-hero__stats">
                  {projectStats.map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={160} className="projects-hero__visual reveal--scale">
              <figure className="projects-hero__preview">
                <img
                  src={projects[0].image}
                  alt={`${projects[0].title} business website preview`}
                />
                <span className="projects-hero__preview-label">Featured work · 01</span>
                <figcaption>
                  <strong>{projects[0].title}</strong>
                  <span>{projects[0].type}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Parallax>

      <section className="section projects-work" id="selected-projects">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <span className="eyebrow">Selected projects</span>
              <h2 className="section-title">
                Built with <span>intent.</span>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="project-filters" role="tablist" aria-label="Project categories">
                {categories.map((category) => {
                  const count =
                    category === "All"
                      ? projects.length
                      : projects.filter((project) => project.category === category)
                          .length;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={activeCategory === category}
                      className={activeCategory === category ? "is-active" : ""}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                      <span>{String(count).padStart(2, "0")}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <Reveal
                as="article"
                key={`${activeCategory}-${project.id}`}
                delay={(index % 4) * 60}
                className="project-card"
              >
                <div className="project-card__media">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  <span className="project-card__number">{project.id}</span>
                  <span className="project-card__category">{project.category}</span>
                </div>

                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-card__tech">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  {project.link ? (
                    <a
                      className="link-arrow"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-card__soon">
                      Case study coming soon
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Project;
