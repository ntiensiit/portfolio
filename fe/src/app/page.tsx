import About from "./components/About";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <Nav />
      <main className="flex w-full max-w-4xl flex-col pt-0">
        <Welcome />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />

        {/* Footer */}
        <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-zinc-500 dark:border-white/10">
          &copy; {new Date().getFullYear()} My Portfolio. Built with Next.js.
        </footer>
      </main>
    </div>
  );
}
