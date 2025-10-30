
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Screen, User, AppContextType } from './types';
import { AppContext } from './context/AppContext';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import FlyersScreen from './screens/FlyersScreen';
import ChatScreen from './screens/ChatScreen';
import Layout from './components/Layout';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>(Screen.Splash);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (screen === Screen.Splash) {
      const timer = setTimeout(() => setScreen(Screen.Onboarding), 2000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setScreen(Screen.Home);
  };

  const handleLogout = () => {
    setUser(null);
    setScreen(Screen.Auth);
  };
  
  const navigate = useCallback((targetScreen: Screen) => {
      setScreen(targetScreen);
  }, []);

  const contextValue = useMemo<AppContextType>(() => ({
    user,
    screen,
    login: handleLogin,
    logout: handleLogout,
    navigate,
  }), [user, screen, navigate]);

  const renderScreen = () => {
    if (!user) {
      switch (screen) {
        case Screen.Splash:
          return <SplashScreen />;
        case Screen.Onboarding:
          return <OnboardingScreen />;
        case Screen.Auth:
        default:
          return <AuthScreen />;
      }
    }
    
    // Authenticated user screens
    const mainContent = () => {
        switch (screen) {
            case Screen.Home:
                return <HomeScreen />;
            case Screen.Profile:
                return <ProfileScreen />;
            case Screen.Notifications:
                return <NotificationsScreen />;
            case Screen.Flyers:
                return <FlyersScreen />;
            case Screen.Chat:
                return <ChatScreen />;
            default:
                return <HomeScreen />;
        }
    }

    return <Layout>{mainContent()}</Layout>;
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="h-screen w-screen flex items-center justify-center font-sans">
        <div className="relative w-full max-w-sm h-full max-h-[850px] bg-white shadow-2xl overflow-hidden flex flex-col">
           {renderScreen()}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
