
import { Discount, Card } from "./types";

export const MOCK_DISCOUNTS: Discount[] = [
    {
        id: '1',
        store: 'ChangoMas y MasOnline',
        percentage: 30,
        day: 'Miercoles',
        bank: 'Banco Nación',
        paymentMethod: 'MODO',
        cards: ['Crédito', 'Visa', 'MasterCard']
    },
    {
        id: '2',
        store: 'ChangoMas y MasOnline',
        percentage: 30,
        day: 'Miercoles',
        bank: 'Macro',
        paymentMethod: 'MODO',
        cards: ['Crédito', 'American Express']
    },
    {
        id: '3',
        store: 'COTO',
        percentage: 30,
        day: 'Jueves',
        bank: 'Banco Nación',
        paymentMethod: 'MODO',
        cards: ['Crédito']
    },
    {
        id: '4',
        store: 'Carrefour',
        percentage: 25,
        day: 'Martes',
        bank: 'Santander',
        paymentMethod: 'App Santander',
        cards: ['Crédito', 'Visa']
    },
];

export const MOCK_CARDS: Card[] = [
    {
        id: 'c1',
        bank: 'Banco Nación',
        type: 'Crédito',
        issuer: 'MasterCard',
    },
];

export const MOCK_WALLETS = [
    { id: 'w1', name: 'Mercado Pago', checked: true },
    { id: 'w2', name: 'MODO', checked: true },
    { id: 'w3', name: 'Ualá', checked: false },
    { id: 'w4', name: 'Cuenta DNI', checked: false },
    { id: 'w5', name: 'Naranja X', checked: false },
    { id: 'w6', name: 'Personal Pay', checked: false },
];
