const projects = [
  {
    title: "Synthetic Images for Robotics Object Detection",
    href: "https://demo.edufun.ai/p/team-456-synthetic-dataset-generator-sim2real-ai20k-170",
    description: "Generated 3,500 labeled PyBullet images across seven household-object classes and evaluated synthetic, real, and mixed YOLO training datasets. The synthetic-data model achieved 0.924 mAP50 versus 0.875 for real-only training.",
  },
  {
    title: "AI Legal Radar",
    href: "https://github.com/Datghb/Parasitic-",
    description: "A misinformation-monitoring platform with LLM extraction and BM25 matching. It classifies claims into three labels and provides crawling, review queues, human overrides, and append-only audit trails.",
  },
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
            <h3 className="text-xl font-medium text-slate-800 dark:text-cyan-50">
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-300">
                {project.title}
              </a>
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
