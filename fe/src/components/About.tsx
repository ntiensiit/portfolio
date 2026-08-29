import Skills from "./Skills";

export default function About () {
  return (
    <section id="about" className="w-full py-16 px-6 lg:w-[110%] lg:-ml-[5%]">
      <h2 className="mb-8 text-center text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-cyan-500">About Me</h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="rounded-lg border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:border-slate-400 hover:shadow-lg dark:border-cyan-500/20 dark:hover:border-cyan-400">
            <p className="text-lg text-slate-600 dark:text-white">
              Hello! I&apos;m an AI Engineer focused on building practical machine learning,
              generative AI, and computer vision solutions.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm uppercase tracking-widest text-slate-800 dark:text-cyan-50">
            <a
              href="/resume.pdf"
              download
              className="border-b-2 border-transparent text-cyan-600 transition-colors duration-300 hover:border-cyan-600 dark:text-cyan-400 dark:hover:border-cyan-400"
            >
              RESUME
            </a>
            <a href="https://github.com/ntiensiit" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="border-b-2 border-transparent text-gray-700 transition-colors duration-300 hover:border-gray-700 dark:text-gray-300 dark:hover:border-gray-300">GitHub</a>
            <a href="https://www.linkedin.com/in/nguyen-tien-si-489bb136b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="border-b-2 border-transparent text-blue-600 transition-colors duration-300 hover:border-blue-600 dark:text-blue-400 dark:hover:border-blue-400">LinkedIn</a>
            <a href="mailto:ntiensi.it@gmail.com" aria-label="Email" className="border-b-2 border-transparent text-red-600 transition-colors duration-300 hover:border-red-600 dark:text-red-400 dark:hover:border-red-400">Email</a>
          </div>
        </div>

        <div id="skills">
          <Skills />
        </div>
      </div>
    </section>
  )
}
