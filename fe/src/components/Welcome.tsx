import { ArrowDown } from "lucide-react";

export default function Welcome() {
  return (
    <section id="welcome" className="relative flex min-h-[calc(100vh-73px)] flex-col justify-center px-6 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-6xl lg:text-7xl">
        Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">NTIENSIIT</span>.
      </h1>
      <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">
        AI Engineer specializing in Machine Learning, Generative AI, and Computer Vision,
        building intelligent and reliable solutions.
      </p>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50" aria-label="Scroll to About">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
