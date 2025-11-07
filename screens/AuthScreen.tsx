
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const InputField: React.FC<{ label: string; placeholder: string; type?: string }> = ({ label, placeholder, type = 'text' }) => (
    <div className="relative border border-gray-300 rounded-lg focus-within:border-violet-600">
        <label className="absolute -top-2.5 left-2 px-1 bg-white text-xs text-gray-500">{label}</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            className="w-full p-3 pt-4 text-sm bg-transparent outline-none"
        />
    </div>
);

const AuthScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const context = useContext(AppContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    context?.login({ name: 'Laura', lastName: 'Gomez', email: 'laura@example.com' });
  };
  
  return (
    <div className="w-full h-full flex flex-col justify-center p-8 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">
          {isLogin ? 'Inicia sesión para descubrir nuevos descuentos' : 'Registrate para encontrar los mejores descuentos'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        {!isLogin && (
          <>
            <InputField label="Nombre/s" placeholder="Ingresa tu/s nombre/s" />
            <InputField label="Apellidos/s" placeholder="Ingresa tu/s apellido/s" />
          </>
        )}
        <InputField label="Correo electrónico" placeholder="Ingresa tu correo electrónico" type="email" />
        <InputField label={isLogin ? "Contraseña" : "Crea una contraseña"} placeholder="Ingresa una contraseña" type="password" />
        {!isLogin && (
          <InputField label="Ingresa nuevamente tu contraseña" placeholder="Ingresa nuevamente tu contraseña" type="password" />
        )}
        
        <button
          type="submit"
          className="w-full bg-violet-700 text-white font-bold py-3 rounded-lg hover:bg-violet-800 transition-colors"
        >
          {isLogin ? 'Iniciar sesión' : 'Registrarse'}
        </button>
      </form>
      
      <div className="text-center mt-6">
        <button onClick={() => setIsLogin(!isLogin)} className="text-violet-700 font-semibold text-sm">
          {isLogin ? '¿No tenes una cuenta? Registrate' : '¿Ya tenes una cuenta? Inicia sesión'}
        </button>
      </div>
    </div>
  );
};

export default AuthScreen;
