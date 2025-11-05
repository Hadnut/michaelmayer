import Layout from '../pages/Layout';
import Header from '../components/Header';
import Curtain from '../components/Curtain';
import Footer from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';

export default function App() {
  const navItems = [
    { id: 1, text: 'Home', route: '/' },
    { id: 2, text: 'Profile', route: '/profile' },
    { id: 3, text: 'Tech Stack', route: '/tech-stack' },
    { id: 4, text: 'Projects', route: '/projects' },
    { id: 5, text: 'Contact', route: '/contact' },
  ];

  return (
    <ThemeProvider>
      <Curtain />
      <div className="flex h-screen flex-col pr-20 pl-20">
        <Header navItems={navItems} />
        <Layout />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
