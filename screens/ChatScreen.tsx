
import React, { useState, useContext, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { AppContext } from '../context/AppContext';
import { ChatMessage } from '../types';
import { SearchIcon } from '../components/Icons';

const ChatScreen: React.FC = () => {
    const context = useContext(AppContext);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            sender: 'bot',
            text: `Hola ${context?.user?.name}, soy Rebajito. Uso Inteligencia Artificial para buscar los descuentos que mejor se adapten a tus necesidades. ¿En qué te puedo ayudar hoy?`
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        try {
            if (!process.env.API_KEY) {
                setMessages(prev => [...prev, { sender: 'bot', text: 'La clave de API no está configurada. No puedo conectarme.'}]);
                return;
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            chatRef.current = ai.chats.create({
              model: 'gemini-2.5-flash',
              config: {
                systemInstruction: `Eres Rebajito, un asistente de IA para la app Descuentulis. Tu objetivo es ayudar a los usuarios a encontrar los mejores descuentos en supermercados de Argentina. Sé amigable, conciso y útil. El nombre del usuario es ${context?.user?.name}.`,
              },
            });
        } catch (error) {
             console.error("Error initializing Gemini:", error);
             setMessages(prev => [...prev, { sender: 'bot', text: 'Hubo un error al iniciar el chat. Por favor, intenta de nuevo más tarde.'}]);
        }
    }, [context?.user?.name]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            if (!chatRef.current) {
                throw new Error("El chat no está inicializado.");
            }
            const result = await chatRef.current.sendMessage({ message: input });
            const botMessage: ChatMessage = { sender: 'bot', text: result.text };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorMessage: ChatMessage = { sender: 'bot', text: "Lo siento, tuve un problema para procesar tu pedido. Intenta de nuevo." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="flex flex-col h-full bg-white p-4">
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-violet-700 text-white rounded-br-none' : 'bg-violet-200 text-gray-800 rounded-bl-none'}`}>
                           {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex justify-start">
                        <div className="bg-violet-200 text-gray-800 rounded-2xl rounded-bl-none px-4 py-3">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="mt-4 flex items-center space-x-2 bg-violet-200 rounded-full p-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="¿En qué te puedo ayudar hoy?"
                    className="flex-1 bg-transparent outline-none px-3 text-gray-800 placeholder-gray-500"
                    disabled={isLoading}
                />
                <button onClick={handleSend} disabled={isLoading || !input.trim()} className="bg-violet-700 rounded-full p-2 text-white disabled:bg-violet-400">
                    <SearchIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default ChatScreen;
