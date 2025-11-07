
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Screen } from '../types';
import { ArrowRightIcon } from '../components/Icons';

const onboardingSteps = [
  {
    image: 'https://picsum.photos/seed/onboarding1/300/300',
    title: 'Buscá descuentos en supermercados y encontrá ofertas en tus productos preferidos',
  },
  {
    image: 'https://picsum.photos/seed/onboarding2/300/300',
    title: 'Personalizá tus tarjetas y billeteras para ver solo los descuentos que te aplican',
  },
  {
    image: 'https://picsum.photos/seed/onboarding3/300/300',
    title: 'Descubrí los beneficios que ofrecen las billeteras digitales',
  },
];

const OnboardingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const context = useContext(AppContext);

  const handleContinue = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      context?.navigate(Screen.Auth);
    }
  };

  const handleSkip = () => {
    context?.navigate(Screen.Auth);
  };

  const step = onboardingSteps[currentStep];

  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-8 bg-white">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <img src={step.image} alt="Onboarding illustration" className="w-64 h-64 object-contain mb-12 rounded-lg" />
        <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex space-x-2 mb-8">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentStep ? 'bg-violet-700 scale-125' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
        <button
          onClick={handleContinue}
          className="w-full bg-violet-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-violet-800 transition-colors"
        >
          <span>Continuar</span>
          <ArrowRightIcon className="w-5 h-5" />
        </button>
        <button
          onClick={handleSkip}
          className="mt-4 text-violet-700 font-semibold"
        >
          Omitir
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
