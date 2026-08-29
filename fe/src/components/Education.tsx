import { Award, BookOpen, Calendar, ChevronRight, GraduationCap } from "lucide-react";
import Certificates from "./Certificates";

const educations = [
  {
    degree: "Bachelor of Information Technology",
    school: "University of Transport - Ho Chi Minh City, UTH",
    period: "2022 - 2026",
    highlights: ["Graduated in 3.5 years"],
    focus: ["Computer Vision Applications"],
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-16 lg:-ml-[5%] lg:w-[110%]">
      <h2 className="mb-4 text-center text-3xl font-semibold">Education &amp; Certificates</h2>
      {educations.map((education) => <article key={education.degree} className="rounded-lg border border-black/10 shadow-sm transition-all duration-300 hover:border-zinc-400 dark:border-white/10 dark:hover:border-zinc-600">
        <header className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-zinc-100 p-2 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"><GraduationCap className="h-6 w-6" /></div>
              <div><h3 className="text-lg font-bold">{education.degree}</h3><p className="text-zinc-500 dark:text-zinc-400">{education.school}</p></div>
            </div>
            <span className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400"><Calendar className="h-3 w-3" />{education.period}</span>
          </div>
        </header>
        <div className="grid gap-6 p-6 pt-0 md:grid-cols-2">
          <div><h4 className="mb-3 flex items-center gap-2 text-sm font-semibold"><Award className="h-4 w-4 text-zinc-500" />Highlights</h4><ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">{education.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />{highlight}</li>)}</ul></div>
          <div><h4 className="mb-3 flex items-center gap-2 text-sm font-semibold"><BookOpen className="h-4 w-4 text-zinc-500" />Research Focus</h4><div className="flex flex-wrap gap-2">{education.focus.map((focus) => <span key={focus} className="inline-flex rounded-full border px-2.5 py-0.5 font-mono text-xs">{focus}</span>)}</div></div>
        </div>
      </article>)}
      <Certificates />
    </section>
  );
}
