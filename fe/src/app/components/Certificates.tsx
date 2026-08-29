export default function Certificates() {
  const certificates = [
    "AWS Certified Cloud Practitioner",
    "Responsive Web Design - freeCodeCamp",
    "JavaScript Algorithms and Data Structures",
  ];

  return (
    <section id="certificates" className="py-16 px-6">
      <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {certificates.map((certificate) => (
          <li
            key={certificate}
            className="rounded-lg border border-black/10 p-6 dark:border-white/10"
          >
            <span className="font-medium text-zinc-900 dark:text-zinc-50">{certificate}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
