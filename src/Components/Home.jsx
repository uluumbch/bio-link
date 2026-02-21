import { useState } from "react";
import profileyellow from "../profile-pic_yellow.png";
import ProfileHeader from "./ProfileHeader";
import SocialLinks from "./SocialLinks";
import Tabs from "./Tabs";
import SwipeableContainer from "./SwipeableContainer";
import LinksTab from "./LinksTab";
import AboutTab from "./AboutTab";
import ProjectsTab from "./ProjectsTab";

const tabs = [
  { id: "links", label: "Links", component: LinksTab },
  { id: "about", label: "About", component: AboutTab },
  { id: "projects", label: "Projects", component: ProjectsTab },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSwipeLeft = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const handleSwipeRight = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="max-w-md bg-yellow-500 mx-auto min-h-screen pb-8">
      <ProfileHeader
        image={profileyellow}
        name="Bachrul Uluum"
        subtitle="Programmer"
      />
      <SocialLinks />
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <SwipeableContainer
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
      >
        <div className="transition-opacity duration-300">
          <ActiveComponent />
        </div>
      </SwipeableContainer>

      {/* Swipe indicator for mobile */}
      <div className="flex justify-center gap-3 pt-6">
        {tabs.map((_, index) => (
          <div
            key={index}
            className={`h-3 border-2 border-slate-900 transition-all duration-200 ${
              activeTab === index ? "bg-slate-900 w-8" : "bg-white w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
