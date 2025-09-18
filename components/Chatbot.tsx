import React, { useState, useEffect, useRef } from 'react';
import { ChatIcon } from './icons/ChatIcon';
import { CloseIcon } from './icons/CloseIcon';
import { SendIcon } from './icons/SendIcon';

type Message = {
    text: string;
    sender: 'user' | 'vynn';
};

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hello! I'm Vynn, your AI assistant. How can I help you today?", sender: 'vynn' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newUserMessage: Message = { text, sender: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulated AI response
        setTimeout(() => {
            const response = getVynnResponse(text);
            const newVynnMessage: Message = { text: response, sender: 'vynn' };
            setMessages(prev => [...prev, newVynnMessage]);
            setIsTyping(false);
        }, 1500 + Math.random() * 500);
    };

    const getVynnResponse = (question: string): string => {
        const q = question.toLowerCase();
        if (q.includes('service')) {
            return "We offer three core services: AI & Machine Learning, Custom Software Development, and Cloud & DevOps. Which one are you most interested in?";
        }
        if (q.includes('team')) {
            return "Our team consists of visionary engineers, data scientists, and creative thinkers dedicated to innovation. You can see our key members in the 'Our Team' section!";
        }
        if (q.includes('contact')) {
            return "The best way to reach us is through the contact form on our website. We'd love to hear about your project!";
        }
        return "That's a great question! While I'm still in training, a member of our team would be happy to provide more details. You can reach them through the contact form.";
    };

    const suggestions = ["What services do you offer?", "Tell me about the team", "How can I contact you?"];

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                aria-label="Toggle chatbot"
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </button>

            {/* Chat Window */}
            <div className={`absolute bottom-20 right-0 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl transition-all duration-300 ease-in-out origin-bottom-right ${isOpen && isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-4 bg-gray-100 dark:bg-gray-900/50 rounded-t-2xl">
                    <h3 className="text-lg font-bold text-center text-gray-800 dark:text-white">Chat with Vynn</h3>
                </div>
                
                <div className="h-96 p-4 overflow-y-auto flex flex-col space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-purple-500 text-white rounded-br-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-lg'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="p-3 rounded-2xl bg-gray-200 dark:bg-gray-700 rounded-bl-lg flex items-center space-x-1.5">
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {suggestions.map(s => (
                            <button key={s} onClick={() => handleSendMessage(s)} className="px-3 py-1 text-xs text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900">
                                {s}
                            </button>
                        ))}
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                        <button type="submit" className="p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 disabled:bg-purple-300" disabled={!inputValue.trim()}>
                            <SendIcon />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chatbot;