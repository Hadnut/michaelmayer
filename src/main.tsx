import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './utilities/reportWebVitals';
import App from './appRoot/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export function main() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/portfolio',
          element: <Portfolio />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);
  const rootDiv = document.getElementById('root');
  if (rootDiv) {
    createRoot(rootDiv).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
  }
}

main();

/**
 * If you want to start measuring performance in your app pass a function to log results.
 * You can read more at https://github.com/GoogleChrome/web-vitals#readme
 *
 * Example: reportWebVitals(console.log)
 */
void reportWebVitals();
