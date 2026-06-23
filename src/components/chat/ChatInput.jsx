import { useState } from 'react';
import { FaHandPointRight } from 'react-icons/fa6';

const ChatInput = ({ onSend, disabled, suggestions = [] }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim() || disabled) return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="border-t border-border p-3 bg-background/80">
      {suggestions.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              disabled={disabled}
              onClick={() => onSend(suggestion)}
              className="text-xs px-3 py-1.5 rounded-full border border-[#7C6CF6]/30 text-[#7C6CF6] hover:bg-[#7C6CF6]/10 transition-colors disabled:opacity-50"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about Rajeev's work..."
          disabled={disabled}
          className="flex-1 rounded-xl border border-border bg-muted/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C6CF6]/50 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          aria-label="Send message"
          className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-r from-[#7C6CF6] to-[#9B8AFF] text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          <FaHandPointRight size={16} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
