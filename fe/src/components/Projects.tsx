const projects = [
  { title: "Project One", description: "A short description of the first project." },
  { title: "Project Two", description: "A short description of the second project." },
];

export default function Projects() {

  return (
    <section id="projects" className="px-6 py-16 lg:-ml-[5%] lg:w-[110%]">
      <h2 className="mb-4 text-center text-3xl font-semibold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-black/10 p-6 dark:border-white/10"
          >
            <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">{project.title}</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
