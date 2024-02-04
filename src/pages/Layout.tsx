import profileImage from '../assets/profile.jpeg';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex h-screen bg-blue-100 bg-opacity-20">
      <div className="grid md:grid-cols-8">
        <div className="md:col-span-3">
          <img
            src={profileImage}
            alt="Profile-Michael_Mayer"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex items-center overflow-auto md:col-span-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
