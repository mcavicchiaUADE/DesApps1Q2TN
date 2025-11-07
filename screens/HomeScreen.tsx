
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Discount, Screen } from '../types';
import { MOCK_DISCOUNTS } from '../constants';
import { BarcodeIcon } from '../components/Icons';

const DiscountCard: React.FC<{ discount: Discount }> = ({ discount }) => (
    <div className="bg-violet-200 rounded-2xl p-4 flex items-center space-x-4 shadow">
        <div className="flex flex-col items-center justify-center w-1/4">
            <span className="text-4xl font-bold text-violet-800">{discount.percentage}%</span>
            <span className="text-sm font-semibold text-violet-700">{discount.day}</span>
            <a href="#" className="text-xs text-blue-600 underline mt-1">Ir a la página</a>
        </div>
        <div className="flex-1 border-l-2 border-dashed border-violet-400 pl-4">
            <h3 className="font-bold text-gray-800">{discount.store}</h3>
            <div className="text-sm text-gray-700 mt-1">
                <p><span className="font-semibold">Banco:</span> {discount.bank}</p>
                <p><span className="font-semibold">Método:</span> {discount.paymentMethod}</p>
                <p><span className="font-semibold">Tarjetas:</span> {discount.cards.join(' • ')}</p>
            </div>
        </div>
    </div>
);

const FiltersPanel: React.FC<{onApply: () => void}> = ({onApply}) => {
    const days = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
    const supermarkets = ['ChangoMas', 'Carrefour', 'COTO', 'Jumbo', 'Disco', 'Vea', 'Día'];
    const sortOptions = ['Mayor descuento', 'Menor descuento', 'Más nuevos'];
    
    return (
        <div className="bg-violet-800 text-white p-6 rounded-b-2xl shadow-lg">
            <div className="mb-4">
                <h4 className="font-bold mb-2">Días</h4>
                <div className="flex justify-between">
                    {days.map(day => (
                        <button key={day} className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-violet-600 focus:bg-violet-500 transition-colors">{day}</button>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h4 className="font-bold mb-2">Supermercado</h4>
                <div className="flex flex-wrap gap-2">
                    {supermarkets.map(sm => (
                        <button key={sm} className="px-3 py-1 text-sm rounded-full border border-white hover:bg-violet-600 focus:bg-violet-500 transition-colors">{sm}</button>
                    ))}
                </div>
            </div>
             <div className="mb-6">
                <h4 className="font-bold mb-2">Ordenar por</h4>
                <div className="flex flex-wrap gap-2">
                    {sortOptions.map(opt => (
                        <button key={opt} className="px-3 py-1 text-sm rounded-full border border-white hover:bg-violet-600 focus:bg-violet-500 transition-colors">{opt}</button>
                    ))}
                </div>
            </div>
            <button onClick={onApply} className="w-full bg-violet-600 text-white font-bold py-2 rounded-lg hover:bg-violet-500 transition-colors">
                Aplicar
            </button>
        </div>
    )
}

const HomeScreen: React.FC = () => {
    const context = useContext(AppContext);
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="p-4 space-y-4 overflow-y-auto">
            <h1 className="text-2xl font-bold text-gray-800">¡Hola {context?.user?.name}!</h1>
            <p className="text-gray-600">Te recomendamos los siguientes descuentos</p>
            
            <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setShowFilters(!showFilters)} className="w-full bg-violet-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-violet-800 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V16a1 1 0 01-.293.707l-2 2A1 1 0 0113 18v-2.586l-3.707-3.707A1 1 0 019 11V6a1 1 0 01-.293-.707L8 4.586V4a1 1 0 01-1-1H4a1 1 0 01-1-1z"></path></svg>
                    <span>Filtros</span>
                </button>
                 <button onClick={() => context?.navigate(Screen.BarcodeScanner)} className="w-full bg-violet-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-violet-800 transition-colors">
                    <BarcodeIcon className="w-5 h-5" />
                    <span>Escanear</span>
                </button>
            </div>

            {showFilters && <FiltersPanel onApply={() => setShowFilters(false)} />}
            
            <div className="space-y-4">
                {MOCK_DISCOUNTS.map(discount => (
                    <DiscountCard key={discount.id} discount={discount} />
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;