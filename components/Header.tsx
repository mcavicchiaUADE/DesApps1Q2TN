
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Screen } from '../types';
import { MainLogo, NotificationIcon, UserIcon } from './Icons';

const Header: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <header className="bg-violet-700 text-white p-4 flex justify-between items-center shadow-md flex-shrink-0">
      <button onClick={() => context?.navigate(Screen.Notifications)} aria-label="Notifications">
        <NotificationIcon className="w-8 h-8" />
      </button>
      <button onClick={() => context?.navigate(Screen.Home)} aria-label="Home">
        <MainLogo className="w-12 h-12 text-white" />
      </button>
      <button onClick={() => context?.navigate(Screen.Profile)} aria-label="Profile">
        <UserIcon className="w-8 h-8" />
      </button>
    </header>
  );
};

export default Header;
