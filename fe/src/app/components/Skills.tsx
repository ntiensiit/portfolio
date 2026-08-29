export default function Skills() {
  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"];

  return (
    <section id="skills" className="py-16 px-6">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-black/5 px-4 py-2 text-zinc-800 dark:bg-white/10 dark:text-zinc-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
