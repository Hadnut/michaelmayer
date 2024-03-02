import Layout from '../pages/Layout';
import Header from '../components/Header/Header';
import Curtain from '../components/Curtain';

export default function App() {
  const navItems = [
    { id: 1, text: 'Home', route: '/' },
    { id: 2, text: 'Portfolio', route: '/portfolio' },
    { id: 3, text: 'Contact', route: '/contact' },
  ];

  return (
    <>
      <Curtain />
      <div className="pl-20 pr-20">
        <Header navItems={navItems} />
        <Layout />
      </div>
    </>
  );
}
