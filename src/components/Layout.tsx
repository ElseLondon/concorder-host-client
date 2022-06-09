import React from 'react';
import Sidebar from "./Sidebar";

function Layout(props: any) {
  return (
    <div>
      <div style={{display: "flex", backgroundColor: '#343434' }}>
        <Sidebar history={props.history}/>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
