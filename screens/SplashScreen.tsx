
import React from 'react';
import { MainLogo } from '../components/Icons';

const SplashScreen: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-violet-700 text-white animate-fade-in">
      <MainLogo className="w-48 h-48 mb-4" />
      <h1 className="text-4xl font-bold tracking-wider">Descuentulis</h1>
    </div>
  );
};

export default SplashScreen;
