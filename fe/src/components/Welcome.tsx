import { ArrowDown } from "lucide-react";

export default function Welcome() {
  return (
    <section id="welcome" className="relative flex min-h-[calc(100vh-73px)] flex-col justify-center px-6 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        Hello, I&apos;m <span className="text-blue-600 dark:text-blue-400">Nguyen Tien Si</span>.<br />
        A passionate developer building modern web experiences.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
        Thank you for visiting. Explore my work, experience, and skills below.
      </p>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50" aria-label="Scroll to About">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
