//from react
import React,{useState} from "react";
//from material ui
//from components
import TabData from "../TabData";
//from external modules
import { Tabs } from "@feuer/react-tabs";
import "react-tabs/style/react-tabs.css";
//function begins
const Dvtabs = () => {
    const [ted,setTed] = useState(TabData);
  
  return (
    <>
    <Tabs
    tabsProps={{
      style: {
        textAlign: "left",
        width:"100%"
      }
    }}
    activeTab={{
      id: "tab1"
    }}
  >
    <Tabs.Tab id="tab1" title="Tab 1">
      <div style={{ padding: 10 }}>This is tab 1</div>
    </Tabs.Tab>
    <Tabs.Tab id="tab2" title="Tab 2">
      <div style={{ padding: 10 }}>This is tab 2</div>
    </Tabs.Tab>
    <Tabs.Tab id="tab2" title="">
    <div style={{ padding: 10 }}>This is tab 2</div>
  </Tabs.Tab>
  </Tabs>
    </>
  );
};

export default Dvtabs;
