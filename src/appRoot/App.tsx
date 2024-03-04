import Layout from '../pages/Layout';
import Header from '../components/Header';
import Curtain from '../components/Curtain';
import Footer from '../components/Footer';

export default function App() {
  const navItems = [
    { id: 1, text: 'Home', route: '/' },
    { id: 2, text: 'Portfolio', route: '/portfolio' },
    { id: 3, text: 'Contact', route: '/contact' },
  ];

  return (
    <>
      <Curtain />
      <div className="flex h-screen flex-col pl-20 pr-20">
        <Header navItems={navItems} />
        <Layout />
        <Footer />
      </div>
    </>
  );
}
