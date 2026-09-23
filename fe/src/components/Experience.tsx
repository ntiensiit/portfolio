import { Briefcase, ChevronRight, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Cloud Security Engineer Intern",
    company: "VinSOC",
    location: "Ha Noi",
    period: "July 2026 - August 2026",
    points: [
      "Secured AWS Landing Zone for VinGroup subsidiaries; assessed risks and control effectiveness via audits and CSPM monitoring, remediating 30+ findings.",
      "Automated CIS compliance checks and remediation with Terraform modules and Ansible playbooks, cutting manual audit time by an estimated 60%.",
    ],
    tags: ["Terraform", "Ansible", "Python/Bash", "Jira"],
  },
  {
    role: "Fullstack Developer Intern",
    company: "Bosch Global Software Technologies",
    location: "Ho Chi Minh City",
    period: "September 2025 - February 2026",
    points: [
      "Built 20+ REST/CRUD endpoints with JWT auth for IoT sensors; wrote 100+ xUnit tests with Testcontainers, lifting coverage to 85%.",
      "Designed SQL Server sensor queries; delivered 50+ Jira tickets over 13 sprints with container setup.",
    ],
    tags: ["ASP.NET Core", "EF Core", "React", "TypeScript", "SQL Server", "Docker", "Jira"],
  },
  {
    role: "Odoo Developer Intern",
    company: "Enmasys",
    location: "Ho Chi Minh City",
    period: "March 2025 - July 2025",
    points: [
      "Customized modules (workflows, access rules) for Bach Hoa Xanh, Long Chau pharmacy, Minh Khoi Interior.",
    ],
    tags: ["Odoo", "Python", "PostgreSQL", "Jira"],
  },
  {
    role: "Fresher Fullstack Developer",
    company: "LISA VIETNAM Co., Ltd",
    location: "Ho Chi Minh City",
    period: "October 2024 - April 2025",
    points: [
      "Built booking web app; optimized SQL queries, UI/UX, API integrations and job performance across 16 sprints.",
    ],
    tags: [".NET 6", "NHibernate", "Oracle", "Jenkins", "Jira"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 lg:-ml-[5%] lg:w-[110%]">
      <h2 className="mb-8 text-center text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-cyan-500">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <article key={experience.role} className="grid grid-cols-1 gap-8 border-l border-slate-200 pl-8 dark:border-cyan-500/20 md:ml-0 md:grid-cols-12">
            <div className="pt-1 text-sm text-slate-500 md:col-span-3">{experience.period}</div>
            <div className="md:col-span-9">
              <h3 className="mb-1 flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-cyan-50"><Briefcase className="h-4 w-4" />{experience.role}</h3>
              <div className="font-medium text-slate-500 dark:text-cyan-400">{experience.company}</div>
              <div className="mt-2 flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />{experience.location}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">{experience.points.map((point) => <li key={point} className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0" /><span>{point}</span></li>)}</ul>
              <div className="mt-3 flex flex-wrap gap-2">{experience.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 px-2 py-1 font-mono text-xs font-bold text-white dark:border-cyan-500/20">{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
