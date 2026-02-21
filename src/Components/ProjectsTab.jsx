const projects = [
  {
    title: "Project Alpha",
    description: "A web application built with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    color: "bg-cyan-400",
  },
  {
    title: "Automation Bot",
    description: "n8n workflow automation for daily tasks",
    tags: ["n8n", "Automation"],
    color: "bg-lime-400",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my work",
    tags: ["React", "Tailwind CSS"],
    color: "bg-fuchsia-400",
  },
];

const ProjectCard = ({ title, description, tags, color }) => (
  <div className={`${color} p-4 border-4 border-slate-900 drop-shadow-[6px_6px_0px_black] mb-5 transition-all duration-200 hover:drop-shadow-none hover:translate-x-1 hover:translate-y-1`}>
    <h4 className="text-lg font-black text-slate-900 uppercase">{title}</h4>
    <p className="text-slate-900 text-sm mb-3 font-medium">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-slate-900 text-white px-2 py-1 text-xs font-bold border-2 border-slate-900"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsTab = () => {
  return (
    <div className="pt-6 px-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default ProjectsTab;
