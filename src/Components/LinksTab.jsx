const links = [
  {
    href: "https://www.linkedin.com/in/bachrul-uluum/details/projects/",
    label: "Portfolio",
    event: "portfolio button",
  },
  {
    href: "https://uluumbch.my.id/",
    label: "Blog",
    event: "blog button",
  },
  {
    href: "https://n8n.io/creators/uluumbch",
    label: "n8n templates",
    event: "n8n creator button",
  },
];

const LinkButton = ({ href, label, event }) => (
  <a
    className="text-xl w-5/6 mx-auto bg-rose-600 text-slate-100 px-2 py-4 mb-5 relative z-[20] border-2 border-gray-50 drop-shadow-[7px_7px_black] ease-in-out duration-400 transition-all duration-700 hover:bg-slate-900 hover:text-white hover:drop-shadow-none"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-umami-event={event}
  >
    {label}
  </a>
);

const LinksTab = () => {
  return (
    <div className="pt-6 flex flex-col text-center">
      {links.map((link) => (
        <LinkButton key={link.event} {...link} />
      ))}
    </div>
  );
};

export default LinksTab;
