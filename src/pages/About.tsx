import { useCallback, useState } from 'react';
import reactLogo from '../assets/react.svg';
import styles from './home.module.css';

export default function About() {
  const [count, setCount] = useState(0);
  const handleCountClick = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div className="flex w-screen items-center justify-center text-center">
      <div className="flex h-5/6 w-5/6 flex-col sm:h-4/6 sm:w-4/6">
        <div className="grid grid-cols-2 justify-items-center">
          <h1 className="col-span-2 my-10 text-5xl font-medium leading-10">About Page</h1>
        </div>
        <div className="mb-10">
          <p className="font-mono text-base">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-base text-slate-400">Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}
