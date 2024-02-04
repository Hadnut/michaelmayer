import Home from '../pages/Home';
import About from '../pages/About';
import Navbar from '../components/Header/Header';
import { Key, useState } from 'react';

export default function App() {
  const navItems = [
    { id: 1, text: 'Home'},
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];
  const [activeItem, setActiveItem] = useState<Key>(1);
  const setLastItem =  () => {
    setActiveItem(navItems[navItems.length - 1].id)
  };

  return (
    <div className="pl-20 pr-20">
      <Navbar changeActiveItem={setActiveItem} activeItem={activeItem} navItems={navItems} />
      <Home changeActiveItem={setLastItem}/>
    </div>
  );
}
