import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <header className="nav">
      <a className="brand" href="#top">
        KN<span>.</span>
      </a>

      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "open" : ""}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setOpen(false)}
          >
            {link[0].toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}