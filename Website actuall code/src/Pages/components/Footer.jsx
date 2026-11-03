import { Link } from "react-router-dom";
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
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=923087923041&text=Hi%2C%20I%20found%20you%20through%20your%20portfolio.",
  },
];

const navigateLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/", state: { scrollTo: "services" } },
  { label: "Portfolio", to: "/", state: { scrollTo: "project" } },
  { label: "Process", to: "/", state: { scrollTo: "process" } },
  { label: "Contact", to: "/", state: { scrollTo: "contact" } },
];

const serviceLinks = [
  { label: "Website Development", target: "service-01" },
  { label: "SEO & Digital Marketing", target: "service-02" },
  { label: "Paid Advertising", target: "service-04" },
  { label: "Mobile & Desktop Apps", target: "service-07" },
  { label: "AI Automation", target: "service-09" },
  { label: "Graphic Design", target: "service-10" },
  { label: "Video Editing", target: "service-11" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>
            Have a business goal? <span>Let&apos;s build the right solution.</span>
          </h2>
          <a
            className="footer-cta__mail"
            href="mailto:aleemirfan672@gmail.com"
          >
            aleemirfan672@gmail.com
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Building digital experiences, custom software, and intelligent
              automations that help businesses move forward.
            </p>
            <span className="footer-availability">
              <i aria-hidden="true" />
              Available for select projects
            </span>
          </div>

          <div className="footer-column">
            <h3>Navigate</h3>
            {navigateLinks.map((link) => (
              <Link key={link.label} to={link.to} state={link.state}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            {serviceLinks.map((link) => (
              <Link key={link.label} to="/" state={{ scrollTo: link.target }}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <h3>Elsewhere</h3>
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

          <div className="footer-column">
            <h3>Contact</h3>
            <a href="mailto:aleemirfan672@gmail.com">
              aleemirfan672@gmail.com
            </a>
            <a href="https://wa.me/923087923041">+92 308 7923041</a>
            <span>Lahore, Pakistan</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Muhammad Aleem. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
