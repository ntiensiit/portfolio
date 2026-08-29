import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTop";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-slate-50 font-sans dark:bg-[#0a0f1a]">
      <Nav />
      <main className="flex w-full max-w-4xl flex-col pt-0 mx-auto">
        <Welcome />
        <About />
        <Experience />
        <Projects />
        <Education />

        {/* Footer */}
        <footer className="flex flex-col items-center gap-4 border-t border-slate-200 px-6 py-8 text-center text-sm leading-none text-slate-400 sm:flex-row sm:justify-between dark:border-cyan-500/20 dark:text-slate-400">
          <span className="flex items-center">&copy; {new Date().getFullYear()} NTIENSIIT (NGUYEN TIEN SI)</span>
          <span className="flex items-center">
            <ScrollToTopButton />
          </span>
        </footer>
      </main>
    </div>
  );
}
