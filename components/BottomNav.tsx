
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Screen } from '../types';
import { FlyersIcon, SearchIcon, SmileyLogo } from './Icons';

const BottomNav: React.FC = () => {
  const context = useContext(AppContext);
  const activeScreen = context?.screen;

  const NavButton: React.FC<{ screen: Screen; children: React.ReactNode; label: string }> = ({ screen, children, label }) => {
    const isActive = activeScreen === screen;
    return (
      <button 
        onClick={() => context?.navigate(screen)}
        className={`flex flex-col items-center justify-center transition-colors duration-200 ${isActive ? 'text-white' : 'text-violet-300 hover:text-white'}`}
        aria-label={label}
      >
        {children}
      </button>
    );
  };
  
  const isChatActive = activeScreen === Screen.Chat;

  return (
    <footer className="relative bg-violet-700 text-white p-2 flex justify-around items-center shadow-t-md flex-shrink-0">
       {isChatActive && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-6 h-3 bg-violet-700" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      )}
      <NavButton screen={Screen.Flyers} label="Flyers">
        <FlyersIcon className="w-8 h-8" />
      </NavButton>
      <NavButton screen={Screen.Chat} label="AI Chat">
         <div className={`p-2 rounded-full transition-all duration-200 ${isChatActive ? 'bg-white' : 'bg-transparent'}`}>
            <SmileyLogo className={`w-12 h-12 transition-colors duration-200 ${isChatActive ? 'text-violet-700' : 'text-white'}`} />
         </div>
      </NavButton>
      <NavButton screen={Screen.Home} label="Search Discounts">
        <SearchIcon className="w-8 h-8" />
      </NavButton>
    </footer>
  );
};

export default BottomNav;
