import React from "react";
import "./App.scss";

import Tree from "react-d3-tree";

import Node from "./components/Node";

const myTreeData = [
  {
    name: "Top Level",
    attributes: {
      keyA: "val A",
      keyB: "val B",
      keyC: "val C",
    },
    children: [
      {
        name: "Level 2: A",
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C",
        },
      },
      {
        name: "Level 2: B",
        children: [
          {
            name: "Level 2: B",
          },
          {
            name: "Level 2: B",
          },
          {
            name: "Level 2: B",
          },
        ],
      },
      {
        name: "Level 2: B",
      },
      {
        name: "Level 2: B",
      },
      {
        name: "Level 2: B",
      },
    ],
  },
];

function App() {
  return (
    <div id="treeWrapper" className="diagram-container">
      <Tree
        allowForeignObjects
        data={myTreeData}
        collapsible={false}
        nodeSize={{
          y: 200,
          x: 100,
        }}
        pathFunc="step"
        nodeSvgShape={{
          shape: "none",
          siblings: 3,
          size: {
            y: 300,
            x: 400,
          },
          shapeProps: {
            width: 20,
            height: 20,
            x: -180,
            y: -180,
          },
        }}
        separation={{ siblings: 2.3, nonSiblings: 2 }}
        shape={"none"}
        styles={{
          links: {
            stroke: "blue",
            strokeWidth: 3,
          },
        }}
        orientation="vertical"
        nodeLabelComponent={{
          render: <Node />,
          foreignObjectWrapper: {
            y: -60,
            x: -145,
            width: 300,
            height: 600,
          },
        }}
      />
    </div>
  );
}

export default App;
