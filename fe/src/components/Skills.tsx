import {
  Code2,
  Layers,
  Database,
} from "lucide-react";

const skills = [
  { category: "Languages", icon: Code2, items: ["C#", "JavaScript", "SQL", "HTML/CSS"] },
  { category: "Framework", icon: Layers, items: ["ASP.NET Core", "Entity Framework Core", "React"] },
  { category: "Data & Tools", icon: Database, items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Git", "GitLab", "CI/CD", "Docker", "Jira", "Agile/Scrum"] },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:w-[120%]">
      {skills.map((skill) => (
        <article
          key={skill.category}
          className="group rounded-lg border border-slate-200 shadow-sm transition-all duration-300 hover:border-slate-400 hover:shadow-lg dark:border-cyan-500/20 dark:hover:border-cyan-400"
        >
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors group-hover:bg-slate-800 group-hover:text-white dark:bg-cyan-950 dark:text-cyan-300 dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-900">
                <skill.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-cyan-50">
                {skill.category}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {skill.items.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
