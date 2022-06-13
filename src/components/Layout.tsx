import React from 'react';
import Sidebar from "./Sidebar";
// import { RouteComponentProps } from 'react-router-dom';


// export interface HistoryWithDefaultActive extends RouteComponentProps {
//   defaultActive: string | number
// }

interface LayoutProps {
  history: any, // fix any
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const {history, children} = props;

  return (
    <>
      <div style={{display: "flex", backgroundColor: '#343434' }}>
        <Sidebar history={history}/>
        {children}
      </div>
    </>
  );
}
