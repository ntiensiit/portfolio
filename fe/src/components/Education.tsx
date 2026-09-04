import { Award, BookOpen, Calendar, ChevronRight, GraduationCap } from "lucide-react";
import Certificates from "./Certificates";

const educations = [
  {
    degree: "SFIA Certificate",
    school: "VinUniversity - AI Practical Talent Development Program",
    period: "May 2026 - July 2026",
    highlights: ["SFIA Level 4"],
    focus: ["Artificial Intelligence"],
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "University of Transport Ho Chi Minh City - Major in Artificial Intelligence",
    period: "2022 - 2026",
    highlights: [
      "Graduated in 3.5 years",
    ],
    focus: [
      "Artificial Intelligence",
      "Computer Vision Applications",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-16 lg:-ml-[5%] lg:w-[110%]">
      <h2 className="mb-4 text-center text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-cyan-500">Education &amp; Certificates</h2>
      {educations.map((education) => <article key={education.degree} className="rounded-lg border border-slate-200 shadow-sm transition-all duration-300 hover:border-slate-400 dark:border-cyan-500/20 dark:hover:border-cyan-400">
        <header className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-slate-100 p-2 text-slate-700 dark:bg-cyan-950 dark:text-cyan-300"><GraduationCap className="h-6 w-6" /></div>
              <div><h3 className="text-lg font-bold text-slate-800 dark:text-slate-50">{education.degree}</h3><p className="text-slate-500 dark:text-slate-400">{education.school}</p></div>
            </div>
            <span className="flex items-center gap-1 text-sm text-slate-400 dark:text-slate-500"><Calendar className="h-3 w-3" />{education.period}</span>
          </div>
        </header>
        <div className="grid gap-6 p-6 pt-0 md:grid-cols-2">
          <div><h4 className="mb-3 flex items-center gap-2 text-sm font-semibold"><Award className="h-4 w-4 text-cyan-500 dark:text-cyan-300" />Highlights</h4><ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">{education.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500 dark:text-cyan-300" />{highlight}</li>)}</ul></div>
          <div><h4 className="mb-3 flex items-center gap-2 text-sm font-semibold"><BookOpen className="h-4 w-4 text-cyan-500 dark:text-cyan-300" />Research Focus</h4><div className="flex flex-wrap gap-2">{education.focus.map((focus) => <span key={focus} className="inline-flex rounded-full border border-slate-200 px-2.5 py-0.5 font-mono text-xs font-bold dark:border-cyan-500/20">{focus}</span>)}</div></div>
        </div>
      </article>)}
      <Certificates />
    </section>
  );
}
