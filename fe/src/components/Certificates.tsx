import { Award } from "lucide-react";

const certificates = [
  { name: "TOEIC", detail: "935/990", date: "05/2026", href: "https://example.com" },
  { name: "Build a Secure Google Cloud Network Skill Badge", date: "01/2026", href: "https://www.credly.com/badges/59dd7c4b-620d-45dd-8d6d-eacb7c4ff055" },
  { name: "Google Cloud Computing Foundations Certificate", date: "01/2026", href: "https://www.credly.com/badges/4262d16c-559d-4ef7-82f3-82a0fcd1073c" },
  { name: "Implement Load Balancing on Compute Engine Skill Badge", date: "01/2026", href: "https://www.credly.com/badges/d940e5ab-1f64-4be6-a6ef-8dce283b200a" },
  { name: "Prepare Data for ML APIs on Google Cloud Skill Badge", date: "01/2026", href: "https://www.credly.com/badges/6011d096-e8d3-4468-b1f5-e03aae3c705e" },
  { name: "Set Up an App Dev Environment on Google Cloud Skill Badge", date: "01/2026", href: "https://www.credly.com/badges/41224be6-c844-4266-bdec-03d98ff87b1b" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-16">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
        <Award className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
        Certificates
      </h3>
      <ul className="grid gap-4 md:grid-cols-2">
        {certificates.map((certificate) => (
          <li
            key={certificate.name}
            className="flex items-center justify-between rounded-lg border border-black/10 p-4 transition-colors hover:border-zinc-400 dark:border-white/10 dark:hover:border-zinc-600"
          >
            <div>
              <a
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
              >
                {certificate.name}
              </a>
              {certificate.detail && (
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
                  {certificate.detail}
                </p>
              )}
            </div>
            <span className="ml-4 shrink-0 text-xs text-zinc-500 dark:text-zinc-400">
              {certificate.date}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
