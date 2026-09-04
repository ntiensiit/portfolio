import { Briefcase, ChevronRight, MapPin } from "lucide-react";

const experiences = [
  {
    role: "VSLAM Intern",
    company: "VinRobotics",
    period: "July 2026 - August 2026",
    points: [
      "Built a synthetic data generation pipeline for robotics perception on ROS 2-based Visual SLAM and LeRobot for VLN models.",
      "Designed a modular SLAM node interface and plugin architecture for interchangeable SLAM backends.",
      "Investigated VSLAM data flow across camera images, CameraInfo, TF, odometry, pose, and trajectory outputs.",
      "Built rosbag-based evaluation workflows for synchronization, trajectory generation, runtime behavior, and system performance.",
      "Analyzed ROS 2 communication bottlenecks involving message synchronization, callbacks, topic frequency, and recording overhead.",
    ],
    tags: ["ROS 2", "Visual SLAM", "LeRobot", "Synthetic Data"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 lg:-ml-[5%] lg:w-[110%]">
      <h2 className="mb-8 text-center text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-cyan-500">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <article key={experience.role} className="grid grid-cols-1 gap-8 border-l border-slate-200 pl-8 dark:border-cyan-500/20 md:ml-0 md:grid-cols-12">
            <div className="pt-1 text-sm text-slate-500 md:col-span-3">{experience.period}</div>
            <div className="md:col-span-9">
              <h3 className="mb-1 flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-cyan-50"><Briefcase className="h-4 w-4" />{experience.role}</h3>
              <div className="font-medium text-slate-500 dark:text-cyan-400">{experience.company}</div>
              <div className="mt-2 flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-3 w-3" />Ha Noi, Vietnam</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">{experience.points.map((point) => <li key={point} className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0" /><span>{point}</span></li>)}</ul>
              <div className="mt-3 flex flex-wrap gap-2">{experience.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 px-2 py-1 font-mono text-xs font-bold text-white dark:border-cyan-500/20">{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
