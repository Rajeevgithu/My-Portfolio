import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import useThemeStore from '@/context/store';
import { ScrollProvider } from '@/context/ScrollProvider';
import ErrorBoundary from '@/components/ErrorBoundary';

function ThemeProvider({ children }) {
  const { theme, setTheme } = useThemeStore();
  
  React.useEffect(() => {
    // Initialize theme on first load
    const savedTheme = localStorage.getItem('theme-storage');
    if (!savedTheme) {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, [setTheme]);

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return children;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <ScrollProvider>
          <App />
        </ScrollProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
