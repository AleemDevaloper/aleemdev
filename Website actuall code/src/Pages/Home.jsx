import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/Styles/Pages/home.scss";
import "../assets/Styles/Pages/skills.scss";
import "../assets/Styles/Pages/Projects.scss";
import "../assets/Styles/Pages/contact.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import about from "../assets/images/about.jpg";
import inquiryOptima from "../assets/images/About/web.png";
import inquiryDigSite from "../assets/images/About/web1.png";
import inquiryTechShinners from "../assets/images/About/web2.png";
import inquiryDrone from "../assets/images/About/web3.png";
import icon1 from "../assets/images/call.png";
import icon2 from "../assets/images/email.png";
import sk1 from "../assets/images/skills/sk (1).png";
import sk2 from "../assets/images/skills/sk (2).png";
import sk3 from "../assets/images/skills/sk (3).png";
import sk4 from "../assets/images/skills/sk (4).png";
import sk5 from "../assets/images/skills/sk (5).png";
import sk6 from "../assets/images/skills/sk (6).png";
import sk7 from "../assets/images/skills/sk (7).png";
import sk8 from "../assets/images/skills/sk (8).png";
import sk9 from "../assets/images/skills/sk (9).png";
import sk10 from "../assets/images/skills/sk (10).png";
import sk11 from "../assets/images/skills/sk(11).png";
import sk12 from "../assets/images/skills/sk(12).png";
import sk13 from "../assets/images/skills/sk(13).png";
import sk14 from "../assets/images/skills/sk(14).png";
import sk15 from "../assets/images/skills/sk(15).png";
import sk16 from "../assets/images/skills/sk(16).jpeg";

const Scene = lazy(() => import("./Model/Secne"));
const Scene2 = lazy(() => import("./Model/Scene2"));
const Scene3 = lazy(() => import("./Model/Secne3"));
const Scene4 = lazy(() => import("./Model/Scene4"));

function useNearViewport(rootMargin = "450px 0px") {
  const ref = useRef(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setIsNear(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, isNear];
}

const skillImages = [
  sk1,
  sk2,
  sk3,
  sk4,
  sk5,
  sk6,
  sk7,
  sk8,
  sk9,
  sk10,
  sk11,
  sk12,
  sk13,
  sk14,
  sk15,
  sk16,
];

const skills = [
  "HTML5",
  "CSS3",
  "SCSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "Three.js",
  "Node.js",
  "MongoDB",
  "Electron",
  "Git",
  "Figma",
];

const services = [
  {
    number: "01",
    title: "Website Development",
    promise: "Your business deserves more than just a website.",
    copy: "Modern, responsive websites built to communicate your brand, build trust, and turn visitors into inquiries.",
    offerings: ["Business and landing pages", "Portfolio and e-commerce sites", "Custom web applications", "Redesign, optimization, and support"],
    cta: "Build my website",
  },
  {
    number: "02",
    title: "Search Engine Optimization",
    promise: "Get discovered by people searching for your services.",
    copy: "Structured SEO work to improve search visibility, attract relevant organic traffic, and support sustainable growth.",
    offerings: ["Technical SEO audits", "On-page and content optimization", "Keyword and search intent research", "Local SEO and Google Business Profile", "Site structure and reporting"],
    cta: "Improve my rankings",
  },
  {
    number: "03",
    title: "Digital Marketing",
    promise: "Turn your online presence into a growth opportunity.",
    copy: "Audience-led strategies that strengthen your digital presence and generate qualified inquiries.",
    offerings: ["Digital and social media strategy", "Content planning and publishing", "Audience research", "Lead generation and funnel optimization", "Campaign performance analysis"],
    cta: "Grow my business",
  },
  {
    number: "04",
    title: "Google Ads",
    promise: "Reach customers when they are actively searching.",
    copy: "Search and display campaigns designed to reach relevant audiences and make better use of your ad budget.",
    offerings: ["Search, display, and YouTube ads", "Keyword and competitor research", "Conversion tracking setup", "Landing page recommendations", "Campaign optimization and reporting"],
    cta: "Launch my campaign",
  },
  {
    number: "05",
    title: "Meta Ads",
    promise: "Turn attention into inquiries, customers, and sales.",
    copy: "Facebook and Instagram campaigns that connect your business with relevant audiences.",
    offerings: ["Lead, traffic, and conversion campaigns", "Retargeting strategies", "Ad creative and copy direction", "Audience testing", "Campaign optimization and reporting"],
    cta: "Scale my advertising",
  },
  {
    number: "06",
    title: "TikTok Ads",
    promise: "Meet audiences through creative, engaging advertising.",
    copy: "Creative-led TikTok campaigns for awareness, traffic, and conversion goals.",
    offerings: ["Campaign setup and audience research", "Short-form video ad concepts", "Creative direction and ad copy", "Pixel and event tracking", "Testing, optimization, and reporting"],
    cta: "Explore TikTok ads",
  },
  {
    number: "07",
    title: "Mobile App Development",
    promise: "Bring your business closer to your customers.",
    copy: "Mobile application solutions that improve access to your services and support business growth.",
    offerings: ["Android and iOS applications", "Cross-platform apps", "API and backend integration", "Authentication and user management", "Maintenance and enhancements"],
    cta: "Build my mobile app",
  },
  {
    number: "08",
    title: "Desktop Application Development",
    promise: "Software built around the way your business works.",
    copy: "Custom desktop tools that help teams manage processes, organize information, and work more efficiently.",
    offerings: ["Business and internal management systems", "Inventory and operations tools", "Data management and dashboards", "Database integration", "Existing software improvements"],
    cta: "Develop my software",
  },
  {
    number: "09",
    title: "AI Automation",
    promise: "Spend less time on repetitive work and more time on growth.",
    copy: "Practical AI-powered workflows that streamline routine tasks and connect your digital tools.",
    offerings: ["Customer support and inquiry workflows", "Lead capture and follow-up", "AI chatbots and virtual assistants", "CRM and third-party integrations", "Document workflows and API integrations"],
    cta: "Automate my business",
  },
  {
    number: "10",
    title: "Graphic Design",
    promise: "Make your brand clear, consistent, and recognizable.",
    copy: "Purposeful visual assets that help your brand communicate clearly across digital channels.",
    offerings: ["Brand identity and visual direction", "Social media graphics", "Digital marketing assets", "Presentation and promotional design", "Design updates for existing brands"],
    cta: "Strengthen my brand",
  },
  {
    number: "11",
    title: "Video Editing",
    promise: "Turn raw footage into focused, polished content.",
    copy: "Edited video content shaped for your audience, message, and publishing platform.",
    offerings: ["Short-form social videos", "Promotional and brand videos", "Pacing, transitions, and captions", "Platform-ready exports", "Revisions based on the agreed brief"],
    cta: "Plan my video",
  },
];

const advantages = [
  ["Business-focused", "Every solution starts with your goals, audience, challenges, and requirements."],
  ["Built around your needs", "Websites, applications, and campaigns are tailored to your business."],
  ["Technology meets marketing", "Development and marketing work together as one connected digital presence."],
  ["Clear communication", "Expect defined deliverables, straightforward updates, and a structured process."],
  ["Performance-minded", "Usability, technical quality, and measurable objectives guide the work."],
  ["Support as you grow", "Maintenance and optimization can continue as your business evolves."],
];

const processSteps = [
  ["01", "Discover", "We discuss your business, audience, objectives, requirements, and budget."],
  ["02", "Plan", "I define the scope, recommended solution, deliverables, and timeline."],
  ["03", "Build", "I create the agreed website, application, automation, or campaign."],
  ["04", "Test and launch", "We review the work, address issues, and prepare it for launch."],
  ["05", "Optimize and support", "Where included, I monitor performance and help improve the solution."],
];

const faqs = [
  ["What services do you provide?", "Website and application development, SEO, digital marketing, Google Ads, Meta Ads, TikTok Ads, AI automation, graphic design, and video editing."],
  ["Do you work with international clients?", "Yes. I’m available to discuss projects across markets, depending on the requirements and working arrangements."],
  ["Can you handle development and marketing together?", "Yes. Services can be delivered individually or combined into a coordinated project."],
  ["Can you build custom software for my business?", "Yes. We can scope custom applications and digital systems around your processes, users, and technical needs."],
  ["Do you offer ongoing support?", "Maintenance, optimization, and support can be arranged according to the project scope and agreed terms."],
  ["How can I get a quote?", "Send a short description of your project, objectives, and preferred timeline. I’ll review the requirements and discuss an appropriate scope."],
];

const marqueeItems = [
  "Web development",
  "SEO",
  "Digital marketing",
  "Meta ads",
  "Google ads",
  "TikTok ads",
  "Video editing",
  "Graphic design",
];

const featured = [
  {
    number: "01",
    title: "Optima",
    meta: "Business website",
    href: "https://aleemdevaloper.github.io/optima.github.com/optima/",
    image: inquiryOptima,
  },
  {
    number: "02",
    title: "The Dig Site",
    meta: "Editorial website",
    href: "https://aleemdevaloper.github.io/dig.github.com/",
    image: inquiryDigSite,
  },
  {
    number: "03",
    title: "Auto Drone",
    meta: "Product showcase",
    href: "https://aleemdevaloper.github.io/Drone/",
    image: inquiryDrone,
  },
];

const socials = [
  {
    name: "GitHub",
    handle: "@AleemDevaloper",
    href: "https://github.com/AleemDevaloper",
    label: "Code & experiments",
    scene: <Scene />,
  },
  {
    name: "Facebook",
    handle: "Muhammad Aleem",
    href: "https://www.facebook.com/profile.php?id=100094860355614",
    label: "Community & updates",
    scene: <Scene2 />,
  },
  {
    name: "Skype",
    handle: "Let’s have a call",
    href: "https://join.skype.com/invite/vFOXfP8O4wLb",
    label: "Talk in real time",
    scene: <Scene3 />,
  },
];

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const targetSection = location.state?.scrollTo;
  const [socialIndex, setSocialIndex] = useState(0);
  const [socialPaused, setSocialPaused] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [socialRef, showSocialModel] = useNearViewport();

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    arrows: true,
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const top =
      element.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    if (!targetSection) return undefined;
    const timer = setTimeout(() => {
      scrollToSection(targetSection);
      navigate(location.pathname, { replace: true, state: null });
    }, 180);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetSection]);

  useEffect(() => {
    if (socialPaused) return undefined;
    const timer = setInterval(() => {
      setSocialIndex((index) => (index + 1) % socials.length);
    }, 5600);
    return () => clearInterval(timer);
  }, [socialPaused]);

  const goToSocial = (direction) => {
    setSocialIndex(
      (index) => (index + direction + socials.length) % socials.length
    );
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("aleemirfan672@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleInquirySubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Project inquiry: ${formData.get("service")}`;
    const message = [
      `Name: ${formData.get("name")}`,
      `Business email: ${formData.get("email")}`,
      `Company: ${formData.get("company") || "Not provided"}`,
      `Service: ${formData.get("service")}`,
      `Estimated budget: ${formData.get("budget") || "Not provided"}`,
      "",
      "Project details:",
      formData.get("details"),
    ].join("\n");
    window.location.href = `mailto:aleemirfan672@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  const requestService = (service) => {
    setSelectedService(service);
    scrollToSection("contact");
  };

  const requestConsultation = () => {
    setSelectedService("Free Consultation");
    const inquiry = document.querySelector(".inquiry-wrap");
    if (!inquiry) return;
    const top = inquiry.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const activeSocial = socials[socialIndex];

  return (
    <div className="home-page">
      <Header onSectionNavigate={scrollToSection} />

      <section className="hero" id="home">
        <div className="hero__glow hero__glow--one" aria-hidden="true" />
        <div className="hero__glow hero__glow--two" aria-hidden="true" />

        <div className="container hero__inner">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <Reveal>
                <span className="hero__badge">
                  <i aria-hidden="true" />
                  Digital studio · Lahore, Pakistan
                </span>
              </Reveal>

              <Reveal delay={80}>
                <div className="hero__title-stage">
                  <svg
                    className="hero__title-arrow"
                    viewBox="0 0 100 44"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M3 5C29 0 57 10 80 34M63 29l18 6-3-19" />
                  </svg>
                  <h1 className="hero__title">
                    I build digital
                    <br />
                    experiences that
                    <br />
                    <span className="text-gradient">move business forward.</span>
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <p className="hero__lead">
                  I help businesses grow through high-performance websites,
                  custom software, strategic digital marketing, and practical
                  AI automation. From first idea to launch, I build around the
                  challenges your business needs to solve.
                </p>
              </Reveal>

              <Reveal delay={210}>
                <div className="hero__actions">
                  <button type="button" className="btn-lime" onClick={requestConsultation}>
                    Request a free consultation <span aria-hidden="true">↗</span>
                  </button>
                  <a
                    className="btn-ghost"
                    href="tel:+923087923041"
                    aria-label="Call +92 308 7923041 for a free consultation"
                  >
                    Call for free consultation <span aria-hidden="true">☎</span>
                  </a>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => scrollToSection("project")}
                  >
                    Explore my work <span aria-hidden="true">↙</span>
                  </button>
                </div>
              </Reveal>

              <Reveal delay={270}>
                <div className="hero__support">
                  <span className="hero__availability"><i aria-hidden="true" />Available for select projects</span>
                  <p>Web development <b>·</b> Digital marketing <b>·</b> Software solutions <b>·</b> AI automation</p>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-6">
              <Reveal delay={140} className="reveal--scale">
                <div className="hero__visual-wrap">
                  <div className="hero__visual">
                    <span className="hero__visual-tag">
                      MacBook · live 3D
                    </span>
                    <div className="hero__orbit hero__orbit--one" aria-hidden="true" />
                    <div className="hero__orbit hero__orbit--two" aria-hidden="true" />
                    <Suspense fallback={null}>
                      <Scene4 />
                    </Suspense>
                    <div className="hero__hint">
                      <span aria-hidden="true" />
                      Drag to rotate
                    </div>
                    <div className="hero__chip hero__chip--top">
                      <i aria-hidden="true" />
                      React + Three.js
                    </div>
                    <div className="hero__chip hero__chip--bottom">
                      <b>60</b> fps interactions
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <span>Scroll to explore</span>
          <i aria-hidden="true" />
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section about-home" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow">About me</span>
                <h2 className="section-title">
                  Technology, creativity,
                  <br />
                  <span>and growth together.</span>
                </h2>
              </Reveal>

              <Reveal delay={80}>
                <p className="about-home__lead">
                  I’m a freelance digital solutions specialist helping
                  businesses establish their online presence, streamline
                  operations, and find new opportunities through technology.
                  My work combines web and application development, SEO,
                  advertising, and AI-powered automation around practical
                  business goals.
                </p>
              </Reveal>

              <Reveal delay={140}>
                <div className="about-home__facts">
                  <div>
                    <span>Based in</span>
                    <strong>Lahore, Pakistan</strong>
                  </div>
                  <div>
                    <span>Focus</span>
                    <strong>Web · SEO · Ads · Design</strong>
                  </div>
                  <div>
                    <span>Working style</span>
                    <strong>Collaborative &amp; fast</strong>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <Link to="/about" className="btn-ghost about-home__more">
                  More about me <span aria-hidden="true">↗</span>
                </Link>
              </Reveal>

              <Reveal delay={240}>
                <div className="about-home__contact">
                  <a href="mailto:aleemirfan672@gmail.com">
                    <img src={icon2} alt="" />
                    <span>
                      <small>Email me</small>
                      aleemirfan672@gmail.com
                    </span>
                  </a>
                  <a href="https://wa.me/923087923041" target="_blank" rel="noreferrer">
                    <img src={icon1} alt="" />
                    <span>
                      <small>WhatsApp me</small>
                      +92 308 7923041
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-6">
              <Reveal delay={120} className="reveal--scale">
                <div className="about-home__visual">
                  <div className="about-home__frame">
                    <img src={about} alt="Muhammad Aleem at work" />
                    <span className="about-home__frame-tag">Est. 2022</span>
                  </div>
                  <div className="about-home__float">
                    <strong>3+</strong>
                    <span>Years of hands-on experience</span>
                  </div>
                  <div className="about-home__ring" aria-hidden="true" />
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">Services</span>
              <h2 className="section-title">Digital solutions designed <span>around your business.</span></h2>
              <p className="section-lead">From building your digital foundation to attracting customers and automating operations, I help your business move forward.</p>
            </Reveal>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={(index % 3) * 70}>
                <article className="service-card" id={`service-${service.number}`}>
                  <span className="services__number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <h4>{service.promise}</h4>
                  <p>{service.copy}</p>
                  <details className="service-card__details">
                    <summary>Explore deliverables <span aria-hidden="true">+</span></summary>
                    <ul>{service.offerings.map((offering) => <li key={offering}>{offering}</li>)}</ul>
                  </details>
                  <button type="button" className="service-card__cta" onClick={() => requestService(service.title)}>
                    {service.cta} <span aria-hidden="true">↗</span>
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section reasons-section" id="why-work-with-me">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal><span className="eyebrow">Why work with me</span><h2 className="section-title">A practical partner for <span>your digital growth.</span></h2></Reveal>
            <Reveal delay={80}><p className="section-lead">Clear thinking, useful technology, and a process that stays connected to your business goals.</p></Reveal>
          </div>
          <div className="reasons-grid">
            {advantages.map(([title, copy], index) => (
              <Reveal key={title} delay={(index % 3) * 60}><article className="reason-item"><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <Reveal><span className="eyebrow">My process</span><h2 className="section-title">From business challenge <span>to digital solution.</span></h2></Reveal>
          <div className="process-track">
            {processSteps.map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 60}><article className="process-step"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <span className="eyebrow">Toolbox</span>
              <h2 className="section-title">
                My <span>skills</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="section-lead">
                A practical toolkit built across client work, product builds,
                and a lot of late-night experiments.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="skills__carousel">
              <Slider {...settings}>
                {skillImages.map((image, index) => (
                  <div key={`skill-${index}`} className="skills__slide">
                    <div className="skills__card">
                      <img
                        src={image}
                        alt={`Skill tool ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="skills__chips">
              {skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section featured" id="project">
          <div className="container">
            <div className="featured__intro">
              <Reveal>
                <span className="eyebrow">Selected work · 01—03</span>
                <h2 className="section-title">
                  Good work speaks
                  <br />
                  <span>for itself.</span>
                </h2>
                <p className="section-lead">
                  A closer look at selected websites and product experiences.
                  Each project links to its live website.
                </p>
              </Reveal>
            </div>

            <div className="featured__cards">
              {featured.map((item, index) => (
                <Reveal key={item.number} delay={index * 80}>
                  <a
                    className="featured-card"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${item.title}, ${item.meta}`}
                  >
                    <div className="featured-card__image">
                      <img
                        src={item.image}
                        alt={`${item.title} website preview`}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="featured-card__index">{item.number}</span>
                      <span className="featured-card__visit" aria-hidden="true">↗</span>
                    </div>
                    <div className="featured-card__info">
                      <div>
                        <h3>{item.title}</h3>
                        <span>{item.meta}</span>
                      </div>
                      <span className="featured-card__arrow" aria-hidden="true">↗</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="featured__footer">
              <span className="featured__note">More projects, details &amp; categories</span>
              <Link to="/projects" className="btn-ghost">
                Explore the portfolio <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
      </section>

      <section className="section outcomes-section" id="results">
        <div className="container"><Reveal>
          <span className="eyebrow">Outcomes</span>
          <h2 className="section-title">Focused on outcomes, <span>not just deliverables.</span></h2>
          <p className="section-lead">The goal is to support real business objectives: stronger online visibility, useful customer journeys, better campaign decisions, and less repetitive work. Results depend on each project’s scope and are shared when verified.</p>
        </Reveal></div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal><span className="eyebrow">FAQ</span><h2 className="section-title">A few useful <span>answers.</span></h2></Reveal>
            <Reveal delay={80}><p className="section-lead">Have a different question? Send a project inquiry and we can talk through the details.</p></Reveal>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={index * 40}><details className="faq-item"><summary><span>{question}</span><i aria-hidden="true">+</i></summary><p>{answer}</p></details></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-home" id="contact">
        <span className="contact-home__orb contact-home__orb--one" aria-hidden="true" />
        <span className="contact-home__orb contact-home__orb--two" aria-hidden="true" />
        <span className="contact-home__orb contact-home__orb--three" aria-hidden="true" />
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow">Start a conversation</span>
                <h2 className="section-title">
                  Have a goal?
                  <br />
                  <span>Let’s make it happen.</span>
                </h2>
                <p className="section-lead">
                  Share what you want to build, improve, or automate. I’ll review
                  your brief and we can work out the right scope and next steps.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="contact-home__channels">
                  <a className="contact-home__channel contact-home__channel--email" href="mailto:aleemirfan672@gmail.com">
                    <span className="contact-home__channel-icon" aria-hidden="true">@</span>
                    <span><small>Email</small><strong>aleemirfan672@gmail.com</strong></span>
                    <span className="contact-home__channel-arrow" aria-hidden="true">↗</span>
                  </a>
                  <a className="contact-home__channel" href="https://wa.me/923087923041" target="_blank" rel="noreferrer">
                    <span className="contact-home__channel-icon" aria-hidden="true">↗</span>
                    <span><small>WhatsApp</small><strong>+92 308 7923041</strong></span>
                    <span className="contact-home__channel-arrow" aria-hidden="true">↗</span>
                  </a>
                  <a className="contact-home__channel" href="tel:+923087923041">
                    <span className="contact-home__channel-icon" aria-hidden="true">☎</span>
                    <span><small>Free consultation by phone</small><strong>Call +92 308 7923041</strong></span>
                    <span className="contact-home__channel-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
                <button className="contact-home__copy" type="button" onClick={copyEmail}>
                  {copied ? "Email copied" : "Copy email address"}
                </button>
              </Reveal>

              <Reveal delay={160}>
                <div className="contact-home__details">
                  <div>
                    <span>Location</span>
                    Lahore, Pakistan · Remote
                  </div>
                  <div>
                    <span>Availability</span>
                    Open for freelance &amp; contracts
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-6">
              <Reveal delay={140}>
                <div
                  className="social-stage"
                  ref={socialRef}
                  onMouseEnter={() => setSocialPaused(true)}
                  onMouseLeave={() => setSocialPaused(false)}
                >
                  <div className="social-stage__head">
                    <span className="social-stage__counter">
                      0{socialIndex + 1}
                      <small>/ 0{socials.length}</small>
                    </span>
                    <span className="social-stage__label">Find me online</span>
                  </div>

                  <div className="social-stage__canvas" key={activeSocial.name}>
                    {showSocialModel && (
                      <Suspense fallback={null}>{activeSocial.scene}</Suspense>
                    )}
                  </div>

                  <div className="social-stage__info">
                    <span className="eyebrow eyebrow--plain">
                      {activeSocial.label}
                    </span>
                    <h3>{activeSocial.name}</h3>
                    <a
                      href={activeSocial.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {activeSocial.handle} <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <div className="social-stage__controls">
                    <button
                      type="button"
                      onClick={() => goToSocial(-1)}
                      aria-label="Previous social link"
                    >
                      ←
                    </button>
                    <div className="social-stage__dots">
                      {socials.map((social, index) => (
                        <button
                          key={social.name}
                          type="button"
                          className={index === socialIndex ? "is-active" : ""}
                          onClick={() => setSocialIndex(index)}
                          aria-label={`Show ${social.name}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => goToSocial(1)}
                      aria-label="Next social link"
                    >
                      →
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="inquiry-wrap">
            <Reveal>
              <div className="inquiry-layout">
                <div className="inquiry-main">
                  <div className="inquiry-heading">
                    <span className="eyebrow">Project brief <i aria-hidden="true" /></span>
                    <h3>Give me the shape of your idea.</h3>
                    <p>A few useful details help me understand the goal and suggest a practical next step.</p>
                  </div>
                  <fieldset className="inquiry-service-shortcuts">
                    <legend>What do you need help with?</legend>
                    <div>
                      {["Website Development", "Search Engine Optimization", "Digital Marketing", "AI Automation", "Graphic Design", "Video Editing"].map((service) => (
                        <button
                          key={service}
                          type="button"
                          className={selectedService === service ? "is-selected" : ""}
                          aria-pressed={selectedService === service}
                          onClick={() => setSelectedService(service)}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <form className="inquiry-form" onSubmit={handleInquirySubmit}>
                    <label>Full name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
                    <label>Business email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
                    <label>Company <span>Optional</span><input name="company" autoComplete="organization" placeholder="Company or organization" /></label>
                    <label>Service required<select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required>
                      <option value="" disabled>Select a service</option>
                      {[...services.map((service) => service.title), "Free Consultation", "Multiple Services", "Other"].map((service) => <option key={service} value={service}>{service}</option>)}
                    </select></label>
                    <label>Estimated budget <span>Optional</span><select name="budget" defaultValue="">
                      <option value="">Choose a range</option><option>Under $500</option><option>$500–$1,500</option><option>$1,500–$5,000</option><option>$5,000+</option><option>Let&apos;s discuss</option>
                    </select></label>
                    <label className="inquiry-form__details">Project details<textarea name="details" rows="5" required placeholder="What are you looking to build, improve, or automate? Include any goals, requirements, or timing." /></label>
                    <button className="btn-lime inquiry-form__submit" type="submit">Open inquiry email <span aria-hidden="true">↗</span></button>
                  </form>
                  <p className="inquiry-form__note"><span aria-hidden="true">i</span>This opens a prefilled draft in your email app. Your inquiry is sent only when you press Send there.</p>
                </div>

                <aside className="inquiry-aside" aria-label="Selected project previews and next steps">
                  <div className="inquiry-gallery">
                    <figure className="inquiry-gallery__item inquiry-gallery__item--featured">
                      <img src={inquiryOptima} alt="Optima business website preview" loading="lazy" decoding="async" />
                      <figcaption><span>Business website</span><strong>Optima</strong></figcaption>
                    </figure>
                    <figure className="inquiry-gallery__item">
                      <img src={inquiryDigSite} alt="The Dig Site editorial website preview" loading="lazy" decoding="async" />
                      <figcaption><span>Editorial website</span><strong>The Dig Site</strong></figcaption>
                    </figure>
                    <figure className="inquiry-gallery__item">
                      <img src={inquiryDrone} alt="Auto Drone product website preview" loading="lazy" decoding="async" />
                      <figcaption><span>Product showcase</span><strong>Auto Drone</strong></figcaption>
                    </figure>
                    <figure className="inquiry-gallery__item">
                      <img src={inquiryTechShinners} alt="Tech Shinners technology brand website preview" loading="lazy" decoding="async" />
                      <figcaption><span>Technology brand</span><strong>Tech Shinners</strong></figcaption>
                    </figure>
                  </div>
                  <p className="inquiry-aside__caption">A few examples of digital work, built for different goals.</p>
                  <div className="inquiry-steps">
                    <div><span>01</span><strong>Share the brief</strong></div>
                    <div><span>02</span><strong>Discuss the scope</strong></div>
                    <div><span>03</span><strong>Plan next steps</strong></div>
                  </div>
                </aside>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
