const projects = [
  {
    title: "EduManage",
    href: "https://github.com/ntiensiit/EduManage",
    description: "Built REST APIs across 8 controllers for role-based exam CRUD; implemented SignalR auto-submit and grading. (ASP.NET Core Web API, Angular 17, EF Core, SQL Server, SignalR)",
  },
  {
    title: "NovelNest",
    href: "https://github.com/ntiensiit/NovelNest",
    description: "Implemented repository pattern; enforced Identity roles and antiforgery; wrote 133 NUnit unit tests. (ASP.NET Core MVC, Clean Architecture, NUnit)",
  },
  {
    title: "eTixMovie",
    href: "https://github.com/ntiensiit/eTixMovie",
    description: "Structured 6 controllers into service layers for cart, orders, PayPal checkout; protected role-based CRUD. (ASP.NET Core MVC, EF Core, Identity, PayPal)",
  },
  {
    title: "Website Selling Courses",
    href: "https://github.com/ntiensiit/hoc-vui-360/tree/v1",
    description:
      "E-learning platform (ASP.NET Core Web API, Next.js, EF Core, SQL Server, JWT). Instructor course publishing and learner browse/purchase flow; Code-First with async LINQ.",
  },
  {
    title: "Hotel Booking Application",
    href: "https://github.com/ntiensiit/hotel-booking-application/tree/v1",
    description:
      "Hotel booking app (ASP.NET Core Web API + MVC, Hexagonal/DDD, distributed DB). Search, reserve, and manage bookings with clean domain-driven logic.",
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
