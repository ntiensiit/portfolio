import { Award } from "lucide-react";

const certificates = [
  { name: "SFIA Certificate L4", date: "Jul 2026", href: "https://drive.google.com/file/d/1IeRvwWkzj805sKim3_uCX4rFpy6uAxhK/view" },
  { name: "Google Cloud Computing Foundations", date: "2026", href: "https://www.credly.com/badges/4262d16c-559d-4ef7-82f3-82a0fcd1073c" },
  { name: "TOEIC", detail: "935/990", date: "2026", href: "https://drive.google.com/file/d/1oHQPTSmH23osVNHlo2OUuD8khfAdc4g4/view" },
  { name: "Excellent scholarship (2 semesters)", date: "2022-2026" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-16">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
        <Award className="h-5 w-5 text-slate-500 dark:text-cyan-400" />
        Certificates
      </h3>
      <ul className="grid gap-4 md:grid-cols-2">
        {certificates.map((certificate) => (
          <li
            key={certificate.name}
            className="flex items-center justify-between rounded-lg border border-slate-200 p-4 transition-colors hover:border-slate-400 dark:border-cyan-500/20 dark:hover:border-cyan-400"
          >
            <div>
              <a
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-800 dark:text-white"
              >
                {certificate.name}
              </a>
              {certificate.detail && (
                <p className="font-mono text-sm text-white">
                  {certificate.detail}
                </p>
              )}
            </div>
            <span className="ml-4 shrink-0 text-xs text-slate-400 dark:text-slate-500">
              {certificate.date}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
