'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './AIChat.module.css';

const QUICK_REPLIES = [
  'Хочу родословную книгу',
  'Нужно исследование',
  'Как найти предков?',
  'Сколько стоит?',
];

const FALLBACK_RESPONSES: Record<string, string> = {
  'родословн': 'Родословная книга — отличный выбор! Это роскошное издание с полной историей рода, архивными документами и фотографиями. Стоимость от 50 000 руб., срок 1-2 месяца. Оставите заявку?',
  'книга': 'Родословная книга создаётся индивидуально. В неё входит: полная генеалогия, архивные документы, фотографии, биографии предков. Переплёт — кожаный или твёрдый.',
  'исслед': 'Генеалогическое исследование включает поиск в архивах, церковных записях и базах данных. Результат — подробный отчёт с документами. Стоимость от 30 000 руб.',
  'поиск': 'Архивный поиск — мы работаем с госархивами РФ, церковными и военными архивами. Находим метрические книги, ревизские сказки, документы ЗАГС.',
  'древо': 'Семейное древо — визуальная схема рода с фотографиями. Печатный плакат или интерактивный цифровой формат. От 15 000 руб.',
  'сколько': 'Стоимость зависит от объёма. Базовое исследование — от 30 000 руб., родословная книга — от 50 000 руб., семейное древо — от 15 000 руб.',
  'срок': 'Срок: базовое исследование — 2-4 недели, полное — 1-2 месяца, родословная книга — 1-3 месяца.',
  'дешевле': 'У нас есть эконом-варианты. Семейное древо — от 15 000 руб., мини-исследование — от 20 000 руб.',
  'контакт': 'Оставьте заявку: info@familyheritage.ru или позвоните: +7 (900) 000-00-00',
  '默认': 'Спасибо за обращение! Расскажите подробнее, какой информацией о семье вы владеете? Или выберите услугу из списка.',
};

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Здравствуйте! Я — консультант Семейного Наследия. Помогу подобрать услугу или отвечу на вопросы о генеалогии.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openChat', handleOpen);
    return () => window.removeEventListener('openChat', handleOpen);
  }, []);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getResponse = (text: string): string => {
    const lower = text.toLowerCase();
    for (const [key, value] of Object.entries(FALLBACK_RESPONSES)) {
      if (lower.includes(key) && key !== '默认') return value;
    }
    return FALLBACK_RESPONSES['默认'];
  };

  const sendMessage = (text: string) => {
    if (!text.trim() || loading) return;
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);
    
    setTimeout(() => {
      const reply = getResponse(text);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setLoading(false);
    }, 500 + Math.random() * 400);
  };

  return (
    <>
      <button 
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Консультант"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
        </svg>
        {messages.length === 1 && <span className={styles.badge}>AI</span>}
      </button>

      <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <span className={styles.avatar}>🤖</span>
            <div>
              <h3>Консультант</h3>
              <span>Семейное Наследие</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Закрыть">✕</button>
        </div>

        <div className={styles.messages}>
          {messages.map((msg, i) => (
            <div key={i} className={`${styles.message} ${msg.role === 'user' ? styles.user : ''}`}>
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className={styles.typing}>
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEnd} />
        </div>

        <div className={styles.quickReplies}>
          {QUICK_REPLIES.map((reply, i) => (
            <button key={i} onClick={() => sendMessage(reply)} disabled={loading}>
              {reply}
            </button>
          ))}
        </div>

        <form className={styles.input} onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ваше сообщение..."
            disabled={loading}
          />
          <button type="submit" disabled={!input.trim() || loading}>→</button>
        </form>
      </div>
    </>
  );
}