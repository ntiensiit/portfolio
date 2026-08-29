import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTop";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <Nav />
      <main className="flex w-full max-w-4xl flex-col pt-0 mx-auto">
        <Welcome />
        <About />
        <Experience />
        <Projects />
        <Education />

        {/* Footer */}
        <footer className="flex flex-col items-center gap-4 border-t border-black/10 px-6 py-8 text-center text-sm leading-none text-zinc-500 sm:flex-row sm:justify-between dark:border-white/10">
          <span className="flex items-center">&copy; {new Date().getFullYear()} NTIENSIIT (NGUYEN TIEN SI).</span>
          <span className="flex items-center">
            <ScrollToTopButton />
          </span>
        </footer>
      </main>
    </div>
  );
}
