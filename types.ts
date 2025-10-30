
export enum Screen {
  Splash,
  Onboarding,
  Auth,
  Home,
  Profile,
  Notifications,
  Flyers,
  Chat,
  AddCard
}

export interface User {
  name: string;
  lastName: string;
  email: string;
}

export interface Card {
  id: string;
  bank: string;
  type: 'Crédito' | 'Débito';
  issuer: 'Visa' | 'MasterCard' | 'American Express';
}

export interface Discount {
  id: string;
  store: string;
  percentage: number;
  day: string;
  bank: string;
  paymentMethod: string;
  cards: string[];
}

export interface AppContextType {
  user: User | null;
  screen: Screen;
  login: (user: User) => void;
  logout: () => void;
  navigate: (screen: Screen) => void;
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}
