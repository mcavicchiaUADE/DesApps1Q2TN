
import React, { useState } from 'react';
import { Card } from '../types';
import { GearIcon } from '../components/Icons';
import { MOCK_CARDS, MOCK_WALLETS } from '../constants';

const AddedCard: React.FC<{ card: Card; onDelete: (id: string) => void }> = ({ card, onDelete }) => (
    <div className="bg-blue-100 p-3 rounded-lg flex justify-between items-center relative shadow">
        <div>
            <p className="font-bold text-blue-800">{card.bank}</p>
            <p className="text-sm text-gray-600">{card.type} - {card.issuer}</p>
        </div>
        <button onClick={() => onDelete(card.id)} className="absolute top-1 right-1 text-red-500 hover:text-red-700">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>
);

const DeleteModal: React.FC<{ onConfirm: () => void; onCancel: () => void }> = ({ onConfirm, onCancel }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-violet-200 rounded-2xl p-6 text-center max-w-sm mx-auto shadow-xl">
            <h3 className="text-lg font-bold text-gray-800">¿Deseas eliminar esta tarjeta?</h3>
            <p className="text-sm text-gray-600 my-4">Si aceptas, esta tarjeta se borrará definitivamente, pero podrás volver a crearla.</p>
            <div className="flex justify-center space-x-4">
                <button onClick={onConfirm} className="text-violet-700 font-semibold px-4 py-2 rounded-lg">Aceptar</button>
                <button onClick={onCancel} className="text-gray-600 font-semibold px-4 py-2 rounded-lg">Cancelar</button>
            </div>
        </div>
    </div>
);

const ProfileScreen: React.FC = () => {
    const [cards, setCards] = useState<Card[]>(MOCK_CARDS);
    const [showDeleteModal, setShowDeleteModal] = useState<string | null>(null);

    const handleDelete = () => {
        if (showDeleteModal) {
            setCards(cards.filter(c => c.id !== showDeleteModal));
            setShowDeleteModal(null);
        }
    };
    
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Mi perfil</h1>
                <GearIcon className="w-6 h-6 text-gray-600" />
            </div>

            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Mis tarjetas</h2>
                <div className="grid grid-cols-2 gap-4">
                    {cards.map(card => (
                        <AddedCard key={card.id} card={card} onDelete={() => setShowDeleteModal(card.id)} />
                    ))}
                    <button className="border-2 border-dashed border-violet-400 rounded-lg flex flex-col items-center justify-center text-violet-600 py-6 hover:bg-violet-50 transition-colors">
                        <span className="text-2xl">+</span>
                        <span>Agregar tarjeta</span>
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Mis billeteras digitales</h2>
                <div className="space-y-3">
                    {MOCK_WALLETS.map(wallet => (
                        <label key={wallet.id} className="flex items-center space-x-3">
                            <input type="checkbox" className="h-5 w-5 rounded text-violet-600 focus:ring-violet-500 border-gray-300" defaultChecked={wallet.checked} />
                            <span className="text-gray-700">{wallet.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            {showDeleteModal && <DeleteModal onConfirm={handleDelete} onCancel={() => setShowDeleteModal(null)} />}
        </div>
    );
};

export default ProfileScreen;
