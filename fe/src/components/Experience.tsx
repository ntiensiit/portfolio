import { Briefcase, ChevronRight, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Company Name",
    period: "2022 - Present",
    points: ["Built and maintained web applications using React and Next.js."],
    tags: ["React", "Next.js"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 lg:-ml-[5%] lg:w-[110%]">
      <h2 className="mb-8 text-center text-3xl font-semibold">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <article key={experience.role} className="grid grid-cols-1 gap-8 border-l border-neutral-200 pl-8 dark:border-white/10 md:ml-0 md:grid-cols-12">
            <div className="pt-1 text-sm text-neutral-500 md:col-span-3">{experience.period}</div>
            <div className="md:col-span-9">
              <h3 className="mb-1 flex items-center gap-2 text-2xl font-bold text-neutral-900 dark:text-white"><Briefcase className="h-4 w-4" />{experience.role}</h3>
              <div className="font-medium text-neutral-500 dark:text-neutral-400">{experience.company}</div>
              <div className="mt-2 flex items-center gap-1 text-sm text-neutral-500"><MapPin className="h-3 w-3" />Ho Chi Minh City, Vietnam</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-500 dark:text-neutral-400">{experience.points.map((point) => <li key={point} className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0" /><span>{point}</span></li>)}</ul>
              <div className="mt-3 flex flex-wrap gap-2">{experience.tags.map((tag) => <span key={tag} className="rounded-full border border-neutral-200 px-2 py-1 font-mono text-xs text-neutral-500 dark:border-white/10">{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
