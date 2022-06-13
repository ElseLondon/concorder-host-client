import React from 'react';
import Sidebar from "./Sidebar";
import {RouteComponentProps} from 'react-router-dom';


interface LayoutProps {
  history: RouteComponentProps['history'],
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
