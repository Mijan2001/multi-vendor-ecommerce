import { createRoot } from 'react-dom/client';
import './index.css';
import { lazy, Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Suspense fallback="Loading....">
            <App />
        </Suspense>
    </BrowserRouter>
);
