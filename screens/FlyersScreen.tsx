
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ChevronRightIcon } from '../components/Icons';

const FlyerLink: React.FC<{ store: string }> = ({ store }) => (
    <button className="w-full bg-violet-200 rounded-lg p-4 flex justify-between items-center text-left hover:bg-violet-300 transition-colors shadow">
        <span className="font-semibold text-gray-800">{store}</span>
        <ChevronRightIcon className="w-6 h-6 text-violet-700" />
    </button>
);

const FlyersScreen: React.FC = () => {
    const context = useContext(AppContext);
    const supermarkets = ['ChangoMas', 'Carrefour', 'COTO', 'Día', 'Jumbo', 'Vea'];

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">¡Hola {context?.user?.name}!</h1>
            <p className="text-gray-600">Te mostramos los folletos disponibles</p>

            <div className="space-y-3">
                {supermarkets.map(store => <FlyerLink key={store} store={store} />)}
            </div>
        </div>
    );
};

export default FlyersScreen;
