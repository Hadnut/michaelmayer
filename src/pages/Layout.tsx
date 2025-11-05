import profileImage from '../assets/profile.jpeg';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main className="bg-opacity-20 flex flex-1 overflow-hidden bg-blue-100 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-8 w-full overflow-x-hidden">
        <div className="hidden md:block overflow-hidden md:col-span-3">
          <img
            src={profileImage}
            alt="Profile-Michael_Mayer"
            className="h-screen w-full object-cover object-center"
          />
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden md:col-span-5">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
