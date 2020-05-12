import * as React from "react";

import "./styles.scss";

const Node = (props) => {
  return (
    <div className="Node">
      <div className="node_header">
        <span>Test</span>
        <span>Test</span>
      </div>
      <div className="node_main">
        <div className="node_body">
          <div className="node_body_header">My Card</div>
          <div className="node_body_main">
            <div className="item">
              <p>Test</p>
              <span>Test</span>
            </div>
            <div className="item">
              <p>Test</p>
              <span>Test</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Node;
