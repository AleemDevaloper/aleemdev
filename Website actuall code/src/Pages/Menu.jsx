import { useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import "../assets/Styles/Pages/menu.scss";
import Header from "./components/Header";
import bg from "../assets/images/bg/bg.jpg";
import previewHome from "../assets/images/bg1.jpg";
import previewProjects from "../assets/images/About/web2.png";
import previewAbout from "../assets/images/About/img.png";
import previewContact from "../assets/images/about.jpg";

const items = [
  {
    number: "01",
    label: "Home",
    description: "Back to the beginning",
    to: "/",
    preview: previewHome,
  },
  {
    number: "02",
    label: "Projects",
    description: "Selected work & experiments",
    to: "/projects",
    preview: previewProjects,
  },
  {
    number: "03",
    label: "About",
    description: "The person behind the pixels",
    to: "/about",
    preview: previewAbout,
  },
  {
    number: "04",
    label: "Contact",
    description: "Start a conversation",
    to: "/",
    state: { scrollTo: "contact" },
    preview: previewContact,
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
];

function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = activeIndex >= 0 ? items[activeIndex] : null;

  return (
    <div className="menu-page">
      <Header />

      <Parallax bgImage={bg} strength={180} className="menu-page__parallax">
        <div className="menu-page__overlay" aria-hidden="true" />
        <div className="container menu-page__inner">
          <div className="menu-page__intro">
            <span className="eyebrow">Menu</span>
            <p>Pick a direction. Or just wander around for a while.</p>
          </div>

          <div className="menu-page__layout">
            <nav
              className="menu-list"
              aria-label="Full site menu"
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {items.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.to}
                  state={item.state}
                  className={`menu-link ${
                    index === activeIndex ? "is-active" : ""
                  }`}
                  style={{ "--index": index }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className="menu-link__num">{item.number}</span>
                  <span className="menu-link__text">
                    <span className="menu-link__label">{item.label}</span>
                    <small>{item.description}</small>
                  </span>
                  <span className="menu-link__arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            </nav>

            <div
              className={`menu-preview ${activeItem ? "is-visible" : ""}`}
              aria-hidden="true"
            >
              {activeItem ? (
                <>
                  <img
                    key={activeItem.preview}
                    src={activeItem.preview}
                    alt=""
                  />
                  <span className="menu-preview__tag">
                    {activeItem.label}
                  </span>
                  <span className="menu-preview__hint">
                    <i />
                    Scroll · explore · repeat
                  </span>
                </>
              ) : null}
            </div>
          </div>

          <div className="menu-page__footer">
            <div>
              <span>Say hello</span>
              <a href="mailto:aleemirfan672@gmail.com">
                aleemirfan672@gmail.com
              </a>
            </div>
            <div className="menu-page__socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <span className="menu-page__status">
              <i aria-hidden="true" />
              Available for select projects
            </span>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Menu;
