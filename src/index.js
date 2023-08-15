import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Router from './Router/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <Router />
        </RecoilRoot>
    </React.StrictMode>
);
