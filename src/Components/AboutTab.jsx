const AboutTab = () => {
  return (
    <div className="pt-6 px-6 text-slate-900">
      <div className="bg-white p-6 border-4 border-slate-900 drop-shadow-[6px_6px_0px_black]">
        <h3 className="text-2xl font-black mb-4 uppercase">About Me</h3>
        <p className="text-base leading-relaxed mb-4 font-medium">
          Hi! I'm a passionate programmer who loves building things for the web.
          I enjoy working with modern technologies and creating solutions that
          make a difference.
        </p>
        <h4 className="text-lg font-black mb-2 uppercase">Skills</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {["JavaScript", "React", "Node.js", "Python", "n8n"].map((skill) => (
            <span
              key={skill}
              className="bg-rose-600 text-white px-3 py-1 text-sm font-bold border-2 border-slate-900"
            >
              {skill}
            </span>
          ))}
        </div>
        <h4 className="text-lg font-black mb-2 uppercase">Interests</h4>
        <p className="text-base leading-relaxed font-medium">
          Automation, Open Source, Web Development, and Learning new
          technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutTab;
