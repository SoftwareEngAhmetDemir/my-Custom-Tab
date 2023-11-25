import React, { useEffect, useState } from "react";
import TabBody from "./TabBody";
import TabCards from "./TabCards";

function Tab({ data, selectedTab, Render }) {
  const [activeTab, setActiveTab] = useState(selectedTab ?? 0);
  const [prevTab, setPrevTabKey] = useState(selectedTab ?? 0);
  const [tabs, setTabs] = useState([...data]);

  const clickedTab = (e) => {
    tabs[prevTab].visited = false;
    setPrevTabKey(e.key);
    e.visited = true;
    e.rendered = true;
    tabs[e.key] = e;
    setTabs(tabs);
    setActiveTab(e.key);
  };
  useEffect(() => {
    tabs[activeTab].rendered = true;
    tabs[activeTab].visited = true;
    setTabs([...tabs]);
  }, []);
  const RenderTabs = () =>
    Render ? (
      Render(() => <TabCards tabs={tabs} clickedTab={clickedTab} />)
    ) : (
      <TabCards tabs={tabs} clickedTab={clickedTab} />
    );
  return (
    <div>
      <RenderTabs />
      <TabBody tabs={tabs} selectedTab={activeTab} clickedTab={clickedTab} />
    </div>
  );
}

export default Tab;
