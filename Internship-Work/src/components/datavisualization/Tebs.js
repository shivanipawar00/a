//from react
import React, { useState } from "react";
//from material ui
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
//from components
import TabData from "./TabData";
//from external modules
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
//function begins
const Tebs = ({ heading }) => {
  const [ted, setTed] = useState(TabData);

  return (
    <>
      <Tabs>
        <TabList style={{ display: "flex" }}>
          {ted.map((td) => {
            return <Tab key={td.id * Math.random()}>{heading}</Tab>;
          })}
          <Tab>
            <IconButton
              aria-label="add icon"
              size="small"
              onClick={() => {
                const obj = {
                  id: 2,
                  title: heading,
                  para: "Some Content as placeholder",
                };
                setTed((oldTed) => {
                  return [...oldTed, obj];
                });
              }}
            >
              <AddIcon />
            </IconButton>
          </Tab>
        </TabList>

        {ted.map((singTed, index) => {
          return (
            <>
              <TabPanel style={{ width: "100%" }} key={singTed.id}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right", marginLeft: "60px" }}
                  endIcon={<PlayCircleFilledWhiteIcon />}
                >
                  Run And View
                </Button>
              </TabPanel>
            </>
          );
        })}
      </Tabs>
    </>
  );
};

export default Tebs;
