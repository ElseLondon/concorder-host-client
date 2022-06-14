import React from 'react';
import './index.css';
import Routes from "./routes";
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Routes/>);
