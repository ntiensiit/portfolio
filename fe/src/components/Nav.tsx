"use client";
import { useState } from "react";
import { Menu, X, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Experience", "Projects", "Education"];
  const sectionId = (label: string) => label.toLowerCase();

  const socials = [
    { label: "GitHub", href: "https://github.com/ntiensiit", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nguyen-tien-si-489bb136b", icon: FaLinkedin },
    { label: "Email", href: "mailto:ntiensi.it@gmail.com", icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-10 w-full border-b border-black/10 bg-zinc-50/90 backdrop-blur dark:border-white/10 dark:bg-black/80">
      <div className="relative mx-auto flex w-full items-center justify-between px-6 py-4">
        <a href="#welcome" className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          NTIENSIIT
        </a>

        {/* Desktop links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${sectionId(link)}`}
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume + social icons */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/resume.pdf"
            download
            aria-label="Download resume"
            title="Download resume"
            className="inline-flex items-center rounded-md py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            <FileText className="h-4 w-4" />
          </a>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-700 dark:text-zinc-300"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile links */}
      {open && (
        <ul className="flex flex-col gap-2 px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${sectionId(link)}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-zinc-600 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/10"
              >
                {link}
              </a>
            </li>
          ))}
          <li className="mt-2 flex gap-5 px-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </li>
          <li className="mt-3 px-2">
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              aria-label="Download resume"
              title="Download resume"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/5 dark:text-zinc-200 dark:hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
