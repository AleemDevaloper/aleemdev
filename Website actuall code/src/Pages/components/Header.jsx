import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const socialLinks = [
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

function Header({ onSectionNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const goToSection = (id) => {
    setOpen(false);
    if (onSectionNavigate) {
      onSectionNavigate(id);
      return;
    }
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate("/", { state: { scrollTo: id } });
  };

  const navItems = [
    {
      label: "Home",
      active: isHome,
      onClick: () => {
        setOpen(false);
        if (isHome) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          navigate("/");
        }
      },
    },
    {
      label: "Work",
      to: "/projects",
      active: location.pathname.startsWith("/projects"),
    },
    {
      label: "About",
      to: "/about",
      active: location.pathname.startsWith("/about"),
    },
    {
      label: "Contact",
      active: false,
      onClick: () => goToSection("contact"),
    },
  ];

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${
        open ? "is-open" : ""
      }`}
    >
      <div className="container site-header__inner">
        <Logo
          onClick={() => {
            if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={`main-nav__link ${item.active ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                className={`main-nav__link ${item.active ? "is-active" : ""}`}
                onClick={item.onClick}
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="header-cta"
            onClick={() => goToSection("contact")}
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </button>
          <Link to="/menu" className="header-menu" aria-label="Open full menu">
            <span className="header-menu__icon" aria-hidden="true">
              <i />
              <i />
            </span>
            Menu
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-nav__inner">
          <p className="mobile-nav__eyebrow">Navigation</p>
          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="mobile-nav__link"
                  onClick={() => setOpen(false)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  className="mobile-nav__link"
                  onClick={item.onClick}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </button>
              )
            )}
            <Link
              to="/menu"
              className="mobile-nav__link"
              onClick={() => setOpen(false)}
            >
              <span>05</span>
              Full menu
            </Link>
          </nav>

          <div className="mobile-nav__footer">
            <a href="mailto:aleemirfan672@gmail.com">
              aleemirfan672@gmail.com
            </a>
            <div className="mobile-nav__socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
