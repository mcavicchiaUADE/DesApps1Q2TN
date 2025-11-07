
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const NotificationCard: React.FC<{ title: string; body: string }> = ({ title, body }) => (
    <div className="bg-violet-200 rounded-xl p-4 shadow">
        <h3 className="font-bold text-violet-900">{title}</h3>
        <p className="text-sm text-gray-700 mt-1">{body}</p>
    </div>
);

const NotificationsScreen: React.FC = () => {
    const context = useContext(AppContext);
    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">¡Hola {context?.user?.name}!</h1>
            <p className="text-gray-600">Enterate de los nuevos descuentos</p>

            <div className="space-y-3">
                <NotificationCard 
                    title="ChangoMas" 
                    body="30% todos los miercoles de septiembre abonando con tarjetas de crédito del BNA a tráves de MODO"
                />
                 <NotificationCard 
                    title="Carrefour" 
                    body="25% de descuento en tu compra de Lácteos los días Jueves con Tarjeta Naranja X."
                />
                 <NotificationCard 
                    title="COTO" 
                    body="¡Oferta especial! 40% de descuento en productos de limpieza este fin de semana."
                />
            </div>
        </div>
    );
};

export default NotificationsScreen;
