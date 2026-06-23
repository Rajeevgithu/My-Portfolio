import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaHandPeace, FaHandPaper, FaTimes } from 'react-icons/fa';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useChat } from '@/hooks/useChat';
import { CHAT_SUGGESTIONS } from '@/constants/chatSuggestions';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const showSuggestions = messages.length <= 1 && !isLoading;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 sm:w-[380px] z-[60] flex flex-col rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl shadow-[#7C6CF6]/10 overflow-hidden max-h-[min(70vh,520px)]"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-to-r from-[#7C6CF6]/10 to-[#9B8AFF]/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] flex items-center justify-center text-white">
                  <FaHandPeace size={14} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Rajeev's Assistant</p>
                  <p className="text-xs text-muted-foreground">Powered by AI (Gemini / Groq)</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={clearChat}
                  aria-label="Clear chat"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <FaHandPaper size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[240px]">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-muted/80 border border-border px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#7C6CF6] animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-[#7C6CF6] animate-bounce [animation-delay:0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-[#7C6CF6] animate-bounce [animation-delay:0.3s]" />
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <div ref={messagesEndRef} />
            </div>

            <ChatInput
              onSend={sendMessage}
              disabled={isLoading}
              suggestions={showSuggestions ? CHAT_SUGGESTIONS : []}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close AI chat' : 'Open AI chat'}
        className="fixed bottom-6 left-4 sm:left-6 z-[60] w-14 h-14 rounded-full bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white shadow-lg shadow-[#7C6CF6]/30 flex items-center justify-center"
      >
        {isOpen ? (
          <FaTimes size={20} />
        ) : (
          <motion.span
            animate={{ rotate: [0, 18, -10, 16, -6, 12, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut',
            }}
            className="inline-flex"
          >
            <FaHandPeace size={24} />
          </motion.span>
        )}
      </motion.button>
    </>
  );
};

export default ChatWidget;
