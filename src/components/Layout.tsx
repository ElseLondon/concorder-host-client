import React from 'react';
import Sidebar from "./Sidebar";

function Layout(props: any) { // fix any as we have expected fields below
  return (
    <div>
      <div style={{display: "flex"}}>
        <Sidebar history={props.history}/>
        <div style={{maxWidth: '800px'}}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
