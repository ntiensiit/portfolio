const projects = [
  { title: "Project One", description: "A short description of the first project." },
  { title: "Project Two", description: "A short description of the second project." },
];

export default function Projects() {

  return (
    <section id="projects" className="px-6 py-16 lg:-ml-[5%] lg:w-[110%]">
      <h2 className="mb-4 text-center text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-cyan-500">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:border-slate-400 dark:border-cyan-500/20 dark:hover:border-cyan-400"
          >
            <h3 className="text-xl font-medium text-slate-800 dark:text-cyan-50">{project.title}</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
