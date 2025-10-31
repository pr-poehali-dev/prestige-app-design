import { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';
import AuthScreen from '@/components/AuthScreen';
import CatalogScreen from '@/components/CatalogScreen';
import ApartmentScreen from '@/components/ApartmentScreen';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'auth' | 'catalog' | 'apartment'>('splash');
  const [selectedApartment, setSelectedApartment] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('auth');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAuth = () => {
    setCurrentScreen('catalog');
  };

  const handleApartmentSelect = (id: number) => {
    setSelectedApartment(id);
    setCurrentScreen('apartment');
  };

  const handleBack = () => {
    setCurrentScreen('catalog');
    setSelectedApartment(null);
  };

  const showBottomNav = currentScreen !== 'splash' && currentScreen !== 'auth';

  return (
    <div className="h-screen w-full max-w-[1125px] mx-auto bg-sand overflow-hidden relative">
      {currentScreen === 'splash' && <SplashScreen />}
      {currentScreen === 'auth' && <AuthScreen onAuth={handleAuth} />}
      {currentScreen === 'catalog' && (
        <CatalogScreen onSelectApartment={handleApartmentSelect} />
      )}
      {currentScreen === 'apartment' && selectedApartment !== null && (
        <ApartmentScreen apartmentId={selectedApartment} onBack={handleBack} />
      )}
      
      {showBottomNav && <BottomNav currentScreen={currentScreen} />}
    </div>
  );
};

export default Index;