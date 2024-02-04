import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './utilities/reportWebVitals';
import App from './appRoot/App';
import './index.css';

// Wrap in main() so that tests can import this file
export function main() {
  const rootDiv = document.getElementById('root');
  if (rootDiv) {
    createRoot(rootDiv).render(
      <StrictMode>
        <App />
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
