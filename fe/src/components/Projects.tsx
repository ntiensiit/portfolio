const projects = [
  {
    title: "EduManage",
    href: "https://github.com/ntiensiit/EduManage",
    description: "School management system (ASP.NET Core Web API, Angular 17, EF Core, SQL Server, SignalR). Built REST APIs across 8 controllers for role-based exam CRUD; implemented SignalR auto-submit and grading.",
  },
  {
    title: "NovelNest",
    href: "https://github.com/ntiensiit/NovelNest",
    description: "Bookstore community (ASP.NET Core MVC, Clean Architecture, NUnit). Implemented repository pattern with optimized SQL queries (32 migrations); Identity roles and antiforgery; 133 NUnit unit tests.",
  },
  {
    title: "eTixMovie",
    href: "https://github.com/ntiensiit/eTixMovie",
    description: "Movie-ticket e-commerce (ASP.NET Core MVC, EF Core, Identity, PayPal). Structured 6 controllers into service layers for cart, orders, PayPal checkout; role-based CRUD.",
  },
  {
    title: "Website Selling Courses",
    href: "https://github.com/ntiensiit/hoc-vui-360/tree/v1",
    description:
      "An e-learning web platform that enables instructors to publish courses and learners to browse, purchase, and study through a seamless online learning experience. Secure user access control using Authentication & Authorization (JWT) in ASP.NET Core Web API, supporting multiple roles. Course Management implemented using Entity Framework Core with Microsoft SQL Server under the Code-First approach. Smooth navigation and dynamic interface rendering powered by NextJS for an interactive and responsive user experience. Efficient database operations achieved through asynchronous programming and LINQ queries with Entity Framework Core.",
  },
  {
    title: "Hotel Booking Application",
    href: "https://github.com/ntiensiit/hotel-booking-application/tree/v1",
    description:
      "A hotel booking web application that enables users to search, reserve rooms, and manage bookings with an intuitive and efficient reservation flow. Hotel booking web application using ASP.NET Core Web API for backend services and ASP.NET Core MVC for the frontend layer. Designed the system based on Hexagonal Architecture and DDD to enhance scalability, maintainability, and separation of concerns. Database modeling using distributed database architecture. Applied clean domain-driven logic, allowing clear business rule implementation and easier feature extension in the future.",
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
