import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

if (
    document.location.hostname !== 'localhost' &&
    document.location.protocol !== 'https:'
) {
    document.location.protocol = 'https:';
}

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
