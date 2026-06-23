import { motion } from 'framer-motion';

const ChatMessage = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white rounded-br-md'
            : 'bg-muted/80 border border-border text-foreground rounded-bl-md'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
