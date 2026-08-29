import Skills from "./Skills";

export default function About () {
  return (
    <section id="about" className="w-full py-16 px-6 lg:w-[110%] lg:-ml-[5%]">
      <h2 className="mb-8 text-center text-3xl font-semibold">About Me</h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="rounded-lg border border-black/10 p-6 shadow-sm dark:border-white/10">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Hello! I&apos;m a passionate developer building modern web experiences.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm uppercase tracking-widest text-neutral-900 dark:text-white">
            <a
              href="/resume.pdf"
              download
              className="border-b-2 border-transparent transition-colors duration-300 hover:border-black dark:hover:border-white"
            >
              RESUME
            </a>
            <a href="https://github.com/ntiensiit" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="border-b-2 border-transparent transition-colors duration-300 hover:border-black dark:hover:border-white">GitHub</a>
            <a href="https://www.linkedin.com/in/nguyen-tien-si-489bb136b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="border-b-2 border-transparent transition-colors duration-300 hover:border-black dark:hover:border-white">LinkedIn</a>
            <a href="mailto:ntiensi.it@gmail.com" aria-label="Email" className="border-b-2 border-transparent transition-colors duration-300 hover:border-black dark:hover:border-white">Email</a>
          </div>
        </div>

        <div id="skills">
          <Skills />
        </div>
      </div>
    </section>
  )
}
