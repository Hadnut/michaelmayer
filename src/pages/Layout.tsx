import profileImage from '../assets/profile.jpeg';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main className="flex flex-1 overflow-hidden bg-blue-100 bg-opacity-20">
      <div className="grid md:grid-cols-8">
        <div className="overflow-hidden md:col-span-3">
          <img
            src={profileImage}
            alt="Profile-Michael_Mayer"
            className="h-screen w-full object-cover object-center"
          />
        </div>
        <div className="flex-1 overflow-y-auto md:col-span-5">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
