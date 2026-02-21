const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center px-4 pt-6">
      <div className="flex border-b-4 border-slate-900">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(index)}
            className={`px-6 py-3 text-lg font-bold border-4 border-slate-900 transition-all duration-200 -mb-1 ${
              activeTab === index
                ? "bg-white text-slate-900 border-b-white z-10 -translate-y-1"
                : "bg-slate-200 text-slate-600 hover:bg-slate-100 -translate-y-0"
            } ${index > 0 ? "-ml-1" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
