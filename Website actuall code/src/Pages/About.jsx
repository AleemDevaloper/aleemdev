import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import "../assets/Styles/Pages/about-section.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import bg2 from "../assets/images/bg/bg (2).jpg";
import portrait from "../assets/images/About/img.png";

const stats = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "+", label: "Happy clients" },
];

const principles = [
  {
    number: "01",
    title: "Clarity first",
    copy: "Good design removes decisions. I start with the story and the path a visitor needs to take, then build the visuals around it.",
  },
  {
    number: "02",
    title: "Fast by default",
    copy: "Performance is part of the experience. Lightweight assets, sensible code splitting, and responsive layouts are non-negotiable.",
  },
  {
    number: "03",
    title: "Details matter",
    copy: "The last five percent — hover states, spacing, loading behaviour — is usually what makes a product feel genuinely finished.",
  },
];

const education = [
  {
    year: "2025 — 2029",
    title: "University of Management and Technology",
    place: "Lahore, Pakistan",
    course: "Bachelor of Science in Computer Science (BSCS)",
    note: "Currently studying computer science while building client work alongside my degree.",
  },
  {
    year: "2023 — 2025",
    title: "Punjab College (PGC)",
    place: "Lahore, Pakistan",
    course: "Intermediate in Computer Science (ICS)",
    note: "Where the foundation in programming, mathematics, and problem solving began.",
  },
  {
    year: "2022",
    title: "Great Learning & Udemy",
    place: "Online",
    course: "Web development & UI engineering",
    note: "Self-directed courses across HTML, CSS, Sass, Bootstrap, JavaScript, and React.",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/AleemDevaloper" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aleem-irfan-071154281/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100094860355614",
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=923087923041&text=Hi%2C%20I%20found%20you%20through%20your%20portfolio.",
  },
];

function About() {
  const scrollToProfile = () => {
    const section = document.getElementById("about-profile");
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="about-page">
      <Header />

      <Parallax bgImage={bg2} strength={200} className="about-hero">
        <div className="about-hero__overlay" aria-hidden="true" />
        <div className="container about-hero__inner">
          <div className="about-hero__grid">
            <div className="about-hero__content">
              <Reveal>
                <span className="eyebrow">About me · Lahore, Pakistan</span>
              </Reveal>
              <Reveal delay={80}>
                <h1>
                  Designer by eye.
                  <br />
                  <span>Engineer by craft.</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  I’m Muhammad Aleem, a web developer and digital product
                  designer. I turn complex ideas into clear, expressive
                  interfaces, and care about how they feel as much as how they
                  work.
                </p>
              </Reveal>
              <Reveal delay={190}>
                <div className="about-hero__actions">
                  <Link to="/" state={{ scrollTo: "contact" }} className="btn-lime">
                    Let’s work together <span aria-hidden="true">↗</span>
                  </Link>
                  <button type="button" className="btn-ghost" onClick={scrollToProfile}>
                    More about me <span aria-hidden="true">↓</span>
                  </button>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="about-hero__socials">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={160} className="about-hero__visual reveal--scale">
              <figure className="about-hero__portrait">
                <img
                  src={portrait}
                  alt="Muhammad Aleem, web developer and digital product designer"
                />
                <figcaption>
                  <strong>Muhammad Aleem</strong>
                  <span>Independent digital solutions specialist</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Parallax>

      <section className="section about-profile" id="about-profile">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <Reveal className="reveal--scale">
                <div className="about-profile__visual">
                  <div className="about-profile__frame">
                    <img src={portrait} alt="Portrait of Muhammad Aleem" />
                  </div>
                  <div className="about-profile__badge">
                    <span>Open to work</span>
                    <i aria-hidden="true" />
                  </div>
                  <div className="about-profile__caption">
                    <strong>Muhammad Aleem</strong>
                    <span>Web developer · Lahore, PK</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-7">
              <Reveal>
                <span className="eyebrow">Who I am</span>
                <h2 className="section-title">
                  Curious by nature.
                  <br />
                  <span>Practical by choice.</span>
                </h2>
              </Reveal>

              <Reveal delay={80}>
                <div className="about-profile__copy">
                  <p>
                    My journey in tech started at fourteen with my first website,
                    and I have been hooked since. Today I work across the full
                    front end — from the first sketch to the final interaction —
                    with a focus on React, modern CSS, and interactive 3D.
                  </p>
                  <p>
                    I enjoy the space where design and engineering meet: taking
                    a rough concept, asking better questions, and shaping it
                    into something that feels obvious in hindsight. I write
                    clean, maintainable code and care deeply about how a page
                    loads, responds, and ages.
                  </p>
                  <p>
                    Outside client work, I’m usually experimenting with motion,
                    shaders, or small tools that solve a problem I ran into.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="about-profile__stats">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <strong>
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      </strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="about-profile__tags">
                  {["React", "JavaScript", "SCSS", "Three.js", "Node.js", "Figma"].map(
                    (tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-principles">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <span className="eyebrow">How I work</span>
              <h2 className="section-title">
                A few things I
                <br />
                <span>refuse to skip.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="section-lead">
                Every project is different, but the standards I bring to them
                are not. These three ideas shape how I design and build.
              </p>
            </Reveal>
          </div>

          <div className="principles-grid">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.number}
                delay={index * 80}
                className="principle-card"
              >
                <span className="principle-card__number">
                  {principle.number}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-education">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <span className="eyebrow">Education</span>
              <h2 className="section-title">
                Always
                <br />
                <span>learning.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="section-lead">
                Formal study, self-directed courses, and the kind of lessons
                that only come from shipping real work.
              </p>
            </Reveal>
          </div>

          <div className="timeline">
            {education.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="timeline__item"
              >
                <span className="timeline__year">{item.year}</span>
                <div className="timeline__dot" aria-hidden="true" />
                <div className="timeline__card">
                  <h3>{item.title}</h3>
                  <span className="timeline__place">{item.place}</span>
                  <p className="timeline__course">{item.course}</p>
                  <p className="timeline__note">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight about-cta">
        <div className="container">
          <Reveal className="about-cta__inner">
            <div>
              <span className="eyebrow">Next step</span>
              <h2>Have something in mind?</h2>
            </div>
            <div className="about-cta__actions">
              <a
                href="mailto:aleemirfan672@gmail.com"
                className="btn-lime"
              >
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
              <a href="https://wa.me/923087923041" className="btn-ghost">
                WhatsApp +92 308 7923041
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
