import Layout from '../pages/Layout';
import Navbar from '../components/Header/Header';

export default function App() {
  const navItems = [
    { id: 1, text: 'Home', route: '/' },
    { id: 2, text: 'Portfolio', route: '/portfolio' },
    { id: 3, text: 'Contact', route: '/contact' },
  ];

  return (
    <div className="pl-20 pr-20">
      <Navbar navItems={navItems} />
      <Layout />
    </div>
  );
}
